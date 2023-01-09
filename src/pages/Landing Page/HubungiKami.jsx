// Component
import HeaderLandingPage from "../../partials/HeaderLandingPage";
import Footer from "../../partials/landing page/footer";

import iconEmail from "../../images/Icon/Envelope.svg";
import iconPhone from "../../images/Icon/PhoneCall.svg";
import iconMap from "../../images/Icon/MapPinLine.svg";
import shape5 from "../../images/svg/shape5.svg";

const HubungiKami = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container mt-[2rem] ">
            <h2 className="text-[2rem]  font-semibold mb-[0.2rem] text-center">
              Hubungi Kami
            </h2>
            <div className="grid lg:grid-cols-2 shadow-xl  md:flex-row flex-col rounded-[1rem] mt-[2.5rem] lg:w-[58rem] w-full mx-auto">
              <div className="bg-secondary relative text-white px-[3rem] py-6 rounded-[1rem] md:rounded-tl-[1rem] md:rounded-bl-[1rem] overflow-hidden">
                <img
                  src={shape5}
                  alt=""
                  className="absolute right-[-3rem] top-[-2rem]"
                />

                <h2 className="text-[1.5rem] w-[14rem]">
                  Tetap Terhubung Dengan Kami.
                </h2>

                <div className="flex  md:items-center gap-6 mt-[3.5rem] mb-[1.5rem] md:flex-row flex-col">
                  <div className="sm:w-[5rem] sm:h-[5rem] w-[3.5rem] h-[3.5rem] bg-white bg-opacity-[8%] rounded-full flex items-center justify-center">
                    <img src={iconEmail} alt="" className="w-[32px]" />
                  </div>
                  <div className="w-[4rem]">
                    <h2 className="text-[1rem] font-medium text-white">
                      Email
                    </h2>
                    <p className="text-[1.1rem] ">informasi@smkkgb2.sch.id</p>
                  </div>
                </div>
                <div className="flex md:items-center gap-6 mt-[2rem] mb-[1.5rem] md:flex-row flex-col">
                  <div className="sm:w-[5rem] sm:h-[5rem] w-[3.5rem] h-[3.5rem] bg-white bg-opacity-[8%] rounded-full flex items-center justify-center">
                    <img src={iconPhone} alt="" className="w-[32px]" />
                  </div>
                  <div>
                    <h2 className="text-[1rem] font-medium text-white">
                      No Telepon
                    </h2>
                    <p className="text-[1.1rem]">+62 824 2384 23</p>
                  </div>
                </div>
              </div>
              <div className="bg-white px-8 py-8">
                <form action="">
                  <div className="flex flex-col gap-4 flex-wrap">
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="" className="text-[1.2rem]">
                        Nama
                      </label>
                      <input
                        type="text"
                        placeholder="nama kamu..."
                        className="focus:ring-0 focus:border-slate-400 border-slate-300 rounded-md w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <label htmlFor="" className="text-[1.2rem]">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="email kamu..."
                        className="focus:ring-0 focus:border-slate-400 border-slate-300 rounded-md w-full"
                      />
                    </div>
                  </div>
                  <label htmlFor="" className="block text-[1.2rem] mt-[1rem]">
                    Pesan
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Pesanmu..."
                    className="focus:ring-0 focus:border-slate-400 border-slate-300 rounded-md mt-[1rem] w-full"
                  />
                  <button className="px-5 h-[3rem] bg-secondary rounded-md text-white mt-[1.5rem] ml-auto">
                    Kirim Pesan
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HubungiKami;
