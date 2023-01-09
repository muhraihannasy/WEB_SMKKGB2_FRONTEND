import { useEffect, useRef, useState } from "react";

// Icon
import { BiSearch } from "react-icons/bi";
import { IoChevronBackCircleSharp, IoLocationSharp } from "react-icons/io5";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";
import Spinner from "react-spinkit";

// Component
import HeaderLandingPage from "../../partials/HeaderLandingPage";
import Footer from "../../partials/landing page/footer";

// Images
import shape4 from "../../images/svg/shape4.svg";
import worker from "../../images/svg/worker.svg";
import notfound from "../../images/svg/notfound.svg";

const LowonganPekerjaan = () => {
  const [currentJob, setCurrentJob] = useState({
    name: "",
    company_name: "",
    location: "",
    qualification: "",
  });
  const [activeDetailJob, setActiveDetailJob] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [jobCategories, setJobCategories] = useState([]);
  const [amountJob, setAmountJob] = useState(0);
  const [filterBy, setFilterBy] = useState("");
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const descriptionRef = useRef();
  const descriptionDekstopRef = useRef();

  const handleClick = async (item) => {
    const { name, company_name, location, description, qualification } = item;
    const qualificationTemp = qualification.split("|");
    setCurrentJob({
      name,
      company_name,
      location,
      qualification: qualificationTemp,
    });
    innerWidth < 1024 ? setActiveDetailJob(true) : "";
    descriptionRef.current.innerHTML = description;
    descriptionDekstopRef.current.innerHTML = description;
  };

  async function getJobCategories() {
    const setting = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };
    const req = await FecthData(`${APIBASEURL}/job_categories`, setting);
    const res = req;
    setTimeout(() => {
      setJobCategories(res);
    }, 1000);
  }

  useEffect(() => {
    async function getData() {
      const setting = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };
      const req = await FecthData(
        `${APIBASEURL}/jobs?filter=${search}&by=${filterBy}`,
        setting
      );
      const res = req;
      setCurrentJob({
        name: "",
        company_name: "",
        location: "",
        qualification: "",
      });
      setTimeout(() => {
        setJobs(res.data);
        setAmountJob(res.count_job);
        setIsLoading(false);

        descriptionRef.current.innerHTML = res.description;
        setIsSearch(false);
      }, 1000);
    }

    const handleWindowResize = () => {
      const { innerWidth } = window;
      setInnerWidth(innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    ((async) => {
      getData();
      getJobCategories();
    })();

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isSearch]);

  return (
    <>
      <HeaderLandingPage />

      <main>
        {/* Loading */}
        {isLoading && (
          <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
            <Spinner name="line-scale-pulse-out" />
            Loading....
          </div>
        )}
        <section className="bg-secondary flex items-center justify-center pt-[4rem] pb-[2rem] overflow-hidden relative">
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
                  onChange={(e) => setSearch(e.target.value)}
                />

                <BiSearch className="text-[1.6rem] text-slate-500 flex-1 w-max" />
              </div>
              <select
                name=""
                id=""
                className={`bg-white px-[1.6rem] ${
                  innerWidth < 656 ? "w-full" : "w-[15rem]"
                } py-[0.8rem] rounded-[0.5rem]`}
                onChange={(e) => setFilterBy(e.target.value)}
              >
                <option value="" className="px-10">
                  Pilih Bagian...
                </option>
                {jobCategories.map((item) => (
                  <option value={item.name} className="px-10">
                    {item.name}
                  </option>
                ))}
              </select>
              <button
                className={`${
                  innerWidth < 656 ? "w-full" : "w-[6rem]"
                } bg-third text-white  py-3 px-5 rounded-[0.5rem] transition-colors hover:bg-yellow-400 text-center `}
                type="submit"
                onClick={() => setIsSearch(true)}
              >
                Cari
              </button>
            </div>

            <h2
              className={`text-white font-semibold text-center mt-[40px] ${
                isSearch ? "opacity-100" : "opacity-0"
              }`}
            >
              Loading ...
            </h2>
          </div>
        </section>

        <section>
          {jobs.length == 0 && (
            <div className="container pt-[2rem]">
              <img
                src={notfound}
                alt=""
                className="lg:w-[30%] w-[80%] mx-auto"
              />
              <h2 className="text-center font-semibold text-[1.2rem]">
                Upps, Lowongan Pekerjaan Tidak Ditemukan
              </h2>
            </div>
          )}
          <div
            className={`container grid lg:grid-cols-6 grid-cols-1  max-[978px]:place-items-center gap-[1rem] mt-[5rem] relative ${
              activeDetailJob ? "z-[999]" : ""
            } ${jobs.length > 0 ? "" : "hidden"}`}
          >
            <div className="overflow-y-scroll lg:col-span-2 col-span-10 w-full px-1 scrool-bar-list-jobs">
              <div className="h-[40rem] ">
                {jobs.map((item, index) => {
                  const { name, company_name, location, description } = item;

                  return (
                    <div
                      className="bg-white mb-[1.5rem]  lg:w-full sm:w-[32rem] w-full  mx-auto shadow-xl rounded-[0.5rem] px-[1.3rem] py-4 cursor-pointer border border-l-[5px] border-l-third"
                      onClick={() => handleClick(item)}
                      key={index}
                    >
                      <h2 className="bg-pink-200 px-3 py-1 w-max rounded-md text-[12px] font-semibold">
                        Design
                      </h2>
                      <h2 className="mt-[0.5rem] font-medium  text-[1.1rem]">
                        {name}
                      </h2>
                      <p className="text-[0.8rem]">{company_name}</p>

                      <p className="flex items-center gap-2 mt-[1.5rem]">
                        <IoLocationSharp />
                        {location}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail jobs on Desktop */}
            <div
              className={`overflow-y-scroll w-full bg-white  shadow-lg  border rounded-[0.5rem] col-span-4 lg:h-[40rem] h-full scrool-bar-list-jobs lg:block hidden `}
            >
              <div
                className={`w-full mb-[1.5rem] px-[1.3rem] py-4 ${
                  currentJob.name == "" ? "hidden" : "block"
                } 
                ${isSearch ? "hidden" : "block"}`}
              >
                <h2 className="mt-[0.5rem] font-medium  text-[1.5rem]">
                  {currentJob.name}
                </h2>
                <h2 className="text-[1.1rem]">{currentJob.company_name}</h2>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Description
                  </h3>
                  <div className="mb-[1.5rem]" ref={descriptionRef}></div>
                </article>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Kualifikasi
                  </h3>

                  <ul className="list-disc pl-4">
                    {currentJob.qualification !== "" &&
                      currentJob.qualification.map((item, index) => {
                        return (
                          <li className="mb-[0.1rem]" key={index}>
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </article>

                <p className="flex items-center gap-2 mt-[1.5rem]">
                  <IoLocationSharp />
                  Jakarta Selatan
                </p>
              </div>
              {jobs.length > 0 && currentJob.name == "" && (
                <div className="mx-auto flex flex-col items-center">
                  <img src={worker} alt="" className="w-[50%] mt-[4rem]" />
                  <h3 className="font-semibold text-[1.2rem]">
                    Ada {amountJob} lowongan untuk kamu{" "}
                  </h3>
                  <p>Pilih lowongan untuk melihat lebih detil</p>
                </div>
              )}
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
                  {currentJob.name}
                </h2>

                <p className="text-[1rem]">{currentJob.company_name}</p>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Description
                  </h3>
                  <div
                    className="mb-[1.5rem]"
                    ref={descriptionDekstopRef}
                  ></div>
                </article>

                <article>
                  <h3 className="font-semibold mt-[1.5rem] mb-[0.7rem]">
                    Kualifikasi
                  </h3>

                  <ul className="list-disc pl-4">
                    {currentJob.qualification !== "" &&
                      currentJob.qualification.map((item, index) => {
                        return (
                          <li className="mb-[0.1rem]" key={index}>
                            {item}
                          </li>
                        );
                      })}
                  </ul>
                </article>
                <p className="flex items-center gap-2 mt-[1.5rem]">
                  <IoLocationSharp />
                  {currentJob.location}
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
