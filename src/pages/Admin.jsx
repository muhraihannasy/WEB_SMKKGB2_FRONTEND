import React, { useEffect, useRef, useState } from "react";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import { BiUserPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Modal } from "antd";
import { APIBASEURL, FecthData, requestSetting } from "../service/API";
import { notify } from "../utils/Utils";
import { Toaster } from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import Spinner from "react-spinkit";

import { FaTrash } from "react-icons/fa";

const menu = ["ppdb", "loker", "dashboard", "admin"];

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoadingModal, setConfirmLoadingModal] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [data, setData] = useState([]);
  const [photoProfile, setPhotoProfile] = useState("");
  const [formData, setFormData] = useState({
    user_type_id: 2,
    fullname: "",
    phone: "",
    email: "",
    photo: "",
    password: "",
  });
  const [menuPermission, setMenuPermission] = useState([]);
  const photoInput = useRef();
  const checkedRef = useRef();

  function handleChangeMenuPermission(checked, menu) {
    let menus = [...menuPermission];

    if (checked) menus.push(menu);
    if (!checked) {
      setMenuPermission(menus.filter((item) => item !== menu));
      menus.push(menu);
      return;
    }

    setMenuPermission(menus);
  }

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

  const showModal = (id) => {
    setOpenModal(true);
  };

  const handleOkModal = async () => {
    // setConfirmLoadingModal(true);
    console.log(checkedRef.current);
    return;
    if (
      formData.email == "" ||
      formData.password == "" ||
      formData.phone == "" ||
      formData.fullname == ""
    ) {
      setConfirmLoadingModal(false);
      notify("Form Tidak Boleh Kosong", "error");
      return;
    }

    // setIsLoading(true);
    formData.user_type_id = 2;
    formData.menu_permission = menuPermission.join("|");

    const request = await FecthData(
      `${APIBASEURL}/user/store`,
      requestSetting("POST", formData)
    );
    const response = request;

    if (response.errors?.email) {
      notify("Email Sudah Digunakan", "error");
      // return;
    }

    setTimeout(() => {
      if (response.status == 200) {
        sessionStorage.setItem("success", "Berhasil Membuat Admin");
      }

      if (response.status == 400) {
        sessionStorage.setItem("error", "Gagal Membuat Admin");
      }

      setUpdateData(true);

      setIsLoading(false);
      setOpenModal(false);
      setConfirmLoadingModal(false);

      //   Reset Form
      setFormData({
        user_type_id: 2,
        fullname: "",
        phone: "",
        email: "",
        photo: "",
        password: "",
      });
      setPhotoProfile("");
      photoInput.current.value = null;
    }, 1000);
  };

  const handleCancelModal = () => {
    console.log("Clicked cancel button");

    //   Reset Form
    setFormData({
      user_type_id: 2,
      fullname: "",
      phone: "",
      email: "",
      photo: "",
      password: "",
    });
    setPhotoProfile("");
    photoInput.current.value = null;
    setOpenModal(false);
  };

  const handleDelete = async (id) => {
    setIsLoading(true);
    setUpdateData(true);
    const request = await FecthData(
      `${APIBASEURL}/user/destroy/${id}`,
      requestSetting("DELETE")
    );
    const response = request;

    setTimeout(() => {
      if (response.status == 200) {
        notify("Berhasil Menghapus", "success");
        setIsLoading(false);
      }

      if (response.status == 400) {
        notify("Gagal Menghapus", "error");
        setIsLoading(false);
      }
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

  useEffect(() => {
    const getAdmin = async () => {
      const request = await FecthData(
        `${APIBASEURL}/admin`,
        requestSetting("GET")
      );
      const response = request;

      setTimeout(() => {
        setData(response);
        setIsLoading(false);
        setUpdateData(false);
      }, 1000);
    };

    (async () => getAdmin())();
  }, [isLoading, updateData]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Loading */}
      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Content Area */}

      {/* Modal */}
      <Modal
        open={openModal}
        onOk={handleOkModal}
        confirmLoading={confirmLoadingModal}
        onCancel={handleCancelModal}
      >
        <div className="flex flex-col gap-2 mb-[1rem]">
          <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
            <img
              src={
                photoProfile == ""
                  ? "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                  : photoProfile
              }
              className="w-full object-cover"
              alt=""
            />
          </div>
          <label htmlFor="fullname" className="font-regular">
            Photo
          </label>
          <input
            type="file"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
            onChange={(e) => handleUploadImage(e.target.files[0])}
            ref={photoInput}
          />
        </div>
        <div className="flex flex-col gap-2 mb-[1rem]">
          <label htmlFor="fullname" className="font-regular">
            Nama Lengkap
          </label>
          <input
            type="text"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
            name="fullname"
            id="fullname"
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            value={formData.fullname}
          />
        </div>
        <div className="flex flex-col gap-2 mb-[1rem]">
          <label htmlFor="phone" className="font-regular">
            No Telepon
          </label>
          <input
            type="number"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
            name="phone"
            id="phone"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
          />
        </div>
        <div className="flex flex-col gap-2 mb-[1rem]">
          <label htmlFor="email" className="font-regular">
            Email
          </label>
          <input
            type="email"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
            name="email"
            id="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
          />
        </div>
        <div className="flex flex-col gap-2 mb-[1rem]">
          <label htmlFor="password" className="font-regular">
            Password
          </label>
          <input
            type="password"
            className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
            name="password"
            id="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            value={formData.password}
          />
        </div>
        <label
          htmlFor="password"
          className="block font-regular mb-[1rem] mt-[1rem]"
        >
          Menu Permission
        </label>

        <div className="flex items-center gap-4">
          {menu.map((item) => {
            return (
              <div className="flex items-center gap-2 mb-[1rem]">
                <input
                  type="checkbox"
                  className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
                  id={item}
                  ref={checkedRef}
                  onChange={(e) =>
                    handleChangeMenuPermission(e.target.checked, item)
                  }
                />
                <label htmlFor={item} className="font-regular">
                  {item}
                </label>
              </div>
            );
          })}
        </div>
      </Modal>

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <button
              className="mb-[0.5rem] flex items-center gap-2 ml-auto w-max bg-primary text-white text-[0.9rem]  py-3 px-5 rounded-xl transition-colors hover:bg-orange-400"
              onClick={showModal}
            >
              <BiUserPlus className="text-[1.5rem]" /> Tambah Admin
            </button>
            <div className="overflow-x-auto pb-[1.5rem]">
              <table className=" table-auto w-full mt-[1.5rem] ">
                <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Photo</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">
                        Nama Lengkap
                      </div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Action </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-100">
                  {data &&
                    data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="pt-[1rem]">
                            <div className="w-[4rem] h-[4rem] rounded-full overflow-hidden ">
                              <img
                                src={
                                  item.photo == ""
                                    ? "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                                    : item.photo
                                }
                                className="w-full object-cover"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>{item.fullname}</td>
                          <td>{item.email}</td>
                          <td className="flex justify-center pt-[1.5rem]">
                            <button className="flex items-center w-[2rem] h-[2rem] rounded-full bg-third justify-center">
                              <FaTrash
                                className="text-white"
                                onClick={() => handleDelete(item.id)}
                              />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
