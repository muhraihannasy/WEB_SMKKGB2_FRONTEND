import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "react-spinkit";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";
import { notify } from "../../utils/Utils";
import { competency } from "../../utils/Data";

import Logo from "../../images/logo.png";
import Teacher from "../../images/svg/Mathematics-rafiki.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: " ",
    kompetensi1: "",
    kompetensi2: "",
    kompetensi3: "",
    from_school: "",
    phone: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      formData.email === "" ||
      formData.password === "" ||
      formData.kompetensi1 === "" ||
      formData.from_school === "" ||
      formData.phone === "" ||
      formData.fullname === ""
    ) {
      setIsLoading(false);
      notify("Form Tidak Boleh Kosong", "error");
      return;
    }

    formData.user_type_id = 1;
    formData.class_pick = `${formData.kompetensi1}|${formData.kompetensi2}|${formData.kompetensi3}|`;

    delete formData.kompetensi1;
    delete formData.kompetensi2;
    delete formData.kompetensi3;

    const request = await fetch(`${APIBASEURL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const result = await request.json();

    setFormData({
      ...formData,
      kompetensi1: "",
      kompetensi2: "",
      kompetensi3: "",
    });

    setTimeout(() => {
      setIsLoading(false);

      if (result.email && result.email[0]) {
        switch (result.email[0]) {
          case "The email must be a valid email address.":
            sessionStorage.setItem("error", "Masukan Email Yang Valid");
            break;
          case "The email has already been taken.":
            sessionStorage.setItem("error", "Email Tersebut Sudah Digunakan");
            break;
          default:
            break;
        }
      }

      console.log(formData);

      if (result.success) {
        sessionStorage.setItem("success", result.success);
        sessionStorage.setItem(
          "info",
          "*Silahkan Login untuk melihat kode pembayaran"
        );
      }
    }, 1000);
  };

  useEffect(() => {
    if (sessionStorage.getItem("error")) {
      notify(sessionStorage.getItem("error"), "error");

      setTimeout(() => {
        sessionStorage.removeItem("error");
      }, 200);
    }

    if (sessionStorage.getItem("success")) {
      navigate("/login");
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              nisi praesentium dicta ducimus cum ab illo,
            </p>
          </div>

          {/* Partials */}
          {/* <img src={squircle2} alt="" className="absolute z-[-1]" /> */}
        </div>

        <div className="w-full px-6 lg:py-[6em] py-[3em]  lg:overflow-y-scroll">
          <form
            className="md:w-[25em] mx-auto "
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2 className="font-bold text-[1.5rem] mb-6">Register</h2>
            <div className="flex flex-col mb-[1.5rem]">
              <label htmlFor="">Nama Lengkap</label>
              <input
                type="text"
                className="rounded-[0.5em] border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
                placeholder="..."
                onChange={(e) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                value={formData.fullname}
              />
            </div>
            <div className="flex flex-col mb-[1.5rem]">
              <label htmlFor="">Asal Sekolah</label>
              <input
                type="text"
                className="rounded-[0.5em] border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
                placeholder="..."
                onChange={(e) =>
                  setFormData({ ...formData, from_school: e.target.value })
                }
                value={formData.from_school}
              />
            </div>
            <div className="flex flex-col mb-[1.5rem]">
              <label htmlFor="kompetensi1">Pilihan Kompetensi </label>
              <select
                id="kompetensi1"
                name="kompetensi1"
                placeholder="..."
                className="rounded-[0.5em] border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
                onChange={(e) =>
                  setFormData({ ...formData, kompetensi1: e.target.value })
                }
                value={formData.kompetensi1}
              >
                <option value="" className="rounded-xl">
                  Pilih...
                </option>
                {competency.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col mb-[1.5rem]">
              <label htmlFor="">Phone</label>
              <input
                type="number"
                className="rounded-[0.5em] border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
                placeholder="..."
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                value={formData.phone}
              />
            </div>
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
              Daftar
            </button>

            <p className="text-center">
              Sudah Memiliki Akun ?{" "}
              <a
                href="/login"
                className="font-semibold transition-all hover:text-orange-400"
              >
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// {/* <div className="grid w-full h-full my-auto bg-white lg:grid-cols-2 font-poppins">
//   {/* Toast */}
//   <Toaster position="top-right" reverseOrder={false} />

//   {isLoading && (
//     <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
//       <Spinner name="line-scale-pulse-out" />
//       Loading....
//     </div>
//   )}

//   <div className="lg:fixed relative flex lg:flex-row flex-col w-full h-[100%] lg:h-[100vh] register-form">
//     <div className="relative h-max lg:w-[50%]">
//       <div className="absolute sm:w-max w-full top-[1rem] left-[0rem] py-3 px-6 ">
//         <div className=" bg-white py-3 px-6 shadow-lg rounded-full flex items-center justify-center gap-[0.5rem]">
//           <img src={Logo} alt="" className="w-[3rem]" />
//           <h2 className="font-medium">SMK Karya Guna Bhakti 2 Kota Bekasi</h2>
//         </div>
//       </div>
//       <img
//         src="https://lh3.googleusercontent.com/p/AF1QipNnW8dvox9Le4CbnskVW30Y-n0IWXCXaUizh7Tn=w768-h768-n-o-v1"
//         className="object-cover lg:h-[100vh] h-[30rem] w-full lg:rounded-tr-[3.5rem] ;lg:rounded-br-[3.5rem] rounded-br-[2rem] lg:rounded-bl-[0] rounded-bl-[2rem]"
//         alt=""
//       />
//     </div>
//     <div className="px-6 py-10 lg:w-[50%] overflow-y-auto form">
//       <form
//         className="lg:w-[70%] sm:w-[50%] sm:mx-auto lg:mt-[4.5rem]"
//         onSubmit={(e) => handleSubmit(e)}
//       >
//         <h2 className="mb-[1.5rem] font-bold text-[1.5rem]">Daftar</h2>

//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="">Nama Lengkap</label>
//           <input
//             type="text"
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             placeholder="..."
//             onChange={(e) =>
//               setFormData({ ...formData, fullname: e.target.value })
//             }
//             value={formData.fullname}
//           />
//         </div>
//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="">Asal Sekolah</label>
//           <input
//             type="text"
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             placeholder="..."
//             onChange={(e) =>
//               setFormData({ ...formData, from_school: e.target.value })
//             }
//             value={formData.from_school}
//           />
//         </div>
//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="kompetensi1">Pilihan Kompetensi 1 </label>
//           <select
//             id="kompetensi1"
//             name="kompetensi1"
//             placeholder="..."
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             onChange={(e) =>
//               setFormData({ ...formData, kompetensi1: e.target.value })
//             }
//             value={formData.kompetensi1}
//           >
//             <option value="" className="rounded-xl">
//               Pilih...
//             </option>
//             {competency.map((item, index) => {
//               return (
//                 <option key={index} value={item}>
//                   {item}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="kompetensi2">Pilihan Kompetensi 2 </label>
//           <select
//             id="kompetensi2"
//             name="kompetensi2"
//             placeholder="..."
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             onChange={(e) =>
//               setFormData({ ...formData, kompetensi2: e.target.value })
//             }
//             value={formData.kompetensi2}
//           >
//             <option value="">Pilih...</option>
//             {competency.map((item, index) => {
//               return (
//                 <option key={index} value={item}>
//                   {item}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="kompetensi3">Pilihan Kompetensi 3 </label>
//           <select
//             id="kompetensi3"
//             name="kompetensi3"
//             placeholder="..."
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             onChange={(e) =>
//               setFormData({ ...formData, kompetensi3: e.target.value })
//             }
//             value={formData.kompetensi3}
//           >
//             <option value="">Pilih...</option>
//             {competency.map((item, index) => {
//               return (
//                 <option key={index} value={item}>
//                   {item}
//                 </option>
//               );
//             })}
//           </select>
//         </div>
//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="">Phone</label>
//           <input
//             type="number"
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             placeholder="..."
//             onChange={(e) =>
//               setFormData({ ...formData, phone: e.target.value })
//             }
//             value={formData.phone}
//           />
//         </div>
//         <div className="flex flex-col mb-[1.5rem]">
//           <label htmlFor="">Email</label>
//           <input
//             type="text"
//             className="rounded-full border-[#d3d3d3] mt-[0.5rem] py-3 px-5"
//             placeholder="example@gmail.com"
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             value={formData.email}
//           />
//         </div>

//         <div className="flex flex-col ">
//           <label htmlFor="">Password</label>
//           <input
//             type="password"
//             className="rounded-full mt-[0.5rem] border-[#b3b3b3] py-3 px-5"
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//           />
//         </div>

//         <button
//           className="mt-[2.5rem] mb-[1.6rem] w-full bg-primary text-white  py-3 px-5 rounded-full transition-colors hover:bg-orange-400"
//           type="submit"
//         >
//           Daftar
//         </button>

//         <p className="text-center">
//           Sudah Memiliki Akun ?{" "}
//           <a
//             href="/login"
//             className="font-semibold transition-all hover:text-orange-400"
//           >
//             Login
//           </a>
//         </p>
//       </form>
//     </div>
//   </div>
// </div>; */}

export default Register;
