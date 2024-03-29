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
import EditJobs from "./pages/Dashboard/Jobs/EditJob";
import JobCategories from "./pages/Dashboard/Jobs/JobCategories";
import BlogCategories from "./pages/Dashboard/blogs/BlogCategories";
import Blogs from "./pages/Dashboard/blogs/Blogs";
import AddBlog from "./pages/Dashboard/blogs/AddBlog";
import EditBlog from "./pages/Dashboard/blogs/EditBlog";
import ArtikelDetail from "./pages/Landing Page/artikel/ArtikelDetail";
import AddRegisterStudent from "./pages/PPDB/admin/AddRegisterStudent";
import EditRegisterStudent from "./pages/PPDB/admin/EditRegisterStudent";
import EditRegister from "./pages/PPDB/student/EditRegister";
import Beranda from "./pages/Beranda/Beranda";

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
        <Route exact path="/" element={<Beranda />} />
        <Route exact path="/profile_sekolah" element={<ProfileSekolah />} />
        <Route exact path="/lowongan" element={<LowonganPekerjaan />} />
        <Route exact path="/mitra" element={<MitraIndustri />} />
        <Route exact path="/artikel" element={<Artikel />} />
        <Route exact path="/artikel/detail/:id" element={<ArtikelDetail />} />
        <Route exact path="/direktori_alumni" element={<DirektoriAlumni />} />
        <Route exact path="/direktori_siswa" element={<DirektoriSiswa />} />
        <Route exact path="/direktori_guru" element={<DirektoriGuru />} />
        <Route exact path="/tkj" element={<TKJ />} />
        <Route exact path="/akl" element={<AKL />} />
        <Route exact path="/oktp" element={<OKTP />} />
        <Route exact path="/ppdb" element={<PPDBLanding />} />
        <Route exact path="/hubungi_kami" element={<HubungiKami />} />
        {/* Dashboard Jobs */}
        <Route exact path="/dashboard/lowongan" element={<Jobs />} />
        <Route exact path="/dashboard/tambah_lowongan" element={<AddJobs />} />
        <Route
          exact
          path="/dashboard/edit_lowongan/:id"
          element={<EditJobs />}
        />{" "}
        <Route
          exact
          path="/dashboard/kategori_lowongan"
          element={<JobCategories />}
        />
        {/* Dashboard Jobs */}
        <Route exact path="/dashboard/artikel" element={<Blogs />} />
        <Route exact path="/dashboard/tambah_artikel" element={<AddBlog />} />
        <Route
          exact
          path="/dashboard/edit_artikel/:id"
          element={<EditBlog />}
        />{" "}
        <Route
          exact
          path="/dashboard/kategori_artikel"
          element={<BlogCategories />}
        />
        <Route
          exact
          path="/dashboard"
          element={
            <IsNotLogged logged={JSON.parse(localStorage.getItem("logged"))}>
              <Dashboard />
            </IsNotLogged>
          }
        />
        {/* Dashboard PPDB Student */}
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
        <Route
          exact
          path="/dashboard/ppdb/edit/:id"
          element={
            <ProtedtedRoute
              user={getUserIsLogin()}
              student={<EditRegister />}
            />
          }
        />
        <Route exact path="/dashboard/ppdb/:id" element={<DetailPPDB />} />
        {Object.keys(getUserIsLogin()).length > 0 && (
          <Route exact path="/settings" element={<Setting />} />
        )}
        {Object.keys(getUserIsLogin()).length > 0 && (
          <Route exact path="/dashboard/admin" element={<Admin />} />
        )}
        {/* Dashboard PPDB Student */}
        <Route exact path="/dashboard/ppdb/student" element={<PPDBStudent />} />
        <Route
          exact
          path="/dashboard/ppdb/student/add"
          element={<AddRegister />}
        />
        {/* Dashboard PPDB Admin */}
        <Route
          exact
          path="/dashboard/ppdb/admin/student/add"
          element={<AddRegisterStudent />}
        />
        <Route
          exact
          path="/dashboard/ppdb/admin/student/edit/:id"
          element={<EditRegisterStudent />}
        />
        {/* Auth */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
