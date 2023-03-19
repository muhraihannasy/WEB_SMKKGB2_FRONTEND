import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "react-spinkit";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";
import { notify } from "../../utils/Utils";

import Logo from "../../images/logo.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
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
      console.log(result);

      if (result.error) {
        sessionStorage.setItem("error", "Email atau Password salah"), "error";
        return;
      }

      const { access_token, user_type, menu_permission } = result;

      const user = {
        acctkn: access_token,
        user: user_type,
      };

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
    <div className=" h-full w-full my-auto bg-white grid lg:grid-cols-2 grid-cols-1 font-poppins">
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      <div className="px-6 py-10 order-2">
        <form
          className="lg:w-[70%] sm:w-[50%] sm:mx-auto lg:mt-[4.5rem]"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2 className="mb-[6px] font-bold text-[1.5rem]">Login</h2>
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
              className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
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
              className="rounded-full mt-[0.5rem] border-[#b3b3b3] py-3 px-5"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button
            className="mt-[2.5rem] mb-[1.6rem] w-full bg-primary text-white  py-3 px-5 rounded-full transition-colors hover:bg-orange-400"
            type="submit"
          >
            Log in
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
      <div className="h-full relative">
        <div className="absolute sm:w-max w-full top-[1rem] left-[0rem] py-3 px-6 ">
          <div className=" bg-white py-3 px-6 shadow-lg rounded-full flex items-center justify-center gap-[0.5rem]">
            <img src={Logo} alt="" className="w-[3rem]" />
            <h2 className="font-medium">SMK Karya Guna Bhakti 2 Kota Bekasi</h2>
          </div>
        </div>
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNnW8dvox9Le4CbnskVW30Y-n0IWXCXaUizh7Tn=w768-h768-n-o-v1"
          className="object-cover lg:h-[100vh] h-[30rem] w-full lg:rounded-tr-[3.5rem] ;lg:rounded-br-[3.5rem] rounded-br-[2rem] lg:rounded-bl-[0] rounded-bl-[2rem]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
