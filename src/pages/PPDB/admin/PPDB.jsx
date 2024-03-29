import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import Spinner from "react-spinkit";
import { Toaster } from "react-hot-toast";
import { RiEyeFill } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import { IoChevronBackCircleSharp, IoClose } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { AiFillPrinter } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaMoneyCheck } from "react-icons/fa";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";
import { getUserIsLogin, notify } from "../../../utils/Utils";
import { useReactToPrint } from "react-to-print";
import Example from "../../../components/PrintComponent";
import { IoMdAddCircle } from "react-icons/io";
import ButtonExportExcel from "../../../components/Button/ButtonExportExcel";
import ButtonNav from "../../../components/Button/ButtonNav";

const PPDB = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("");
  const [totalPage, setTotalPage] = useState(0);
  const [endPage, setEndPage] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const [dataToPrint, setDataToPrint] = useState({});
  const [readyToPrint, setReadyToPrint] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [codeRegistration, setCodeRegistration] = useState({
    id: "",
    code_registration: "",
  });
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [statusVerified, setStatusVerified] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [confirmLoadingModal, setConfirmLoadingModal] = useState(false);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("usr")).user;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Print Out",
    bodyClass: "printElement1",
  });

  const componentRef = useRef();

  const handleGetData = async (id) => {
    const link = document.createElement("a");
    link.href = APIBASEURL + "/ppdb/print/" + id;
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
  };

  const handleVerified = async (e, id, status) => {
    setStatusVerified(!statusVerified);

    const registration = { status_registration: "Sudah Diterima" };

    const result = await FecthData(
      `${APIBASEURL}/${user}/registration/update/${id}`,
      requestSetting("PUT", registration)
    );

    if (result.status) {
      setLastRefresh(new Date());
      notify("Siswa Diterima", "success");
    }
  };

  const handleOkModal = async () => {
    setConfirmLoadingModal(true);
    const user = getUserIsLogin();
    const request = await FecthData(
      `${APIBASEURL}/${user}/registration/code`,
      requestSetting("POST", codeRegistration)
    );

    setTimeout(() => {
      setOpenModal(false);
      setConfirmLoadingModal(false);
      setCodeRegistration({
        id: "",
        code_registration: "",
      });
      if (request == null) {
        notify("Kode Pembayaran Salah", "error");
        return;
      }
      if (request.status == 200) {
        notify(request.success, "success");
        setLastRefresh(new Date());
      }
    }, 1000);
  };

  useEffect(() => {
    (async () => {
      const result = await FecthData(
        `${APIBASEURL}/admin/registration?limit=${limit}&page=${page}&filter=${filter}`,
        requestSetting("GET")
      );


      setTimeout(() => {
        if (result.data) {
          setIsLoading(false);
        }

        if (result.data.length < limit) {
          setEndPage(true);
        }

        setData(result.data);
        setFilterData(result.data);
        setTotalPage(result.total_page);

      }, 1000);
    })();




    
  }, [statusVerified, filter, page, limit, endPage ,lastRefresh]);

  useEffect(() => {
      const filtered = data.filter((item) => {
        if(status == "") return item; 
        if(item.status == status) {
          return item;
        }
      });

      setFilterData(filtered);
  }, [status]);

  const showModal = (id) => {
    setOpenModal(true);
    setCodeRegistration({ ...codeRegistration, id });
  };

  const handleCancelModal = () => {
    setOpenModal(false);
  };

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
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="relative w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl ">
            {/* Modal */}
            <Modal
              title="Kode Pembayaran"
              open={openModal}
              onOk={handleOkModal}
              confirmLoading={confirmLoadingModal}
              onCancel={handleCancelModal}
            >
              <div className="flex flex-col gap-2 ">
                <label htmlFor="code_registration" className="font-regular">
                  Masukan Kode
                </label>
                <input
                  type="text"
                  className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400 text-slate-600`}
                  name="code_registration"
                  id="code_registration"
                  onChange={(e) =>
                    setCodeRegistration({
                      ...codeRegistration,
                      code_registration: e.target.value,
                    })
                  }
                  value={codeRegistration.code_registration}
                />
              </div>
            </Modal>

            {/* Main Content */}

            <div className=" pb-[1rem]">
              
              <div className="flex items-center justify-end gap-2 mt-5 mb-5">
               <ButtonExportExcel  />
               <ButtonNav 
                to="/dashboard/ppdb/admin/student/add"
               >
                 <div className="flex items-center gap-2">
                    <span>Tambah Peserta</span>
                    <IoMdAddCircle className="text-[1.2rem]" />
                  </div>
               </ButtonNav>
                {/* <Link
                className="w-max h-[2.5rem] text-white pt-2 px-5 bg-orange-400 block rounded-[4px] "
              >
               
              </Link> */}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-2 sm:flex-auto">
                <div className="flex border justify-between rounded-xl overflow-hidden sm:w-[18rem] w-full">
                  <input
                    type="text"
                    className="border-none focus:ring-0 focus:outline-none focus:border-transparent w-[90%]"
                    placeholder="Cari Pendaftar..."
                    onChange={(e) => {
                      setFilter(e.target.value);
                      setPage(1);
                      setEndPage(false);
                    }}
                    value={filter}
                  />
                  <button className="px-3 bg-slate-100">
                    <BiSearchAlt className="text-[1.2rem]" />
                  </button>
                </div>

                <div className="flex flex-col items-start sm:w-auto w-full sm:mt-0 mt-[1rem]">
                  <h4 className="text-[0.8rem] pl-3">Filter By :</h4>
                  <select
                    name=""
                    id=""
                    className="w-full border-none focus:ring-0 focus:outline-none focus:border-transparent sm:w-auto"
                    onChange={(e) => {
                      setPage(1);
                      setStatus(e.target.value)
                    }}
                  >
                    <option value="">Default</option>
                    <option value="Belum Melakukan Pembayaran">
                      Belum Bayar
                    </option>
                    <option value="Belum Mengisi Formulir">
                      Belum Mengisi Formulir
                    </option>
                    <option value="Belum Diterima">Belum Diterima</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto pb-[1.5rem]">
                <table className=" table-auto w-full mt-[1.5rem] ">
                  <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          ID Pendaftar
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Admin</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">
                          Nama Lengkap
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Sekolah</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Tipe Registrasi
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Status</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Action </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-slate-100">
                    {filterData &&
                      filterData.map((item) => {
                        const {
                          id,
                          user_id,
                          maker,
                          registration_id,
                          student_id,
                          from_school,
                          fullname,
                          type_registration,
                          is_paid,
                          status,
                        } = item;

                        return (
                          <tr key={id}>
                            <td className="p-2 whitespace-nowrap font-semibold h-[4rem]">
                              {registration_id}
                            </td>
                            <td className="p-2 whitespace-nowrap font-semibold h-[4rem]">
                              {maker ?? "-"}
                            </td>
                            <td className="p-2 font-semibold whitespace-nowrap">
                              {fullname}
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-left font-regular">
                                {from_school}
                                {!from_school && "Belum Ada"}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="text-center font-regular ">
                                {type_registration}
                                {!type_registration && "Belum Ada"}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div
                                className={`text-center font-medium  
                           ${
                             status == "Belum Melakukan Pembayaran" &&
                             "text-red-500"
                           } 
                            ${
                              status == "Belum Mengisi Formulir" &&
                              "text-yellow-500"
                            }
                            ${status == "Belum Diterima" && "text-red-500"}
                            ${status == "Sudah Diterima" && "text-green-500"}
                            `}
                              >
                                {status}
                              </div>
                            </td>
                            <td className="p-2 whitespace-nowrap">
                              <div className="flex items-center justify-center gap-2 font-medium text-center">
                                {status == "Belum Diterima" ||
                                status == "Sudah Diterima" ? (
                                  <>
                                    <button
                                    className="p-1 text-lg text-white bg-orange-500 rounded-xl"
                                    onClick={() => {
                                      handleGetData(user_id);
                                    }}
                                  >
                                    <AiFillPrinter />
                                  </button>
                                           <button
                                      className="p-1 text-lg text-white bg-yellow-500 rounded-xl"
                                      onClick={() =>
                                        navigate(
                                          `/dashboard/ppdb/admin/student/edit/${user_id}`
                                        )
                                      }
                                    >
                                      <BiEdit />
                                    </button>
                                  </>
                                
                                  
                                ) : (
                                  ""
                                )}
                                {is_paid == false && (
                                  <Button
                                    type="primary"
                                    className="bg-green-500 text-[1rem] p-1 rounded-full text-white w-[1.8rem] h-[1.8rem] hover:bg-green-500"
                                    onClick={() => showModal(student_id)}
                                  >
                                    <FaMoneyCheck className="mx-auto" />
                                  </Button>
                                )}

                                {/* {status == "Belum Diterima" ||
                                status == "Sudah Diterima" ? (
                                  <button
                                    className="p-1 text-lg text-white bg-blue-500 rounded-xl"
                                    onClick={() =>
                                      navigate(`/dashboard/ppdb/${student_id}`)
                                    }
                                  >
                                    <RiEyeFill />
                                  </button>
                                ) : (
                                  ""
                                )} */}
                                {status == "Belum Diterima" && (
                                  <>
                                    <button
                                      className={`${
                                        status == "Belum Diterima"
                                          ? "bg-green-500"
                                          : "bg-red-500"
                                      } p-1 text-lg rounded-xl text-white`}
                                      onClick={(e) => {
                                        handleVerified(e, id, status);
                                      }}
                                    >
                                      {status === "Belum Diterima" && (
                                        <FiCheck />
                                      )}
                                    </button>
                                    <button
                                      className="p-1 text-lg text-white bg-yellow-500 rounded-xl"
                                      onClick={() =>
                                        navigate(
                                          `/dashboard/ppdb/admin/student/edit/${user_id}`
                                        )
                                      }
                                    >
                                      <BiEdit />
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-end gap-4 mt-[1rem]">
                <h4 className="text-center">
                  {totalPage} of {page}
                </h4>
                <div className="flex items-center justify-end gap-2 ">
                  {page > 1 && (
                    <button
                      className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem]"
                      onClick={() => {
                        setPage(page - 1);
                        setIsLoading(true);
                        setEndPage(false);
                      }}
                      type="button"
                    >
                      <IoChevronBackCircleSharp className="text-[1rem]" />
                      Back
                    </button>
                  )}
                  {endPage == false && (
                    <button
                      className={`px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem]`}
                      type="button"
                      onClick={() => {
                        setPage(page + 1);
                        setIsLoading(true);
                      }}
                    >
                      Next
                      <IoChevronBackCircleSharp className="text-[1rem] rotate-[180deg]" />
                    </button>
                  )}
                </div>
              </div>

              {/* {readyToPrint && (
                <Example data={dataToPrint} componentRef={componentRef} />
              )} */}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PPDB;
