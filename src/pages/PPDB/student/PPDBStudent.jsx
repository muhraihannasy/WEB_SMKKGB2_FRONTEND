import React, { useEffect, useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";

import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";

const PPDBStudent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [isNotHaveForm, setIsNotHaveForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getRegistration = async () => {
      const request = await fetch(
        `${APIBASEURL}/auth/user`,
        requestSetting("GET")
      );
      const res = await request.json();
      const dataStudent = res;

      const result = await FecthData(
        `${APIBASEURL}/student/registration/${dataStudent.student_id}`,
        requestSetting("GET")
      );

      setTimeout(() => {
        if (result && result.status === "Belum Mengisi Formulir") {
          setIsNotHaveForm(true);
        } else {
          setIsNotHaveForm(false);
        }

        setUser(data);
        setData(result);
        setIsLoading(false);
      }, 500);
    };

    (async () => getRegistration())();
  }, []);

  if (isLoading) {
    return (
      <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
        <Spinner name="line-scale-pulse-out" />
        Loading....
      </div>
    );
  }

  if (data && data.is_paid == 0) {
    return (
      <div className="flex h-screen overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}

        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main>
            {/* Welcome banner */}
            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto pt-[10rem] ">
              <div className="sm:w-max mx-auto px-8">
                <h2 className="text-center font-semibold text-[2.5rem] border-b-[2px] pb-4 border-third ">
                  {data.code_registration}
                </h2>
                <h2 className="text-center mt-[1.4rem] font-semibold">
                  Kode Pembayaran Anda
                </h2>
                <p className="mt-[0.4rem] text-center">
                  Tunjukan Kode ini di Bagian TU Gedung A atau Gedung B Untuk
                  Mengisi Form.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {isLoading && (
            <div className="fixed left-0  h-[100vh] w-full bg-white flex items-center flex-col justify-center z-[99] ">
              <Spinner name="line-scale-pulse-out" />
              Loading....
            </div>
          )}
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className="text-[1.2rem] font-semibold">
              Halo <span className="text">{data && data.fullname}</span>
            </h1>
            {isNotHaveForm && (
              <Link
                to="add"
                className="bg-[#3730a3] w-max flex items-center gap-2 text-white px-4 py-3 ml-auto rounded-xl text-[13px]"
              >
                <IoNewspaperSharp className="text-[1.2rem]" />
                <span>Isi Formulir</span>
              </Link>
            )}
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
                  {data && (
                    <tr>
                      <td className="p-2 whitespace-nowrap">
                        <div className="w-[3.5rem] h-[3.5rem] shrink-0 mr-2 sm:mr-3 rounded-full overflow-hidden">
                          <img
                            src={
                              !data.photo
                                ? "https://t3.ftcdn.net/jpg/04/51/93/48/360_F_451934847_V7rc18Ibs9UNU5sSihQBY0MzSDgei4Cr.jpg"
                                : data.photo
                            }
                            alt={data.fullname}
                          />
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap font-semibold">
                        {data.fullname}
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-regular">
                          {data.status == "Belum Mengisi Formulir"
                            ? "Belum Ada"
                            : data.from_school}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-regular ">
                          {data.status == "Belum Mengisi Formulir"
                            ? "Belum Ada"
                            : data.type_registration}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div
                          className={`text-center font-medium  
                           ${
                             data.status == "Belum Melakukan Pembayaran" &&
                             "text-red-500"
                           } 
                            ${
                              data.status == "Belum Mengisi Formulir" &&
                              "text-yellow-500"
                            }
                            ${data.status == "Belum Diterima" && "text-red-500"}
                            ${
                              data.status == "Sudah Diterima" &&
                              "text-green-500"
                            }
                            `}
                        >
                          {data.status}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-center font-medium flex items-center justify-center gap-2">
                          {data.status == "Belum Diterima" ||
                          data.status == "Sudah Diterima" ? (
                            <button
                              className="bg-blue-500 p-1 rounded-xl text-lg text-white"
                              onClick={() =>
                                navigate(`/dashboard/ppdb/${data.student_id}`)
                              }
                            >
                              <RiEyeFill />
                            </button>
                          ) : (
                            ""
                          )}
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PPDBStudent;
