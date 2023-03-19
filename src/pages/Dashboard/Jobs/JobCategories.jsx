import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";
import { notify } from "../../../utils/Utils";

const JobsCategories = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoadingModal, setConfirmLoadingModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [confirmLoadingModalEdit, setConfirmLoadingModalEdit] = useState(false);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [isEditMode, setIsEditMode] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: 0,
    name: "",
  });
  const [idCategory, setIdCategory] = useState(0);
  const navigate = useNavigate();

  async function handleDelete(id) {
    setIsLoading(true);

    const req = await FecthData(
      `${APIBASEURL}/admin/job_categories/${id}`,
      requestSetting("DELETE")
    );
    setTimeout(() => {
      if (req.status == 200) {
        notify("Berhasil Menghapus Kategori", "success");
        setLastRefresh(new Date());
        setIsLoading(false);
      }
    }, 500);
  }

  const showModal = () => {
    setOpenModal(true);
  };

  // console.log(formData);
  const handleOkModal = async () => {
    setConfirmLoadingModal(true);

    const request = await FecthData(
      `${APIBASEURL}/admin/job_categories`,
      requestSetting("POST", formData)
    );

    setTimeout(() => {
      if (request?.status == 200) {
        setOpenModal(false);
        setFormData({ id: "", name: "" });
        notify("Berhasil Menambah Kategori", "success");
      }
      setLastRefresh(new Date());
      setConfirmLoadingModal(false);
    }, 1000);
  };

  const handleCancelModal = () => {
    console.log("Clicked cancel button");

    setOpenModal(false);
  };

  const showModalEdit = () => {
    setOpenModalEdit(true);
  };

  const handleOkModalEdit = async () => {
    setConfirmLoadingModalEdit(true);
    const id = idCategory;

    formData.id = id;

    const request = await FecthData(
      `${APIBASEURL}/admin/job_categories/${id}`,
      requestSetting("PUT", formData)
    );

    setTimeout(() => {
      if (request?.status == 200) {
        setOpenModalEdit(false);
        setFormData({ name: "", id: 0 });
        notify("Berhasil Mengubah Kategori", "success");
      }
      setLastRefresh(new Date());
      setConfirmLoadingModalEdit(false);
    }, 1000);

    setIsEditMode(false);
  };

  const handleCancelModalEdit = () => {
    setOpenModalEdit(false);
    setIsEditMode(false);
  };

  useEffect(() => {
    async function getData() {
      const req = await FecthData(
        `${APIBASEURL}/admin/job_categories`,
        requestSetting("GET")
      );
      const res = req;

      setTimeout(() => {
        setData(res);
        setIsLoading(false);
      }, 1000);
    }

    (async () => getData())();
  }, [lastRefresh]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {isEditMode ? (
        <Modal
          open={openModalEdit}
          onOk={handleOkModalEdit}
          confirmLoading={confirmLoadingModalEdit}
          onCancel={handleCancelModalEdit}
        >
          <div className="flex flex-col gap-2 mb-[1rem]">
            <label htmlFor="name" className="font-regular">
              Nama Kategori
            </label>
            <input
              type="text"
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
              name="name"
              id="name"
              onChange={(e) => setFormData({ name: e.target.value })}
              value={formData.name}
            />
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
            <label htmlFor="name" className="font-regular">
              Nama Kategori
            </label>
            <input
              type="text"
              className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
              name="name"
              id="name"
              onChange={(e) => setFormData({ name: e.target.value })}
              value={formData.name}
            />
          </div>
        </Modal>
      )}

      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <button
              className="w-max h-[2.5rem] text-white  px-5 bg-orange-400 block rounded-[4px] mb-[30px] ml-auto mt-[2.5rem]"
              onClick={showModal}
            >
              <div className="flex items-center gap-2">
                <span>Tambah Kategori</span>
                <IoMdAddCircle className="text-[1.2rem]" />
              </div>
            </button>

            <section className=" overflow-x-auto pb-[2rem]">
              <Table
                items={data}
                handleDelete={handleDelete}
                showModalEdit={showModalEdit}
                setIsEditMode={setIsEditMode}
                setFormData={setFormData}
                setIdCategory={setIdCategory}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

function Table({
  items,
  handleDelete,
  showModalEdit,
  setIsEditMode,
  setFormData,
  setIdCategory,
}) {
  return (
    <table className=" table-auto lg:w-full w-[55rem] mt-[1.5rem] mx-auto ">
      <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Name</div>
          </th>

          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-center">Action </div>
          </th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-slate-100 pt-2">
        {items.map((item, i) => {
          const { id, name } = item;
          return (
            <tr className="h-[4rem]" key={i}>
              <td className="p-2 whitespace-nowrap">{name}</td>

              <td className="p-2 whitespace-nowrap flex justify-center">
                <div className="flex items-center gap-2 pt-3">
                  <button
                    className="bg-yellow-500 p-1 rounded-xl text-lg text-white"
                    onClick={() => {
                      showModalEdit();
                      setFormData({ name });
                      setIsEditMode(true);
                      setIdCategory(id);
                    }}
                  >
                    <BiEdit />
                  </button>
                  <button
                    className="bg-red-500 p-1 rounded-xl text-lg text-white"
                    onClick={() => handleDelete(id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default JobsCategories;
