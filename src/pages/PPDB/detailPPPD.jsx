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
        if (result) {
          setIsLoading(false);
        }
        console.log(result);

        setData(result.data);
        console.log(result.data, "DATANy");
        setScholarship([...result.scholarship]);
        setAchievement([...result.achievement]);
      }, 2000);
    })();
  }, []);

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

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto font-poppins">
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
            </div>{" "}
            <h2 className="font-semibold text-[1.2rem] mt-[1rem]">
              {data?.fullname ?? ""}
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <h2 className="font-semibold mb-[1rem]">Profile Murid</h2>

                <div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Email : </span>
                      {data?.email ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Phone</span>
                      {data?.phone ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tanggal Lahir : </span>
                      {data?.birth?.split("|")[0] ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tempat Lahir : </span>
                      {data?.birth?.split("|")[1] ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nik : </span>
                      {data?.nik ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Agama : </span>
                      {data?.religion ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Akta Lahir : </span>
                      {data?.no_certificate_registration ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tinggi : </span>
                      {data?.height ?? ""} CM
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Berat : </span>
                      {data?.weight ?? ""} KG
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Jumlah Saudara : </span>
                      {data?.amount_siblings ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Anak Ke : </span>
                      {data?.order_family ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">
                        Berkebutuhan Khusus :{" "}
                      </span>
                      {data?.student_special_needs ?? ""}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <h2 className="font-semibold mb-[1rem]">Profile Ayah</h2>

                <div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nama : </span>
                      {data?.father_name ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tanggal Lahir : </span>
                      {data?.father_birth
                        ? data.father_birth.split("|")[1]
                        : "-"}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tempat Lahir : </span>
                      {data?.father_birth
                        ? data.father_birth.split("|")[0]
                        : "-"}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nik : </span>
                      {data?.father_nik ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pendidikan : </span>
                      {data?.father_education ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pekerjaan : </span>
                      {data?.father_job ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pendapatan : </span>
                      {data?.father_salary ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">
                        Berkebutuhan Khusus :{" "}
                      </span>
                      {data?.father_special_needs ?? ""}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <h2 className="font-semibold mb-[1rem]">Profile Ibu</h2>

                <div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nama : </span>
                      {data?.mother_name ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tanggal Lahir : </span>
                      {data?.mother_birth
                        ? data.mother_birth.split("|")[1]
                        : "-"}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tempat Lahir : </span>
                      {data?.mother_birth
                        ? data.mother_birth.split("|")[0]
                        : "-"}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nik : </span>
                      {data?.mother_nik ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pendidikan : </span>
                      {data?.mother_education ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pekerjaan : </span>
                      {data?.mother_job ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pendapatan : </span>
                      {data?.mother_salary ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">
                        Berkebutuhan Khusus :{" "}
                      </span>
                      {data?.mother_special_needs ?? ""}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <h2 className="font-semibold mb-[1rem]">Profile Wali</h2>

                <div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nama : </span>
                      {data?.guardian_name ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tanggal Lahir : </span>
                      {data?.guardian_birth.split("|")[1]}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Tempat Lahir : </span>
                      {data?.guardian_birth.split("|")[0]}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Nik : </span>
                      {data?.guardian_nik ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pendidikan : </span>
                      {data?.guardian_education ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pekerjaan : </span>
                      {data?.guardian_job ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Pendapatan : </span>
                      {data?.guardian_salary ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]">
                        Berkebutuhan Khusus :{" "}
                      </span>
                      {data?.guardian_special_needs ?? ""}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <div>
                  <ul className="flex flex-col gap-3">
                    {achievement.map((item, index) => {
                      return (
                        <ul
                          className="text-left flex flex-col gap-1 mb-[1rem]"
                          key={index}
                        >
                          <li className="font-semibold">
                            Prestasi {achievement.length <= 1 ? "" : index + 1}
                          </li>

                          <li className="flex gap-2">
                            <span className="">Nama Prestasi </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.achievement_name ?? "-"}
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="">Jenis Prestasi </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.type ?? "-"}
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="">Tingkat </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.level ?? "-"}
                            </span>
                          </li>
                          <li className="flex gap-2">
                            <span className="">Tahun </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.year ?? "-"}
                            </span>
                          </li>
                          <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                            <span className="">Penyelenggara </span>
                            <span className="text-left whitespace-nowrap ">
                              : {item.organizer_by ?? "-"}
                            </span>
                          </li>
                        </ul>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <div>
                  {scholarship.map((item, index) => {
                    return (
                      <ul className="flex flex-col gap-3 mb-[1rem]" key={index}>
                        <li className="font-semibold">
                          Beasiswa {scholarship.length <= 1 ? "" : index + 1}
                        </li>
                        <li className="flex gap-2">
                          <span className="">Jenis Beasiswa </span>
                          <span className="text-left whitespace-nowrap ">
                            : {item.type ?? "-"}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="">Mulai Tahun </span>
                          <span className="text-left whitespace-nowrap ">
                            : {item.year_start_at ?? "-"}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="">Selesai 2</span>
                          <span className="text-left whitespace-nowrap ">
                            : {item.year_finish_at ?? "-"}
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="">Keterangan </span>
                          <span className="text-left whitespace-nowrap ">
                            : {item.descriptions ?? "-"}
                          </span>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <h2 className="font-semibold mb-[1rem]">Registrasi</h2>

                <div>
                  <ul className="flex flex-col gap-3">
                    <li className="flex gap-2">
                      <span className="text-[1rem]">Jenis Pendaftaran : </span>
                      {data?.type_registration ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]"> Asal Sekolah : </span>
                      {data?.from_school ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]"> No. Peserta Ujian : </span>
                      {data?.no_examinee ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]"> No. Seri Ijazah : </span>
                      {data?.no_serial_diploma ?? ""}
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[1rem]"> No. Seri SKHUS : </span>
                      {data?.no_serial_skhus ?? ""}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem] overflow-x-auto">
                <div>
                  <ul className="flex flex-col gap-3 mb-[1rem]">
                    <li className="font-semibold">Pilihan Kompetensi </li>
                    {data?.class_pick.split("|").map((item, index) => {
                      return (
                        <li className="flex gap-2" key={index}>
                          <span className="">Pilihan {index + 1} </span>
                          <span className="text-left whitespace-nowrap ">
                            : {item ?? "-"}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="shadow-lg py-5 px-6 rounded-lg w-full mt-[0.5rem]">
                <h2 className="font-semibold">Baju </h2>
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
