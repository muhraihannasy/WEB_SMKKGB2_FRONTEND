import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "react-spinkit";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";
import { notify } from "../../utils/Utils";

// Images
import Logo from "../../images/logo.png";
import Teacher from "../../images/svg/Mathematics-rafiki.svg";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setSetting } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.email === "" || formData.password === "") {
      setIsLoading(false);
      notify("Email dan Password Tidak Boleh Kosong", "error");
      return;
    }

    const request = await fetch(`${APIBASEURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await request.json();

    setTimeout(() => {
      setIsLoading(false);

      if (result.error) {
        sessionStorage.setItem("error", "Email atau Password salah"), "error";
        return;
      }

      const { fullname, user_type, menu_permission, access_token } = result;

      const user = {
        acctkn: access_token,
        user: user_type,
        fullname: fullname,
        menu_permission: menu_permission,
      };

      setSetting(user);

      sessionStorage.removeItem("info");
      localStorage.setItem("usr", JSON.stringify(user));
      localStorage.setItem("menu_permission", menu_permission);
      localStorage.setItem("logged", true);
      navigate("/dashboard/ppdb");
    }, 1000);
  };

  useEffect(() => {
    if (sessionStorage.getItem("success")) {
      notify(sessionStorage.getItem("success"), "success");

      setTimeout(() => {
        sessionStorage.removeItem("success");
      }, 1000);
    }

    if (sessionStorage.getItem("error")) {
      notify(sessionStorage.getItem("error"), "error");

      setTimeout(() => {
        sessionStorage.removeItem("error");
      }, 1000);
    }
  }, [isLoading]);

  return (
    <div className="fixed w-full h-full overflow-y-auto bg-white font-poppins">
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      <div className="grid h-full grid-cols-1 lg:grid-cols-2">
        <div className="relative w-full flex items-center justify-center flex-col bg-[#28288b] pb-[2em] rounded-bl-[2em] rounded-br-[2em] lg:rounded-none lg:overflow-hidden z-10 px-3">
          <img
            src={Teacher}
            alt=""
            className="w-[20em] lg:w-[25em]
          "
          />
          <div className="text-center text-white">
            <h1 className="text-[1em] font-semibold mx-auto mt-5 mb-3">
              PPDB SMK Karya Guna Bhakti 2 2023
            </h1>
            <p className="text-[0.9em] w-[90%] lg:w-[30em] mx-auto">
              Bersiaplah untuk melangkah ke dalam dunia di mana impian dan
              prestasi tumbuh bersama.
            </p>
          </div>

          {/* Partials */}
          {/* <img src={squircle2} alt="" className="absolute z-[-1]" /> */}
        </div>

        <div className="w-full px-6 lg:py-[6em] py-[3em]">
          <form
            className="md:w-[25em] mx-auto "
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-[1.5rem] mb-6">Login</h2>
            <p
              className={`mb-[1.5rem] ${
                !sessionStorage.getItem("info") && "hidden"
              }`}
            >
              {sessionStorage.getItem("info")}
            </p>

            <div className="flex flex-col mb-[1.5rem]">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="rounded-[0.5em] border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="rounded-[0.5em] mt-[0.5rem] border-[#b3b3b3] py-3 px-5"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <button
              className="mt-[2.5rem] mb-[1.6rem] w-full bg-secondary text-white  py-3 px-5 rounded-[0.5em] transition-colors hover:bg-[#1e2f57] border-2 border-secondary font-medium"
              type="submit"
            >
              Login
            </button>

            <p className="text-center">
              Belum Memiliki Akun ?{" "}
              <a
                href="/register"
                className="font-semibold transition-all hover:text-orange-400"
              >
                Daftar Sekarang
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
