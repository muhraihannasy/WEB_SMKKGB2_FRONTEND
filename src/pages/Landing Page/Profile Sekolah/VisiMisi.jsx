// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

// Images
import image3 from "../../../images/home/image3.png";
import image1 from "../../../images/home/blog1.jpg";
import talent from "../../../images/profile sekolah/talent.png";
import gedungB from "../../../images/profile sekolah/gedungb.jpg";

const VisiMisi = () => {
  return (
    <>
      <HeaderLandingPage />
      <main>
        {/* <section>
          <div className="container grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="flex items-center lg:justify-start justify-center">
              <img src={image3} alt="" className="w-[85%]" />
            </div>
            <div>
              <div className="visi">
                <h3 className="font-bold text-[2rem] mb-[1rem]">Visi</h3>

                <p className="leading-[154.4%]">
                  Menciptakan tenaga kerja tingkat menengah untuk memenuhi
                  kebutuhan pembangunan Nasional, baik saat ini maupun di masa
                  mendatang sejalan dengan kecenderungan Globalisasi yang
                  bernuansakan IMTAK dan IPTEK.
                </p>
              </div>
              <div className="misi mt-[2rem]">
                <h3 className="font-bold text-[2rem] mb-[1rem]">Misi</h3>

                <div className="flex items-start gap-4 mb-[2rem]">
                  <h4 className="flex items-center flex-2 justify-center bg-third font-semibold text-white  rounded-full w-[2rem] h-[2rem]">
                    1
                  </h4>
                  <p className="leading-[154.4%] flex-1">
                    Menghasilkan sumber daya manusia yang terampil dan
                    profesional yang dapat menjadi faktor unggulan dalam
                    berbagai sektor pembangunan.
                  </p>
                </div>

                <div className="flex items-start gap-4 mb-[2rem]">
                  <h4 className="flex items-center flex-2 justify-center bg-third font-semibold text-white  rounded-full w-[2rem] h-[2rem]">
                    2
                  </h4>
                  <p className="leading-[154.4%] flex-1">
                    Mengubah peserta didik dari status beban menjadi aset
                    pembangunan yang produktif untuk memenuhi kebutuhan
                    industrialisasi khususnya dan tuntutan pembangunan pada
                    umumnya.
                  </p>
                </div>
                <div className="flex items-start gap-4 mb-[2rem]">
                  <h4 className="flex items-center flex-2 justify-center bg-third font-semibold text-white  rounded-full w-[2rem] h-[2rem]">
                    3
                  </h4>
                  <p className="leading-[154.4%] flex-1">
                    Membekali peserta didik dengan kemampuan untuk dapat
                    mengembangkan dirinya secara berkelanjutan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section>
          <section className="px-6">
            <div className="container relative md:h-[44rem] h-[34rem] max-[498px]:h-[30rem] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-secondary before:opacity-[90%] mt-[2rem] rounded-2xl overflow-hidden before:z-[-1] z-[9]">
              <h2 className="text-center md:text-[2.5rem] text-[1.7rem] mx-auto mt-[4rem] font-semibold text-white  md:w-[25rem] max-[498px]:w-full w-[20rem]">
                Profile SMK Karya Guna Bhakti 2 Kota Bekasi
              </h2>
              <div className="md:w-[40rem] max-[498px]:w-[25rem] w-[32rem] absolute  md:left-[45%] left-[40%] right-[50%]  translate-x-[-50%]   bottom-0">
                <img src={talent} alt="" className="object-cover w-full" />
              </div>
            </div>
          </section>
          <div className="container grid lg:grid-cols-2 mt-[5rem] lg:gap-0 gap-10">
            <div>
              <h2 className="text-[1.8rem] w-[25rem] font-bold mb-[1.5rem]">
                Raih Tujuan Mu Bersama SMK Karya Guna Bhakti 2 Kota Bekasi
              </h2>

              <div className="visi">
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">Visi</h3>

                <p className="leading-[154.4%]">
                  Menciptakan tenaga kerja tingkat menengah untuk memenuhi
                  kebutuhan pembangunan Nasional, baik saat ini maupun di masa
                  mendatang sejalan dengan kecenderungan Globalisasi yang
                  bernuansakan IMTAK dan IPTEK.
                </p>
              </div>
              <div className="misi mt-[2rem]">
                <h3 className="font-bold text-[1.5rem] mb-[1rem]">Misi</h3>

                <div className="flex items-start gap-4 mb-[2rem]">
                  <h4 className="flex items-center flex-2 justify-center bg-third font-semibold text-white  text-[0.9rem] rounded-full w-[1.8rem] h-[1.8rem]">
                    1
                  </h4>
                  <p className="leading-[154.4%] flex-1">
                    Menghasilkan sumber daya manusia yang terampil dan
                    profesional yang dapat menjadi faktor unggulan dalam
                    berbagai sektor pembangunan.
                  </p>
                </div>

                <div className="flex items-start gap-4 mb-[2rem]">
                  <h4 className="flex items-center flex-2 justify-center bg-third font-semibold text-white  text-[0.9rem] rounded-full w-[1.8rem] h-[1.8rem]">
                    2
                  </h4>
                  <p className="leading-[154.4%] flex-1">
                    Mengubah peserta didik dari status beban menjadi aset
                    pembangunan yang produktif untuk memenuhi kebutuhan
                    industrialisasi khususnya dan tuntutan pembangunan pada
                    umumnya.
                  </p>
                </div>
                <div className="flex items-start gap-4 mb-[2rem]">
                  <h4 className="flex items-center flex-2 justify-center bg-third font-semibold text-white  text-[0.9rem] rounded-full w-[1.8rem] h-[1.8rem]">
                    3
                  </h4>
                  <p className="leading-[154.4%] flex-1">
                    Membekali peserta didik dengan kemampuan untuk dapat
                    mengembangkan dirinya secara berkelanjutan.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img src={image3} alt="" className="w-[80%] mx-auto" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default VisiMisi;
