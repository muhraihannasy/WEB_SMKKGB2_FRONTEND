import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

const AKL = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <main>
          <section>
            <div className="container mt-[2rem]">
              <div className="flex md:flex-row flex-col gap-2">
                <div className="md:h-[30rem]">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YWNjb3VudGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWNjb3VudGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src="https://plus.unsplash.com/premium_photo-1668383208180-b2fe8c2f6204?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <h2 className="sm:text-[2rem] text-[1.5rem] mt-[3rem] mb-[1rem] mx-auto lg:mb-[1rem] font-semibold">
                Akutansi & Keuangan Lembaga
              </h2>

              <p className="leading-relaxed mb-[1rem]">
                urusan akuntansi adalah jurusan yang banyak peluang kerja,
                mempelajari tentang pencatatan dan penyusunan laporan keuangan.
                Di jurusan ini kamu akan mempelajari tentang bagaimana
                pencatatan dan pengelolaan keuangan berpengaruh terhadap suatu
                usaha atau bisnis. Kamu akan diajarkan bagaimana mencatat dan
                menyusun laporan keuangan, menganalisis laporan keuangan,
                menilai kelayakan bisnis atau usaha, hingga melihat potensi dan
                prospek keuangan bisnis atau usaha tersebut ke depannya. 
              </p>

              <h2 className="font-semibold text-[1.3rem] mt-[1.5rem] mb-[0.5rem]">
                Propek Kerja
              </h2>

              <p>
                Berikut adalah pekerjaan pekerjaan yang sesuai dengan jurusan
                ini, yaitu jurusan TKJ (Teknik Komputer dan Jaringan) :
              </p>

              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  1. Akuntan perusahaan
                </h3>

                <p className="leading-relaxed">
                  Akuntan perusahaan bertugas untuk membuat laporan keuangan di
                  sebuah perusahaan. Tugas ini dapat kamu terima dapat beberapa
                  jenis profesi seperti akuntan publik, asisten akuntan, akuntan
                  manajer, dan sejenisnya. Meskipun deskripsi kerja akan
                  berbeda-beda tergantung jabatan, tetapi secara umum kamu akan
                  mengerjakan hal yang berkaitan dengan laporan keuangan.
                  Akuntan adalah prospek kerja jurusan akuntansi yang paling
                  utama dan umumnya terbuka untuk fresh graduated. 
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  2. Internal Auditor
                </h3>

                <p className="leading-relaxed">
                  Internal auditor diperlukan untuk memastikan laporan keuangan
                  sebuah perusahaan bersih dan bebas penyimpangan. Tugas utama
                  dari internal auditor adalah memeriksa dan mengevaluasi
                  laporan keuangan serta mengidentifikasi ketidaksesuaian antara
                  dara dan bukti. Jika kamu memilih untuk menjadi internal
                  auditor, kejujuran adalah suatu hal yang harus kamu miliki. 
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  3. Perencana Keuangan
                </h3>

                <p className="leading-relaxed">
                  Untuk dapat menjadi seorang financial planner atau perencana
                  keuangan, kamu harus mengambil sertifikasi khusus yaitu
                  Certified Financial Planner (CFP). Sertifikasi tersebut akan
                  mempersiapkan kamu untuk menjadi perencana keuangan mulai dari
                  paling dasar, hingga penghasilan tambahan dari properti.
                  Prospek ini semakin memiliki peluang karena seiring dengan
                  berkembangnya perekonomian, mulai banyak orang sadar akan
                  pentingnya perencanaan keuangan. 
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  4. Penganalisa Keuangan
                </h3>

                <p className="leading-relaxed">
                  Prospek kerja jurusan akuntansi yang selanjutnya adalah
                  penganalisa keuangan. Biasanya, penganalisa keuangan
                  dipekerjakan oleh badan maupun perorangan untuk mertimbangkan
                  suatu pengambilan keputusan atas suatu kebijakan. Sama seperti
                  untuk menjadi perencana keuangan, penganalisa keuangan juga
                  membutuhkan sertifikasi khusus yang harus yang harus didapat
                  yaitu Chartered Financial Analyst (CFA). Hanya saja, kamu
                  tidak dapat secara langsung untuk menjadi analis keuangan,
                  karena salah satu syarat mengambil CFA adalah pengalaman kerja
                  minimal 4 tahun di bidang keuangan. 
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  5. Pegawai lembaga keuangan Pemerintah
                </h3>

                <p className="leading-relaxed">
                  Pemerintah Indonesia memiliki berbagai lembaga keuangan
                  seperti Bank Indonesia (BI) dan Otoritas Jasa Keuangan (OJK).
                  Kamu dapat memasukkan lamaran apabila lowongannya dibuka,
                  hanya saja persaingannya akan sangat ketat. Bekerja di
                  perusahaan pemerinta mungkin dapat menjadi suatu kebanggaan.
                  Gaji yang ditawarkan untuk staff di kedua lembaga di atas akan
                  jauh di atas rata-rata akuntan lainnya. Selain itu, posisi
                  Pegawai Negeri Sipil juga banyak tersedia untuk lulusan
                  akuntansi. 
                </p>
              </div>
            </div>
          </section>
        </main>
      </main>

      <Footer />
    </>
  );
};

export default AKL;
