import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

const TKJ = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container mt-[2rem]">
            <div className="flex md:flex-row flex-col gap-2">
              <div className="md:h-[30rem]">
                <img
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmV0d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <img
                  src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV0d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmV0d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>

            <h2 className="sm:text-[2rem] text-[1.5rem] mt-[3rem] mb-[1rem] mx-auto lg:mb-[1rem] font-semibold">
              Teknik Komputer Jaringan
            </h2>

            <p className="leading-relaxed">
              TKJ (Teknik Komputer dan Jaringan) adalah ilmu berbasis Teknologi
              Informasi dan Komunikasi terkait kemampuan algoritma, dan
              pemrograman komputer, perakitan komputer, perakitan jaringan
              komputer, dan pengoperasian perangkat lunak, dan internet. Teknik
              komputer, dan jaringan juga membutuhkan pemahaman di bidang teknik
              listrik, dan ilmu komputer sehingga mampu mengembangkan, dan
              mengintegrasikan perangkat lunak, dan perangkat keras.
            </p>

            <h2 className="font-semibold text-[1.3rem] mt-[1.5rem] mb-[0.5rem]">
              Propek Kerja
            </h2>

            <p>
              Berikut adalah pekerjaan pekerjaan yang sesuai dengan jurusan ini,
              yaitu jurusan TKJ (Teknik Komputer dan Jaringan) :
            </p>

            <div>
              <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                1. Teknisi Komputer
              </h3>

              <p className="leading-relaxed">
                Pembelajaran di jurusan TKJ membuat kamu menjadi ahli dibidang
                komputer sehingga teknisi komputer bisa menjadi salah satu
                pilihan karir masa depanmu. Teknisi komputer saat ini sangat
                dibutuhkan karena banyak perusahaan atau bahkan UMKM yang sedang
                melakukan transformasi digital pada bisnis mereka. Karenanya,
                bidang dunia industri diprediksi akan membutuhkan banyak teknisi
                komputer untuk melakukan maintenance komputer perusahaan
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                2. Teknisi Jaringan
              </h3>

              <p className="leading-relaxed">
                Jurusan TKJ tidak hanya belajar teori perangkat keras komputer,
                tetapi juga belajar cara membangun jaringan LAN, WAN, WiFi, atau
                instalasi jaringan lainnya. Di era digital seperti saat ini,
                setiap perusahaan pasti menggunakan jaringan internet sebagai
                salah satu unsur penting dalam operasional kerja mereka.
                Karenanya, teknisi jaringan merupakan peluang karir bagi lulusan
                SMK jurusan TKJ.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                3. Administrasi Server
              </h3>

              <p className="leading-relaxed">
                Administrasi Server bertugas untuk mengontrol, mengelola dan
                mengamankan akses terhadap jaringan dan sumber daya dalam
                komputer server. Sebagai lulusan SMK jurusan TKJ,  melakukan
                maintenance dan administrasi server bukanlah hal yang tidak
                tidak asing lagi. Lulusan SMK sudah terbiasa belajar membangun
                serta mengkonfigurasi server dengan berbagai Sistem Operasi
                sehingga ketika lulus siap menjadi Administrator server yang
                dapat mengelola sistem jaringan skala kecil maupun menengah.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                4. Programmer
              </h3>

              <p className="leading-relaxed">
                Perkembangan teknologi telah memicu tumbuhnya banyak sekali
                perusahaan startup di Indonesia. Hal tersebut membuat kebutuhan
                akan profesi programmer semakin meningkat. Jika bekerja sebagai
                programmer, kamu akan menulis kode yang dapat digunakan untuk
                menciptakan sistem aplikasi atau mengembangkan aplikasi. Lulusan
                SMK TKJ yang sudah mengenal dasar-dasar bahasa pemrograman
                menjadi bekal untuk dapat berkarir sebagai programmer.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                5.Web Developer
              </h3>

              <p className="leading-relaxed">
                Internet saat ini telah menjadi kebutuhan seluruh masyarakat
                Indonesia dan dunia. Masyarakat cenderung lebih suka untuk
                mencari informasi / melakukan berbagai hal langsung dari
                internet ketimbang secara langsung. Hal ini dimanfaatkan oleh
                banyak perusahaan untuk meningkatkan citra mereka di Internet
                dalam bentuk website yang berisi informasi produk, jasa, tempat
                liburan dan lain sebagainya.Hal ini membuat kebutuhan akan web
                developer untuk membangun website mereka. Lulusan SMK dapat
                menjadi bagian dari profesi ini dengan membuka jasa freelance
                web developer ataupun bekerja di perusahaan. 
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                6. IT Support
              </h3>

              <p className="leading-relaxed">
                Keahlian di bidang IT saat ini banyak dibutuhkan di setiap
                perusahaan. Salah satunya yaitu profesi IT Support. IT support
                merupakan seorang teknisi di sebuah perusahaan yang memiliki
                tugas untuk melakukan instalasi, evaluasi dan peningkatan
                terhadap software, komputer dan pengembangan sistem jaringan.
                Kamu tidak perlu kuliah untuk mendapatkan pekerjaan ini,
                beberapa perusahaan lebih melihat keahlian dibandingkan gelar.
                Lulusan SMK TKJ yang sudah kenal dengan disiplin ilmu ini
                memiliki peluang besar untuk menjadi IT Support.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TKJ;
