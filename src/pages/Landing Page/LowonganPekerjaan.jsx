import { useEffect, useState } from "react";

// Icon
import { BiSearch } from "react-icons/bi";
import { IoChevronBackCircleSharp, IoLocationSharp } from "react-icons/io5";

// Component
import HeaderLandingPage from "../../partials/HeaderLandingPage";
import Footer from "../../partials/landing page/footer";

// Images
import bg from "../../images/profile sekolah/bg.jpg";
import image1 from "../../images/profile sekolah/image1.jpg";
import logo2 from "../../images/logo2.png";
import shape1 from "../../images/svg/shape3.svg";
import shape4 from "../../images/svg/shape4.svg";
import human1 from "../../images/profile sekolah/human1.jpg";

const LowonganPekerjaan = () => {
  const [jobs, setJobs] = useState([1, 2, 3, 4, 5, 6, 7, 7, 8, 8]);
  const [currentJob, setCurrentJob] = useState({});
  const [activeDetailJob, setActiveDetailJob] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      const { innerWidth } = window;
      setInnerWidth(innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <HeaderLandingPage />

      <main>
        <section className="bg-secondary flex items-center justify-center py-[4rem] overflow-hidden relative">
          {/* Shape */}
          <img src={shape4} alt="" className="absolute left-0 top-0 " />
          <div className="container z-[9]">
            <h2 className="text-[2rem] text-white text-center  mx-auto mb-[1.5rem] font-semibold">
              Temukan Pekerjaan{" "}
              <span className="text-third underline">Impianmu.</span>
            </h2>

            <div
              className={`flex items-center justify-center flex-row ${
                innerWidth < 656 ? "flex-col" : ""
              } gap-4`}
            >
              <div
                className={`flex items-center bg-white justify-between gap-2 border-2 ${
                  innerWidth < 656 ? "w-full" : "w-max"
                } pl-2 pr-4 py-[0.2rem] rounded-[0.5rem] `}
              >
                <input
                  type="text"
                  className="border-none focus:ring-0 flex-2 w-[90%] max-[342]:text-[2px]"
                  placeholder="Cari Pekerjaan Impianmu..."
                />

                <BiSearch className="text-[1.6rem] text-slate-500 flex-1 w-max" />
              </div>
              <select
                name=""
                id=""
                className={`bg-white px-[1.6rem] ${
                  innerWidth < 656 ? "w-full" : "w-[15rem]"
                } py-[0.8rem] rounded-[0.5rem]`}
              >
                <option value="" className="px-10">
                  Pilih Bagian...
                </option>
                <option value="" className="px-10">
                  Software Enginner
                </option>
                <option value="">IT Network</option>
              </select>
              <button
                className={`${
                  innerWidth < 656 ? "w-full" : "w-[6rem]"
                } bg-third text-white  py-3 px-5 rounded-[0.5rem] transition-colors hover:bg-yellow-400 text-center `}
                type="submit"
              >
                Cari
              </button>
            </div>
          </div>
        </section>

        <section>
          <div
            className={`container grid lg:grid-cols-6 grid-cols-1  max-[978px]:place-items-center gap-[1rem] mt-[5rem] relative ${
              activeDetailJob ? "z-[999]" : ""
            }`}
          >
            <div className="overflow-y-scroll lg:col-span-2 col-span-1 w-full px-1 scrool-bar-list-jobs">
              <div className="h-[40rem] ">
                {jobs.map((item) => {
                  return (
                    <div
                      className="bg-white mb-[1.5rem]  lg:w-full sm:w-[32rem] w-full  mx-auto shadow-xl rounded-[0.5rem] px-[1.3rem] py-4 cursor-pointer border border-l-[5px] border-l-third"
                      onClick={() => {
                        setCurrentJob({});
                        innerWidth < 1024 ? setActiveDetailJob(true) : "";
                      }}
                    >
                      <h2 className="bg-pink-200 px-3 py-1 w-max rounded-md text-[12px] font-semibold">
                        Design
                      </h2>
                      <h2 className="mt-[0.5rem] font-medium  text-[1.1rem]">
                        Product Designer
                      </h2>
                      <p className="text-[0.8rem]">PT Markonah Jaya</p>

                      <p className="flex items-center gap-2 mt-[1.5rem]">
                        <IoLocationSharp />
                        Jakarta Selatan
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail jobs on Desktop */}
            <div className="overflow-y-scroll w-full bg-white shadow-lg border rounded-[0.5rem] col-span-4 lg:h-[40rem] h-full scrool-bar-list-jobs lg:block hidden">
              <div className="w-full mb-[1.5rem] px-[1.3rem] py-4 ">
                <h2 className="mt-[0.5rem] font-medium  text-[1.5rem]">
                  Product Designer
                </h2>

                <p className="text-[1rem]">PT Markonah Jaya</p>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Description
                  </h3>
                  <p className="mb-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sint facilis quam rerum tempore ratione consequatur
                    ut autem unde consectetur?
                  </p>

                  <p className="mb-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sint facilis quam rerum tempore ratione consequatur
                    ut autem unde consectetur? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aliquam provident doloribus
                    autem repudiandae, labore a aliquid minima dolorum. Nihil,
                    sit aliquam provident repellat quas eligendi. Quo itaque
                    quia nemo voluptas.
                  </p>
                  <p className="mb-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sint facilis quam rerum tempore ratione consequatur
                    ut autem unde consectetur?
                  </p>
                </article>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Kualifikasi
                  </h3>

                  <ul className="list-disc pl-4">
                    <li className="mb-[0.1rem]">
                      Pendidikan S1 Jurusan Teknik Mesin/ Teknik Industri/
                      Teknik Listrik
                    </li>
                    <li className="mb-[0.1rem]">
                      Pengalaman sebagai leader memimpin minim 100 orang di
                      bagian produksi
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                  </ul>
                </article>

                <p className="flex items-center gap-2 mt-[1.5rem]">
                  <IoLocationSharp />
                  Jakarta Selatan
                </p>
              </div>
            </div>

            {/* Detail jobs on Tablet, Mobile */}
            <div
              className={`overflow-y-scroll w-full bg-white shadow-lg border rounded-[0.5rem] col-span-4 lg:h-[40rem] h-full lg:hidden block scrool-bar-list-jobs lg:relative fixed top-0 left-0 md:z-10 transition-all z-[99999] ${
                activeDetailJob ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <div
                className="text-[2.5rem] pl-4 pt-[2rem] text-secondary cursor-pointer"
                onClick={() => setActiveDetailJob(false)}
              >
                <IoChevronBackCircleSharp />
              </div>
              <div className="w-full mb-[1.5rem] px-[1.3rem] py-4 ">
                <h2 className="mt-[0.5rem] font-medium  text-[1.5rem]">
                  Product Designer
                </h2>

                <p className="text-[1rem]">PT Markonah Jaya</p>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Description
                  </h3>
                  <p className="mb-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sint facilis quam rerum tempore ratione consequatur
                    ut autem unde consectetur?
                  </p>

                  <p className="mb-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sint facilis quam rerum tempore ratione consequatur
                    ut autem unde consectetur? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Aliquam provident doloribus
                    autem repudiandae, labore a aliquid minima dolorum. Nihil,
                    sit aliquam provident repellat quas eligendi. Quo itaque
                    quia nemo voluptas.
                  </p>
                  <p className="mb-[1.5rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus sint facilis quam rerum tempore ratione consequatur
                    ut autem unde consectetur?
                  </p>
                </article>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Kualifikasi
                  </h3>

                  <ul className="list-disc pl-4">
                    <li className="mb-[0.1rem]">
                      Pendidikan S1 Jurusan Teknik Mesin/ Teknik Industri/
                      Teknik Listrik
                    </li>
                    <li className="mb-[0.1rem]">
                      Pengalaman sebagai leader memimpin minim 100 orang di
                      bagian produksi
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                    <li className="mb-[0.1rem]">Paham proses produksi</li>
                    <li className="mb-[0.1rem]">
                      Bersedia bekerja pada shift sore dan malam
                    </li>
                  </ul>
                </article>
                <p className="flex items-center gap-2 mt-[1.5rem]">
                  <IoLocationSharp />
                  Jakarta Selatan
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

export default LowonganPekerjaan;
