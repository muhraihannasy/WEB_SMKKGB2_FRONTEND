import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import CardBlog from "../../components/card-blog/CardBlog";

import HeaderLandingPage from "../../partials/HeaderLandingPage";

// Swiper
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import image2 from "../../images/home/image2.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import Footer from "../../partials/landing page/footer";
import { FaBookReader, FaChalkboardTeacher } from "react-icons/fa";
import Spinner from "react-spinkit";
import { MdOutlineGroups } from "react-icons/md";
import { AiOutlineGroup } from "react-icons/ai";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const setting = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };
      const req = await FecthData(`${APIBASEURL}/blogs`, setting);
      const res = req;

      setTimeout(() => {
        if (res) {
          setData(res);
        }
        setIsLoading(false);
      }, 1000);
    }

    ((async) => getData())();
  }, []);
  return (
    <>
      <HeaderLandingPage />

      {/* Loading */}
      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      <main>
        <section className="relative lg:h-[40rem]  bg-gradient-to-r from-[#2E328B] to-[#4357A0] lg:pt-[10rem] py-[5rem] lg:mb-[18rem] mb-[4rem]">
          <div className="container mx-auto grid lg:grid-cols-2 grid-cols-1">
            <div className="h-full text-white lg:text-left text-center">
              <h2 className="font-semibold text-[1rem]">
                SMK Karya Guna Bhakti 2 Bekasi
              </h2>
              <h2 className="font-bold leading-[115.9%] sm:text-[3rem] text-[2.5rem] mb-[1rem] mt-[0.5rem]">
                <span className="text-third">Best </span> Vocational <br />
              High School <span className="text-fourty">in</span> Bekasi
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

        <section>
          <div className="container grid lg:grid-cols-2 grid-cols-1 sm:mt-0 ">
            <div>
              <img
                src={image2}
                alt=""
                className="lg:w-[420.31px]  mx-auto w-full lg:mb-0 mb-[3rem]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-[2rem] font-bold  mb-[1.8rem]">
                Kenapa Harus SMK Karya Guna Bhakti 2 Bekasi ?
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline className="text-third text-[1.5rem]" />{" "}
                  <p>Akreditasi A.</p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline className="text-third text-[1.5rem]" />{" "}
                  <p>Sarana Praktek lengkap </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline className="text-third text-[1.5rem]" />{" "}
                  <p>10+ Mitra Industri </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline className="text-third text-[1.5rem]" />{" "}
                  <p>Guru Yang Terampil Dan Profesional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container  my-[10rem]">
            <div className="relative bg-secondary flex items-center flex-wrap justify-center gap-[1.5rem] text-white rounded-[2rem] py-[3rem] px-[2rem] overflow-hidden">
              <div className="w-[12rem] text-center  flex flex-col items-center gap-2 md:h-[13rem]  md:mb-0 mb-[1rem] justify-evenly">
                <FaBookReader className="text-[3rem]" />
                <div className="md:h-[6rem]">
                  <h2 className="font-semibold text-[1.5rem]">3</h2>
                  <p>Kejuruan</p>
                </div>
              </div>
              <div className="w-[12rem] text-center  flex items-center flex-col gap-2 md:h-[13rem]  md:mb-0 mb-[1rem] justify-evenly">
                <MdOutlineGroups className="text-[3rem]" />
                <div className="md:h-[6rem]">
                  <h2 className="font-semibold text-[1.5rem]">1500</h2>
                  <p>Siswa Karya Guna Bhakti 2 Bekasi</p>
                </div>
              </div>
              <div className="w-[12rem] text-center  flex items-center flex-col gap-2 md:h-[13rem]  md:mb-0 mb-[1rem] justify-evenly">
                <FaChalkboardTeacher className="text-[3rem]" />
                <div className="md:h-[6rem]">
                  <h2 className="font-semibold text-[1.5rem]">60+</h2>
                  <p>Guru Berkompetensi Pada Tiap Bidangnya</p>
                </div>
              </div>
              <div className="w-[12rem] text-center  flex items-center flex-col gap-2 md:h-[13rem]  md:mb-0 mb-[1rem] justify-evenly">
                <AiOutlineGroup className="text-[3rem]" />
                <div className="md:h-[6rem]">
                  <h2 className="font-semibold text-[1.5rem]">30+</h2>
                  <p>Ruang Kelas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-[7rem]">
            <div className="text-center mb-[3rem]">
              <h2 className="text-[2rem] font-semibold">Artikel</h2>
              <p>Seluruh informasi mengenai SMK Karya Guna Bhakti 2 Bekasi</p>
            </div>

            <CardBlog data={data} />

            <Link
              to="/artikel"
              className="block text-center mt-[2.5rem] transition-colors font-semibold hover:text-third"
            >
              Lihat Banyak Artikel...
            </Link>
          </div>
        </section>

        <section>
          <div className="container  mt-[5rem]">
            <div className="relative bg-secondary flex items-centera justify-center text-white rounded-[2rem] h-[403px] overflow-hidden">
              <svg
                viewBox="0 0 251 281"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute sm:bottom-0 sm:left-0 bottom-[-2rem] left-[-2rem] lg:w-[15rem] md:w-[10rem] w-[8rem]"
              >
                <rect
                  x="-47.0303"
                  y="104.769"
                  width="231.536"
                  height="231.536"
                  rx="24"
                  transform="rotate(-20.1255 -47.0303 104.769)"
                  fill="#FFB800"
                />
                <g filter="url(#filter0_f_443_546)">
                  <rect
                    x="-118"
                    y="192.763"
                    width="231.536"
                    height="231.536"
                    rx="24"
                    transform="rotate(-53.351 -118 192.763)"
                    fill="url(#paint0_linear_443_546)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_443_546"
                    x="-124.42"
                    y="0.579712"
                    width="336.811"
                    height="336.81"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="8"
                      result="effect1_foregroundBlur_443_546"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_443_546"
                    x1="-2.23185"
                    y1="192.763"
                    x2="-2.23185"
                    y2="424.3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#74BAA9" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.77" />
                  </linearGradient>
                </defs>
              </svg>
              <svg
                viewBox="0 0 283 331"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute sm:top-0 sm:right-0 top-[-2rem] right-[-1.5rem] lg:w-[15rem] md:w-[10rem] w-[8rem]"
              >
                <rect
                  x="77.9697"
                  y="97.7687"
                  width="231.536"
                  height="231.536"
                  rx="24"
                  transform="rotate(-20.1255 77.9697 97.7687)"
                  fill="#FFB800"
                />
                <g filter="url(#filter0_f_443_543)">
                  <rect
                    x="7"
                    y="185.763"
                    width="231.536"
                    height="231.536"
                    rx="24"
                    transform="rotate(-53.351 7 185.763)"
                    fill="url(#paint0_linear_443_543)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_443_543"
                    x="0.580078"
                    y="-6.42029"
                    width="336.811"
                    height="336.81"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="8"
                      result="effect1_foregroundBlur_443_543"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_443_543"
                    x1="122.768"
                    y1="185.763"
                    x2="122.768"
                    y2="417.3"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2E339F" />
                    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.77" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex flex-col items-center justify-center gap-5 z-[9] px-[1.5rem]">
                <h2 className="md:text-[2rem] text-[1.2rem] md:w-[25rem] text-center font-semibold">
                  Ayo, Daftar dari Sekarang. Untuk Masa Depan yang Lebih Baik.
                </h2>
                <p className="md:w-[25rem] sm:w-[20rem] md:text-[1rem] text-[0.8rem] text-center">
                  Dengan berbagai pilihan program di bidang Coding, Data
                  Science, Digital Marketing, dan UI/UX.
                </p>
                <Link
                  to="/register"
                  className="px-4 py-2 text-white bg-third rounded-lg flex items-center gap-2 text-[0.8rem] justify-center"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
