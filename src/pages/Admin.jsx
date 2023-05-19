import React, { useEffect, useRef, useState } from "react";
import Header from "../partials/Header";
import Sidebar from "../partials/Sidebar";
import { BiEdit, BiUserPlus } from "react-icons/bi";
import { Modal } from "antd";
import { APIBASEURL, FecthData, requestSetting } from "../service/API";
import { notify } from "../utils/Utils";
import { Toaster } from "react-hot-toast";
import Spinner from "react-spinkit";

import { FaTrash } from "react-icons/fa";
import { imagesUploadPPDBInterface } from "../interfaces";

const menu = ["ppdb", "loker", "dashboard", "all", "artikel"];

const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoadingModal, setConfirmLoadingModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [confirmLoadingModalEdit, setConfirmLoadingModalEdit] = useState(false);
  const [isModeEdit, setIsModeEdit] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  
  const [data, setData] = useState([]);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [formData, setFormData] = useState({
    user_type_id: 2,
    fullname: "",
    phone: "",
    photo: "",
    password: "",
  });
   const [imagesUpload, setImagesUpload] = useState({
    photoProfile: ""
  });
  const [userId, setUserId] = useState(0);
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


    setMenuPermission(menus.filter(menuItem => menuItem != ""));
  }

    async function handleUpload(file, field) {
    const token = JSON.parse(localStorage.getItem("usr")).acctkn;
    // Upload Image
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const temp = imagesUpload[field].split("/");
    const imageOld = temp[3] + "/" + temp[4];

    console.log(imageOld)

    const formdata = new FormData();
    formdata.append("image", file, file.name);
    formdata.append("image_old", imageOld);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(`${APIBASEURL}/upload_image`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (!result?.url) {
          notify(result?.url[0], "error");
          return;
        }
        setImagesUpload({[field]: result.url});
        setFormData({ ...formData, photo: result.url });
      })
      .catch((error) => console.log("error", error));
  }


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

  const showModal = ()=> {
    setIsModeEdit(false);
    setOpenModal(true);
  };

  const handleOkModal = async () => {
    setConfirmLoadingModal(true);
    console.log(checkedRef.current);

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
        setConfirmLoadingModal(false);
        setLastRefresh(new Date());
        setOpenModal(false);
        notify("Berhasil Membuat Admin Baru", "success");
      }

      if (response.status == 400) {
        notify("Gagal Membuat Admin Baru", "error");
        setConfirmLoadingModal(false);
        setOpenModal(false);
      }

      //   Reset Form
      setFormData({
        user_type_id: 2,
        fullname: "",
        phone: "",
        email: "",
        photo: "",
        password: "",
      });
      photoInput.current.value = null;
      setImagesUpload({photoProfile: ""});
      setMenuPermission([]);
    }, 1000);
  };

  const handleCancelModal = () => {
    //   Reset Form
    setFormData({
      user_type_id: 2,
      fullname: "",
      phone: "",
      email: "",
      photo: "",
      password: "",
    });
    photoInput.current.value = null;
    setOpenModal(false);
    setImagesUpload({photoProfile: ""});
    setMenuPermission([]);
  };

  const showModalEdit = () => {
    setOpenModalEdit(true);
    setIsModeEdit(true);
  };

  const handleOkModalEdit = async () => {
    setConfirmLoadingModalEdit(true);
    console.log(checkedRef.current);

    if (
      formData.email == "" ||
      formData.password == "" ||
      formData.phone == "" ||
      formData.fullname == ""
    ) {
      setConfirmLoadingModalEdit(false);
      notify("Form Tidak Boleh Kosong", "error");
      return;
    }

    const tempMenu = [...menuPermission];
    tempMenu.push('');
    formData.menu_permission = tempMenu.join("|");

    const request = await FecthData(
      `${APIBASEURL}/admin/user/update/${userId}`,
      requestSetting("PUT", formData)
    );
    const response = request;

    if (response.errors?.email) {
      notify("Email Sudah Digunakan", "error");
    }

    setTimeout(() => {
      if (response.status == 200) {
        setConfirmLoadingModalEdit(false);
        setLastRefresh(new Date());
        setOpenModalEdit(false);
        notify("Berhasil Mengubah Admin", "success");
      }

      if (response.status == 400) {
        notify("Gagal Membuat Admin Baru", "error");
        setConfirmLoadingModalEdit(false);
        setOpenModalEdit(false);
      }

      //   Reset Form
      setFormData({
        user_type_id: 2,
        fullname: "",
        phone: "",
        email: "",
        photo: "",
        password: "",
      });
      photoInput.current.value = null;
      setImagesUpload({photoProfile: ""});
      setMenuPermission([]);
    }, 1000);
  };

  const handleCancelModalEdit = () => {
    //   Reset Form
    setFormData({
      user_type_id: 2,
      fullname: "",
      phone: "",
      email: "",
      photo: "",
      password: "",
    });
    photoInput.current.value = null;
    setOpenModalEdit(false);
    setIsModeEdit(false);
    setImagesUpload({photoProfile: ""});
    setMenuPermission([]);
  };

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
      }, 1000);
    };

    (async () => getAdmin())();
  }, [isLoading, lastRefresh]);

  

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
      {isModeEdit ? (
        <Modal
          open={openModalEdit}
          onOk={handleOkModalEdit}
          confirmLoading={confirmLoadingModalEdit}
          onCancel={handleCancelModalEdit}
        >
          <div className="flex flex-col gap-2 mb-[1rem]">
            <div className="w-[5rem] h-[5rem] rounded-full overflow-hidden">
              <img
                src={
                  imagesUpload.photoProfile == ""
                    ? "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    : imagesUpload.photoProfile
                }
                className="object-cover w-full"
                alt=""
              />
            </div>
            <label htmlFor="fullname" className="font-regular">
              Photo
            </label>
            <input
              type="file"
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
              onChange={(e) => handleUpload(e.target.files[0], "photoProfile")}
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
            <p className="text-sm">*Kosongkan jika tidak ingin diubah</p>
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
                    checked={menuPermission.includes(item)}
                  />
                  <label htmlFor={item} className="font-regular">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </Modal>
      ) : (
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
                          imagesUpload.photoProfile == ""
                    ? "https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                    : imagesUpload.photoProfile
                }
                className="object-cover w-full"
                alt=""
              />
            </div>
            <label htmlFor="fullname" className="font-regular">
              Photo
            </label>
            <input
              type="file"
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
              onChange={(e) => handleUpload(e.target.files[0], 'photoProfile')}
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

          <div className="flex flex-wrap items-center gap-4">
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
                    checked={menuPermission.includes(item)}
                  />
                  <label htmlFor={item} className="font-regular">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </Modal>
      )}

      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
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
                                className="object-cover w-full"
                                alt=""
                              />
                            </div>
                          </td>
                          <td>{item.fullname}</td>
                          <td>{item.email}</td>
                          <td className="flex justify-center p-2 whitespace-nowrap">
                            <div className="flex items-center gap-2 pt-3">
                              <button className="flex items-center p-1.5 rounded-xl text-md bg-third justify-center">
                                <FaTrash
                                  className="text-white"
                                  onClick={() => handleDelete(item.id)}
                                />
                              </button>
                              <button
                                className="p-1 text-lg text-white bg-yellow-500 rounded-xl"
                                onClick={() => {
                                  setIsModeEdit(true);
                                  showModalEdit();
                                  setFormData({
                                    fullname: item.fullname,
                                    email: item.email,
                                    photo: item.photo,
                                    menu_permission: item.menu_permission,
                                    phone: item.phone,
                                  });
                                  setImagesUpload({photoProfile: item.photo})
                                  setMenuPermission(
                                    item.menu_permission.split("|")
                                  );
                                  setUserId(item.id);
                                }}
                              >
                                <BiEdit />
                              </button>
                            </div>
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
