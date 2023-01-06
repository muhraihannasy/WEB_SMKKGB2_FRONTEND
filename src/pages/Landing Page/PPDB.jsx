// Component
import HeaderLandingPage from "../../partials/HeaderLandingPage";
import Footer from "../../partials/landing page/footer";

// Images
import bg from "../../images/profile sekolah/bg.jpg";
import image1 from "../../images/profile sekolah/image1.jpg";
import logo2 from "../../images/logo2.png";
import shape1 from "../../images/svg/shape3.svg";
import human1 from "../../images/profile sekolah/human1.jpg";

const PPDBLanding = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container mt-[2rem]">
            <h2 className="text-[2rem]  font-semibold mb-[0.2rem]">PPDB</h2>
            <div>
              <h2 className="text-[1rem] font-semibold mb-[0.5rem]">
                Alur PPDB Online
              </h2>

              <div className="mb-[1.5rem]">
                <h3 className="mb-[0.2rem]">Step 1 : </h3>
                <ul className="list-decimal pl-[0.8rem] flex flex-col gap-1">
                  <li>Buat Akun PPDB</li>
                  <li>Login Menggunakan Akun Yang Sudah dibuat</li>
                  <li>
                    Setelah login, otomatis kamu masuk ke dashboard. Dan
                    mendapatkan Kode pembayaran.
                  </li>
                  <li>
                    Lalu, Kamu harus melakukan pembayaran di Gedung A atau
                    Gedung B SMK Karya Guna Bhakti 2 Kota Bekasi dan Tunjukan
                    kode pembayaran yang kamu punya.
                  </li>
                  <li>
                    Setelah pembayaran selesai. Otomatis kamu dapat mengisi
                    formulir pendaftaran
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-[0.2rem]">Step 2 : </h3>
                <ul className="list-decimal pl-[0.8rem] flex flex-col gap-1">
                  <li>Mengisi Formulir Pendaftaran (isi dengan teliti)</li>
                  <li>
                    Setelah Formulir mengisi formulir. Tunggu sampai admin
                    mengecek data diri kamu.
                  </li>
                  <li>Comming soon..</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PPDBLanding;
