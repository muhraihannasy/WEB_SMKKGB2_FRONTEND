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

// ----- Pages ----- //

// Dashboard
import Dashboard from "./pages/Dashboard";

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
import Home from "./pages/Landing Page/Home";

// Utils
import { getUserIsLogin } from "./utils/Utils";

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

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
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
        {/* Auth */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
