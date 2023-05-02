import React, { useEffect, useState } from "react";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import Spinner from "react-spinkit";

import { APIBASEURL, FecthData, requestSetting } from "../service/API";
import { notify } from "../utils/Utils";
import { Toaster } from "react-hot-toast";

const Setting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [photoProfile, setPhotoProfile] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    photo: "",
  });

  const handleUploadImage = async (file) => {
    const token = JSON.parse(localStorage.getItem("usr")).acctkn;
    // Upload Image
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const formdata = new FormData();
    formdata.append("photo", file, file.name);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${APIBASEURL}/user/upload`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPhotoProfile(result.path);
        setFormData({ ...formData, photo: result.path });
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (formData.photo == null || formData.phone == "") {
      formData.photo =
        "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg";
    }

    const request = await FecthData(
      `${APIBASEURL}/user/profile`,
      requestSetting("PUT", formData)
    );
    const response = request;

    setTimeout(() => {
      setIsLoading(false);
      console.log(response);

      if (response.status == 200) {
        sessionStorage.setItem("success", "Berhasil Menyimpan Profile");
      }

      if (response.status == 400) {
        sessionStorage.setItem("error", "Gagal Menyimpan Profile");
      }
    }, 1000);
  };

  useEffect(() => {
    const getUserIsLogin = async () => {
      const request = await FecthData(
        `${APIBASEURL}/auth/user`,
        requestSetting("GET")
      );
      const response = request;

      setTimeout(() => {
        setIsLoading(false);
        setFormData({
          email: response.user.email,
          fullname: response.user.fullname,
          phone: response.user.phone,
          photo: response.user.photo,
        });
      }, 1000);
    };

    (async () => getUserIsLogin())();
  }, []);

  useEffect(() => {}, [photoProfile]);
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

  if (isLoading) {
    return (
      <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
        <Spinner name="line-scale-pulse-out" />
        Loading....
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <form onSubmit={handleSubmit} className=" max-w-[35rem]">
              <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
                {formData.photo ? (
                  <img
                    src={
                      formData.photo ??
                      "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    }
                    className="object-cover w-full"
                    alt=""
                  />
                ) : (
                  <img
                    src={
                      photoProfile == ""
                        ? "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                        : photoProfile
                    }
                    className="object-cover w-full"
                    alt=""
                  />
                )}
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-[1rem]">
                <div className="input-group">
                  <label htmlFor="" className="font-medium">
                    Photo
                  </label>
                  <input
                    type="file"
                    className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                    onChange={(e) => handleUploadImage(e.target.files[0])}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="" className="font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                    onChange={(e) =>
                      setFormData({ ...formData, fullname: e.target.value })
                    }
                    value={formData.fullname}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">Email (Aktif)</label>
                  <input
                    type="email"
                    className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    value={formData.email}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="">No Telepon (Aktif)</label>
                  <input
                    type="number"
                    className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    value={formData.phone}
                  />
                </div>
              </div>

              <button
                className="mt-[2.5rem] mb-[1.6rem] w-max bg-primary text-white  py-3 px-5 rounded-full transition-colors hover:bg-orange-400"
                type="submit"
              >
                Simpan Profile
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Setting;
