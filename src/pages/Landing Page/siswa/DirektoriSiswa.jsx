import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

const DirektoriSiswa = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container mt-[3rem]">
            <h2 className="sm:text-[2rem] text-[1.5rem] text-center  mx-auto lg:mb-[3rem] mb-[2rem] font-semibold">
              Direktori Siswa
            </h2>

            <div className="flex flex-wrap gap-3 mb-[1rem]">
              <select name="" id="" className="rounded-lg md:w-auto w-full">
                <option value="">Angkatan</option>
                <option value="">2021-2023</option>
                <option value="">2023-2026</option>
                <option value="">2026-2029</option>
              </select>
              <select name="" id="" className="rounded-lg md:w-auto w-full">
                <option value="">Kelas</option>
                {/* TKJ */}
                <option value="">X TKJ 1</option>
                <option value="">X TKJ 2</option>
                <option value="">X TKJ 3</option>
                <option value="">X TKJ 4</option>
                <option value="">X TKJ 5</option>
                <option value="">X TKJ 6</option>
                <option value="">XI TKJ 1</option>
                <option value="">XI TKJ 2</option>
                <option value="">XI TKJ 3</option>
                <option value="">XI TKJ 4</option>
                <option value="">XI TKJ 5</option>
                <option value="">XI TKJ 6</option>
                <option value="">XII TKJ 1</option>
                <option value="">XII TKJ 2</option>
                <option value="">XII TKJ 3</option>
                <option value="">XII TKJ 4</option>
                <option value="">XII TKJ 5</option>
                <option value="">XII TKJ 6</option>

                {/* TKJ */}
                <option value="">X AKL 1</option>
                <option value="">X AKL 2</option>
                <option value="">X AKL 3</option>
                <option value="">X AKL 4</option>
                <option value="">X AKL 5</option>
                <option value="">X AKL 6</option>
                <option value="">XI AKL 1</option>
                <option value="">XI AKL 2</option>
                <option value="">XI AKL 3</option>
                <option value="">XI AKL 4</option>
                <option value="">XI AKL 5</option>
                <option value="">XI AKL 6</option>
                <option value="">XII AKL 1</option>
                <option value="">XII AKL 2</option>
                <option value="">XII AKL 3</option>
                <option value="">XII AKL 4</option>
                <option value="">XII AKL 5</option>
                <option value="">XII AKL 6</option>

                {/* TKJ */}
                <option value="">X OKTP 1</option>
                <option value="">X OKTP 2</option>
                <option value="">X OKTP 3</option>
                <option value="">X OKTP 4</option>
                <option value="">X OKTP 5</option>
                <option value="">X OKTP 6</option>
                <option value="">XI OKTP 1</option>
                <option value="">XI OKTP 2</option>
                <option value="">XI OKTP 3</option>
                <option value="">XI OKTP 4</option>
                <option value="">XI OKTP 5</option>
                <option value="">XI OKTP 6</option>
                <option value="">XII OKTP 1</option>
                <option value="">XII OKTP 2</option>
                <option value="">XII OKTP 3</option>
                <option value="">XII OKTP 4</option>
                <option value="">XII OKTP 5</option>
                <option value="">XII OKTP 6</option>
              </select>
              <button className="bg-secondary text-white rounded-lg w-[6rem] h-[3rem] md:ml-[0] ml-auto">
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

export default DirektoriSiswa;
