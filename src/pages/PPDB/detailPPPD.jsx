import React, { useEffect, useState } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "react-spinkit";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";

const DetailPPDB = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState({});
  const [scholarship, setScholarship] = useState([]);
  const [achievement, setAchievement] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = JSON.parse(localStorage.getItem("usr")).user;

  useEffect(() => {
    (async () => {
      const result = await FecthData(
        `${APIBASEURL}/${user}/ppdb/${id}`,
        requestSetting("GET")
      );

      setTimeout(() => {
        setIsLoading(false);
        console.log(result);

        setData(result.data);
        setScholarship([...result.scholarship]);
        setAchievement([...result.achievement]);
      }, 2000);
    })();
  }, []);

  console.log(data, scholarship, achievement);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto font-poppins">
            {/* Loading Screen */}
            {isLoading && (
              <div className="absolute left-0  h-[100vh] w-full bg-white flex items-center flex-col justify-center z-[99] ">
                <Spinner name="line-scale-pulse-out" />
                Loading....
              </div>
            )}
            <button
              className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem] mb-[2rem]"
              onClick={() => navigate("/dashboard/ppdb")}
              type="button"
            >
              <IoChevronBackCircleSharp className="text-[1rem]" />
              Back
            </button>
            <div className="photo-profile w-[5rem] h-[5rem] rounded-2xl overflow-hidden">
              <img src={data?.photo ?? ""} alt="" />
            </div>
            <h2 className="font-semibold text-[1.2rem] mt-[1rem]">
              {data?.fullname ?? ""}
            </h2>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <h2 className="font-semibold">Profile Murid</h2>

                <table className="flex gap-[1rem] mt-[0.5rem]">
                  <thead className="text-[0.8rem]">
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">Email</th>
                      <th className="font-normal  whitespace-nowrap">Phone</th>
                      <th className="font-normal  whitespace-nowrap">Birth</th>
                      <th className="font-normal  whitespace-nowrap">Nik</th>
                      <th className="font-normal  whitespace-nowrap">Agama</th>
                      <th className="font-normal  whitespace-nowrap">
                        Akta Lahir
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Tinggi{" "}
                      </th>
                      <th className="font-normal  whitespace-nowrap">Berat </th>
                      <th className="font-normal  whitespace-nowrap">
                        Saudara{" "}
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Anak Ke
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Berkebutuhan Khusus
                      </th>
                    </tr>
                  </thead>
                  <tbody className="pr-2 text-[0.8rem]">
                    <tr className="flex flex-col gap-1 text-slate-800">
                      <td className="font-normal whitespace-nowrap">
                        {data?.email ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.phone ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.birth ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.nik ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.religion ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.no_certificate_registration ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.height ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.weight ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.amount_siblings ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.order_family ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.student_special_needs ?? ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Profile Ayah</h2>
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">Name</th>
                      <th className="font-normal  whitespace-nowrap">Birth</th>
                      <th className="font-normal  whitespace-nowrap">Nik</th>
                      <th className="font-normal  whitespace-nowrap">
                        Pendidikan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pekerjaan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pendapatan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Berkebutuhan Khusus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      <td className="font-normal whitespace-nowrap">
                        {data?.father_name ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.father_birth ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.father_nik ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.father_education ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.father_job ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.father_salary ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.father_special_needs ?? ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Profile Ibu</h2>
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">Name</th>
                      <th className="font-normal  whitespace-nowrap">Birth</th>
                      <th className="font-normal  whitespace-nowrap">Nik</th>
                      <th className="font-normal  whitespace-nowrap">
                        Pendidikan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pekerjaan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pendapatan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Berkebutuhan Khusus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      <td className="font-normal whitespace-nowrap">
                        {data?.mother_name ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.mother_birth ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.mother_nik ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.mother_education ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.mother_job ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.mother_salary ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.mother_special_needs ?? ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Profile Wali Murid</h2>
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">Name</th>
                      <th className="font-normal  whitespace-nowrap">Birth</th>
                      <th className="font-normal  whitespace-nowrap">Nik</th>
                      <th className="font-normal  whitespace-nowrap">
                        Pendidikan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pekerjaan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pendapatan
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Berkebutuhan Khusus
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      <td className="font-normal whitespace-nowrap">
                        {data?.guardian_name ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.guardian_birth ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.guardian_nik ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.guardian_education ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.guardian_job ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.guardian_salary ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.guardian_special_needs ?? ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <tbody>
                    {achievement.map((item, index) => {
                      return (
                        <tr
                          className="text-left flex flex-col gap-1 mb-[1rem]"
                          key={index}
                        >
                          <td className="font-semibold">
                            Prestasi {achievement.length <= 1 ? "" : index + 1}
                          </td>

                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Nama Prestasi </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.achievement_name ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Jenis Prestasi </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.type ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Tingkat </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.level ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Tahun </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.year ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Penyelenggara </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.organizer_by ?? "-"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <tbody>
                    {scholarship.map((item, index) => {
                      return (
                        <tr
                          className="text-left flex flex-col gap-1 mb-[1rem]"
                          key={index}
                        >
                          <td className="font-semibold">
                            Beasiswa {scholarship.length <= 1 ? "" : index + 1}
                          </td>

                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Jenis Beasiswa </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.type ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Mulai Tahun </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.year_start_at ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Selesai 2</span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.year_finish_at ?? "-"}
                            </span>
                          </td>
                          <td className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Keterangan </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.descriptions ?? "-"}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Registrasi</h2>
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">
                        Jenis Pendaftaran
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Asal Sekolah
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        No. Peserta Ujian
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        No. Seri Ijazah
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        No. Seri SKHUS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      <td className="font-normal  whitespace-nowrap">
                        {data?.type_registration ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.from_school ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.no_examinee ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.no_serial_diploma ?? ""}
                      </td>
                      <td className="font-normal  whitespace-nowrap">
                        {data?.no_serial_skhus ?? ""}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Pilihan Kompetensi</h2>
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">
                        Pilihan 1
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pilihan 2
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pilihan 3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      {data?.class_pick &&
                        data.class_pick.split("|").map((item, index) => {
                          return (
                            <td
                              className="font-normal whitespace-nowrap"
                              key={index}
                            >
                              {item}
                            </td>
                          );
                        })}
                    </tr>
                  </tbody>
                </table>
                <h2 className="font-semibold mt-[1.5rem]">
                  Pilihan Ekstrakurikuler
                </h2>

                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">
                        Pilihan 1
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pilihan 2
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      {data?.extracurricular &&
                        data.extracurricular.split("|").map((item, index) => {
                          return (
                            <td
                              className="font-normal whitespace-nowrap"
                              key={index}
                            >
                              {item}
                            </td>
                          );
                        })}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Pilihan Kompetensi</h2>
                <table className="flex  gap-[1rem] mt-[0.5rem]">
                  <thead>
                    <tr className="flex flex-col text-left text-slate-500 gap-1">
                      <th className="font-normal  whitespace-nowrap">
                        Baju Olahraga
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Pakaian Praktek
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Seragam Kotak Kotak
                      </th>
                      <th className="font-normal  whitespace-nowrap">
                        Seragam Kotak Kotak
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="flex flex-col gap-1 text-slate-800">
                      {data?.uniform &&
                        data.uniform.split("|").map((item, index) => {
                          return (
                            <td
                              className="font-normal whitespace-nowrap"
                              key={index}
                            >
                              {item}
                            </td>
                          );
                        })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailPPDB;
