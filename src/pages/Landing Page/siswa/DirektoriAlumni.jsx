import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

const DirektoriAlumni = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container mt-[3rem]">
            <h2 className="sm:text-[2rem] text-[1.5rem] text-center  mx-auto lg:mb-[3rem] mb-[2rem] font-semibold">
              Direktori Alumni
            </h2>

            <div className="flex gap-2 mb-[1rem]">
              <select name="" id="" className="rounded-lg md:w-auto w-full">
                <option value="">Angkatan</option>
                <option value="">2021-2023</option>
                <option value="">2023-2026</option>
                <option value="">2026-2029</option>
              </select>
              <button className="bg-secondary text-white rounded-lg w-[6rem] h-[3rem]">
                Cari
              </button>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-[1.5rem]">
              <div className="bg-white shadow-lg rounded-lg pb-[2rem]  gap-[2rem] px-[1.5rem]">
                <div className="flex items-center rounded-full overflow-hidden w-[5rem] h-[5rem] mt-[2rem]">
                  <img
                    src="http://www.smpn16yogyakarta.sch.id/media_library/students/a91143bc654657f730e4b9c6554c7da9.jpg"
                    alt=""
                    className="translate-y-[0.5rem]"
                  />
                </div>
                <div className="pt-[1.8rem] grid sm:grid-cols-2 gap-[1.5rem]">
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Nama Lengkap :</span>
                    Muhammad Raihan Nasywaan
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">NIS :</span>
                    0128301283
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Jenis Kelamin :</span>
                    Laki - Laki
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Tempat Lahir :</span>
                    Jakarta
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Tanggal Lahir :</span>
                    27 November 2004
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1"> Tahun Masuk :</span>
                    2021
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1"> Tahun Keluar :</span>
                    2023
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg pb-[2rem]  gap-[2rem] px-[1.5rem]">
                <div className="flex items-center rounded-full overflow-hidden w-[5rem] h-[5rem] mt-[2rem]">
                  <img
                    src="http://www.smpn16yogyakarta.sch.id/media_library/students/a91143bc654657f730e4b9c6554c7da9.jpg"
                    alt=""
                    className="translate-y-[0.5rem]"
                  />
                </div>
                <div className="pt-[1.8rem] grid sm:grid-cols-2 gap-[1.5rem]">
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Nama Lengkap :</span>
                    Muhammad Raihan Nasywaan
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">NIS :</span>
                    0128301283
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Jenis Kelamin :</span>
                    Laki - Laki
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Tempat Lahir :</span>
                    Jakarta
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Tanggal Lahir :</span>
                    27 November 2004
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1"> Tahun Masuk :</span>
                    2021
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1"> Tahun Keluar :</span>
                    2023
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-lg rounded-lg pb-[2rem]  gap-[2rem] px-[1.5rem]">
                <div className="flex items-center rounded-full overflow-hidden w-[5rem] h-[5rem] mt-[2rem]">
                  <img
                    src="http://www.smpn16yogyakarta.sch.id/media_library/students/a91143bc654657f730e4b9c6554c7da9.jpg"
                    alt=""
                    className="translate-y-[0.5rem]"
                  />
                </div>
                <div className="pt-[1.8rem] grid sm:grid-cols-2 gap-[1.5rem]">
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Nama Lengkap :</span>
                    Muhammad Raihan Nasywaan
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">NIS :</span>
                    0128301283
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Jenis Kelamin :</span>
                    Laki - Laki
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Tempat Lahir :</span>
                    Jakarta
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1">Tanggal Lahir :</span>
                    27 November 2004
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1"> Tahun Masuk :</span>
                    2021
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold mb-1"> Tahun Keluar :</span>
                    2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DirektoriAlumni;
