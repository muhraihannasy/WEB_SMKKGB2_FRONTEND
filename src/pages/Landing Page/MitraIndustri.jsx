import { useEffect, useState } from "react";

// Icon

// Component
import HeaderLandingPage from "../../partials/HeaderLandingPage";
import Footer from "../../partials/landing page/footer";

const MitraIndustri = () => {
  const defaultImage =
    "data:image/jpeg;base64,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";
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container">
            <h2 className="text-[1.5rem] text-center lg:w-[39rem] mx-auto mb-[4rem] mt-[3rem] font-semibold">
              Perusahaan Yang Telah Bekerja Sama Dengan SMK Karya Guna Bhakti 2
              Kota Bekasi
            </h2>

            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[1rem]">
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Lintas Jaringan Nusantara
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Panasonic Electrict Work Global
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Samsung Elektronic Indonesia
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Seiwa Indonesia
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Indofood Sukses Makmur
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Bridgestone Tyre Indonesia
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Jasa Marga
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Bakrie Pipe Industries
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Denco
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Pharos
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Epson
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Coca Cola
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Nutrifood
                </h2>
              </div>
              <div className="bg-white rounded-[0.5rem] px-6 py-6 shadow-xl border flex flex-col justify-center items-center">
                <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden border-2 ">
                  <img src={defaultImage} alt="" />
                </div>
                <h2 className="mt-[1rem] font-semibold text-center">
                  PT Citra Mas
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default MitraIndustri;
