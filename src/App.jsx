import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  json,
  Navigate,
} from "react-router-dom";

import "./css/style.css";
import "./charts/ChartjsConfig";

// Utils
import { getUserIsLogin } from "./utils/Utils";
import Setting from "./pages/setting";
import { APIBASEURL, FecthData, requestSetting } from "./service/API";

// ----- Pages ----- //

// Dashboard
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";

// PPDB
import PPDB from "./pages/PPDB/admin/PPDB";
import DetailPPDB from "./pages/PPDB/detailPPPD";
import AddRegister from "./pages/PPDB/student/AddRegister";
import PPDBStudent from "./pages/PPDB/student/PPDBStudent";

// Auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// Forbidden
import NotLogin from "./pages/notLogin";

// Landing Page
import Home from "./pages/Landing Page/Home";
import ProfileSekolah from "./pages/Landing Page/ProfileSekolah";
import LowonganPekerjaan from "./pages/Landing Page/LowonganPekerjaan";
import MitraIndustri from "./pages/Landing Page/MitraIndustri";
import Artikel from "./pages/Landing Page/artikel/Artikel";
import DirektoriAlumni from "./pages/Landing Page/siswa/DirektoriAlumni";
import DirektoriSiswa from "./pages/Landing Page/siswa/DirektoriSiswa";
import DirektoriGuru from "./pages/Landing Page/siswa/DirektoriGuru";
import TKJ from "./pages/Landing Page/jurusan/TKJ";
import AKL from "./pages/Landing Page/jurusan/AKL";
import OKTP from "./pages/Landing Page/jurusan/OKTP";
import PPDBLanding from "./pages/Landing Page/PPDB";
import HubungiKami from "./pages/Landing Page/HubungiKami";
import AddJobs from "./pages/Dashboard/Jobs/AddJobs";
import Jobs from "./pages/Dashboard/Jobs/Jobs";

const ProtedtedRoute = ({ user, student = "", admin = "" }) => {
  if (!JSON.parse(localStorage.getItem("logged"))) {
    return <NotLogin />;
  }

  if (user == "student") {
    return student;
  }
  return admin;
};

const IsNotLogged = ({ logged, children }) => {
  const navigate = useNavigate();

  if (logged) {
    return children;
  }

  return <Login />;
};
function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  useEffect(() => {
    const refreshToken = async () => {
      const request = await fetch(
        `${APIBASEURL}/auth/refresh`,
        requestSetting("POST")
      );

      const result = await request.json();
      const data = result;

      let user = JSON.parse(localStorage.getItem("usr"));
      user.acctkn = data.access_token;

      localStorage.setItem("usr", JSON.stringify(user));
    };

    setInterval(() => {});
    setInterval(() => {
      (async () => refreshToken())();
    }, 50000);
    return () => clearInterval();
  }, []);

  return (
    <>
      <Routes>
        {/* Landing Page */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile_sekolah" element={<ProfileSekolah />} />
        <Route exact path="/lowongan" element={<LowonganPekerjaan />} />
        <Route exact path="/mitra" element={<MitraIndustri />} />
        <Route exact path="/artikel" element={<Artikel />} />
        <Route exact path="/direktori_alumni" element={<DirektoriAlumni />} />
        <Route exact path="/direktori_siswa" element={<DirektoriSiswa />} />
        <Route exact path="/direktori_guru" element={<DirektoriGuru />} />
        <Route exact path="/tkj" element={<TKJ />} />
        <Route exact path="/akl" element={<AKL />} />
        <Route exact path="/oktp" element={<OKTP />} />
        <Route exact path="/ppdb" element={<PPDBLanding />} />
        <Route exact path="/hubungi_kami" element={<HubungiKami />} />

        {/* Dashboard */}
        <Route exact path="/dashboard/lowongan" element={<Jobs />} />
        <Route exact path="/dashboard/tambah_lowongan" element={<AddJobs />} />

        <Route
          exact
          path="/dashboard"
          element={
            <IsNotLogged logged={JSON.parse(localStorage.getItem("logged"))}>
              <Dashboard />
            </IsNotLogged>
          }
        />
        {/* PPDB */}
        <Route
          exact
          path="/dashboard/ppdb"
          element={
            <ProtedtedRoute
              user={getUserIsLogin()}
              student={<PPDBStudent />}
              admin={<PPDB />}
            />
          }
        />
        <Route
          exact
          path="/dashboard/ppdb/add"
          element={
            <ProtedtedRoute user={getUserIsLogin()} student={<AddRegister />} />
          }
        />
        <Route exact path="/dashboard/ppdb/:id" element={<DetailPPDB />} />
        {Object.keys(getUserIsLogin()).length > 0 && (
          <Route exact path="/settings" element={<Setting />} />
        )}
        {Object.keys(getUserIsLogin()).length > 0 && (
          <Route exact path="/admin" element={<Admin />} />
        )}
        {/* Auth */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
