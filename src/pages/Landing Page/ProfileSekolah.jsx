// Component
import HeaderLandingPage from "../../partials/HeaderLandingPage";
import Footer from "../../partials/landing page/footer";

// Images
import bg from "../../images/profile sekolah/bg.jpg";
import image1 from "../../images/profile sekolah/image1.jpg";
import logo2 from "../../images/logo2.png";
import shape1 from "../../images/svg/shape3.svg";
import human1 from "../../images/profile sekolah/human1.jpg";

const ProfileSekolah = () => {
  return (
    <>
      <HeaderLandingPage />
      <main>
        <section className="px-6">
          <div className="container relative md:h-[44rem] h-[34rem] max-[498px]:h-[30rem] mt-[2rem] rounded-2xl overflow-hidden z-[9] bg-cover">
            <img
              src={logo2}
              alt=""
              className="w-[150px] mx-auto mt-[6rem] object-cover"
            />
            <h2 className="text-center md:text-[2.5rem] text-[1.7rem] mx-auto mt-[4rem] font-semibold text-white  md:w-[25rem] max-[498px]:w-full sm:w-[20rem]">
              Profile SMK Karya Guna Bhakti 2 Kota Bekasi
            </h2>
            <img
              src={bg}
              alt=""
              className="absolute  left-0 top-0 w-full h-full object-cover z-[-1]"
            />
          </div>
        </section>

        <section>
          <div className="container grid lg:grid-cols-2 lg:gap-0 gap-10">
            <div className="pt-[7rem]">
              <h2 className="text-[1.8rem] sm:w-[26rem] font-bold mb-[1.5rem]">
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

            <div className="flex lg:justify-end lg:items-center justify-center">
              <img src={image1} alt="" className="md:w-[80%]" />
            </div>
          </div>
        </section>

        <section class="px-4">
          <div className="container mt-[5rem] bg-secondary rounded-[1rem] pt-[4rem] pb-[6rem] text-white">
            <h2 className="text-[1.8rem] font-bold mb-[1.5rem] text-center">
              Sarana & Prasarana
            </h2>

            <div class="flex items-center justify-center flex-wrap flex-row mx-auto max-w-[1000px] gap-[3rem] mt-[3rem]">
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Ruang Kelas Full AC</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Sport Center</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Area Parkir</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Ruang Praktik Full AC</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>UKS & Kantin </h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>CCTV</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Perpustakaan Full AC</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Unit Produksi</h2>
              </div>
              <div className="flex gap-[1rem] w-max">
                <img src={shape1} alt="" />
                <h2>Free Wifi</h2>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-[6rem]">
            <h2 className="text-[1.8rem] sm:w-[405px] mx-auto font-bold mb-[4rem] text-center">
              Pimpinan SMK Karya Guna Bhakti 2 Kota Bekasi
            </h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-content-center gap-[1.6rem]">
              <div className="mb-[1.5rem]">
                <img src={human1} alt="" className="rounded-[0.5rem]" />
                <div className="mt-[1rem]">
                  <h2 className="text-[18px] font-semibold">
                    Yulia Venny Susanti, SE,. MM
                  </h2>
                  <p className="text-[16px]">Kepala Sekolah</p>
                </div>
              </div>
              <div className="mb-[1.5rem]">
                <img src={human1} alt="" className="rounded-[0.5rem]" />
                <div className="mt-[1rem]">
                  <h2 className="text-[18px] font-semibold">
                    Yulia Venny Susanti, SE,. MM
                  </h2>
                  <p className="text-[16px]">Kepala Sekolah</p>
                </div>
              </div>
              <div className="mb-[1.5rem]">
                <img src={human1} alt="" className="rounded-[0.5rem]" />
                <div className="mt-[1rem]">
                  <h2 className="text-[18px] font-semibold">
                    Yulia Venny Susanti, SE,. MM
                  </h2>
                  <p className="text-[16px]">Kepala Sekolah</p>
                </div>
              </div>
              <div className="mb-[1.5rem]">
                <img src={human1} alt="" className="rounded-[0.5rem]" />
                <div className="mt-[1rem]">
                  <h2 className="text-[18px] font-semibold">
                    Yulia Venny Susanti, SE,. MM
                  </h2>
                  <p className="text-[16px]">Kepala Sekolah</p>
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

export default ProfileSekolah;
