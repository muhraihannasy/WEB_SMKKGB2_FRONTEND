import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import HeaderLandingPage from "../../../partials/HeaderLandingPage";

// Swiper
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images

import Footer from "../../../partials/landing page/footer";

const VisiMisi = () => {
  return (
    <>
      <HeaderLandingPage />
      <main>
        <section className="relative lg:h-[40rem]  bg-gradient-to-r from-[#2E328B] to-[#4357A0] lg:pt-[10rem] py-[5rem] lg:mb-[18rem] mb-[4rem]">
          <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1">
            <div className="h-full text-white lg:text-left text-center">
              <h2 className="font-semibold text-[1rem]">
                SMK Karya Guna Bhakti 2 Bekasi
              </h2>
              <h2 className="font-bold leading-[115.9%] sm:text-[3rem] text-[2.5rem] mb-[1rem] mt-[0.5rem]">
                <span className="text-third">Best </span> Vocational <br />
                School <span className="text-fourty">in</span> Bekasi
              </h2>
              <p className="font-medium leading-relaxed sm:w-[24rem] w-[18rem] lg:mx-[0] text-[0.9rem] mx-auto  ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
                deserunt.
              </p>
            </div>
            <div className="flex justify-start flex-col items-center lg:translate-y-[-4rem]  lg:my-0 mt-[4rem]  mb-[2rem]  h-[20rem] ">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 10000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-2xl"
              >
                <SwiperSlide>
                  <iframe
                    src="https://www.youtube.com/embed/-2m9beYGnpA?autoplay=1&mute=1"
                    title="YouTube video player"
                    frameBorder={"0"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                  ></iframe>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <img
                    src="https://drive.google.com/file/d/1r0SaChYAb5UbbmAHMnGEJdwFaUV6Tj4j/view?usp=sharing"
                    alt=""
                  />
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>

          <div className="container lg:px-[5rem]  md:py-[3rem]">
            <div className="bg-white rounded-[1.5rem] px-10 py-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center md:gazp-20 gap-12 shadow-xl">
              <div className="lg:w-[15rem] ">
                <h2 className="bg-fourty bg-opacity-[70%] w-max px-3 text-white font-medium py-1 rounded-full mb-[0.5rem] text-[12px]">
                  TKJ
                </h2>
                <h2 className="font-bold mb-[0.5rem] text-[18px]">
                  Teknik Komputer & Jaringan
                </h2>
                <p className=" text-[12px] mt-[1rem]">
                  Teknik Komputer dan Jaringan, merupakan salah satu cabang
                  Bidang Keahlian Teknik Informatika dan Komunikasi
                </p>
              </div>
              <div
                className="lg:w-[15rem] relative xl:before:visible before:invisible before:absolute before:top-0 before:left-[-4.5rem] before:h-full before:w-[1px] before:bg-slate-200
              xl:after:visible after:invisible after:absolute after:top-0 after:right-[-4rem] after:h-full after:w-[1px] after:bg-slate-200
              "
              >
                <h2 className="bg-[#2E328B] bg-opacity-[40%] w-max px-3 text-white font-medium py-1 rounded-full mb-[0.5rem] text-[12px]">
                  AKL
                </h2>
                <h2 className="font-bold  mb-[0.5rem] text-[18px]">
                  Akuntansi & Keuangan Lembaga
                </h2>
                <p className=" text-[12px] mt-[1rem]">
                  Akuntansi dan Keuangan Lembaga, merupakan salah satu cabang
                  Bidang Keahlian Bisnis dan Manajemen
                </p>
              </div>
              <div className="lg:w-[15rem]">
                <h2 className="bg-[#FFB800] bg-opacity-[58%] w-max px-3 text-white font-medium py-1 rounded-full mb-[0.5rem] text-[12px]">
                  OKTP
                </h2>
                <h2 className="font-bold  mb-[0.5rem] text-[18px]">
                  Otomatisasi & Tata Kelola Perkatoran
                </h2>
                <p className=" text-[12px] mt-[1rem]">
                  Otomatisasi dan Tata Kelola Perkantoran, merupakan salah satu
                  cabang Bidang Keahlian Bisnis dan Manajemen
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VisiMisi;
