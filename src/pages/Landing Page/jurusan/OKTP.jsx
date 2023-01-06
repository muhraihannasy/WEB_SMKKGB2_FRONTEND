import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

const OKTP = () => {
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
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1665203427126-f1f2fa815738?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9mZmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
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
                Otomatisasi & Tata Kelola Perkatoran
              </h2>

              <p className="leading-relaxed mb-[1rem]">
                Kompetensi keahlian Otomatisasi dan Tata Kelola Perkantoran
                (OTKP) atau dulunya Administrasi Perkantoran (AP) merupakan
                salah salah satu jurusan di Sekolah Menengah Kejuruan (SMK)
                Padakembang yang memberikan bekal tentang berbagai informasi
                layanan dibidang administrasi baik secara pengetahuan,
                keterampilan, dan sikap dalam menyelesaikan pekerjaan-pekerjaan
                perusahaan atau kantor.
              </p>

              <p className="leading-relaxed">
                Jurusan OTKP mempelajari segala jenis kegiatan kantor. Mulai
                dari pembukuan, pengarsipan, hingga public relations. Mayoritas
                lulusannya bekerja di lingkungan perkantoran dengan peran
                diantaranya menjaga kelancaran operasional kantor sehari-hari
                termasuk bertindak sebagai perantara dari karyawan dan pimpinan
                perusahaan ataupun dengan pihak di luar kantor. Bagi para
                lulusan yang berminat di bidang seni bisa bekerja di berbagai
                galeri, gedung pameran dan teater, mengatur kelancaran
                operasional sehari-hari serta mengkoordinir acara-acara jika
                ada.
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
                  1. Resepsionis
                </h3>

                <p className="leading-relaxed">
                  Peluang kerja pertama yang bisa dilakukan oleh lulusan
                  administrasi perkantoran adalah menjadi resepsionis, terlebih
                  bagi Kamu yang memiliki kemampuan berkomunikasi yang baik.
                  Kamu bisa menjadi resepsionis hotel, perusahaan dan lain- lain
                  karena setiap perusahaan yang bergerak di bidang apapun pasti
                  akan membutuhkan posisi resepsionis untuk menjadi bagian front
                  office perusahaan mereka.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  2. Sekretaris
                </h3>

                <p className="leading-relaxed">
                  Prospek kerja berikutnya yang bisa dilakukan oleh jurusan
                  administrasi perkantoran adalah menjadi seorang sekretaris.
                  Tugas utama seorang sekretaris ialah untuk memfilter informasi
                  yang berkaitan dengan bisnis perusahaan bagi pimpinan serta
                  menjadi media perekam, penyimpan, dan pengingat kegiatan
                  atasan di perusahaan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  3. Staff Administrasi
                </h3>

                <p className="leading-relaxed">
                  Peluang kerja berikutnya yang bisa Kamu lakukan sebagai
                  lulusan administrasi perkantoran adalah menjadi staff
                  administrasi. Tugas utama seorang staff administrasi adalah
                  untuk melakukan berbagai pelayanan kantor yang berkaitan
                  dengan administrasi untuk mendukung kelancaran operasional
                  perusahaan. 
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  4. Asisten Sekretaris
                </h3>

                <p className="leading-relaxed">
                  Untuk peluang atau prospek kerja Administrasi Perkantoran
                  berikutnya adalah menjadi asisten sekretaris. Tidak hanya
                  dapat menjadi sekretaris, Kamu juga bisa menjadi asisten
                  sekretaris. Sebagai seorang asisten sekretaris, Kamu akan
                  memiliki tugas untuk menerima berbagai panggilan telepon dan
                  jadwal pertemuan pimpinan serta mengatur jadwal pertemuan,
                  konferensi, hingga pemesanan perjalanan untuk para staff
                  kantor.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  5.Staff Personalia
                </h3>

                <p className="leading-relaxed">
                  Peluang kerja berikutnya yang dapat Kamu lakukan sebagai
                  lulusan administrasi perkantoran adalah menjadi staff
                  personalia. Jabatan staff personalia berbeda dengan HRD. Staff
                  personalia lebih banyak bertugas dan bertanggung jawab untuk
                  hal-hal seperti database karyawan, payroll, atau pembayaran
                  pembayaran lainnya. Staff personalia juga bertugas untuk
                  mengelola hal-hal seperti absensi karyawan, pinjaman karyawan,
                  atau pencatatan cuti tahunan setiap karyawan.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-[1rem] mt-[1.5rem] mb-[0.5rem]">
                  6. Event Organizer
                </h3>

                <p className="leading-relaxed">
                  Peluang kerja selanjutnya yang bisa Kamu lakukan sebagai
                  lulusan administrasi perkantoran adalah menjadi event
                  organizer. Saat ini industry event sedang berkembang dengan
                  pesat seiring dengan kebutuhan hiburan para masyarakat urban.
                  Hal ini terlihat dari banyaknya event-event atau kegiatan yang
                  digelar di berbagai lokasi hampir setiap akhir pekan. Untuk
                  membuat acara lancar dijalankan maka administrasi perkantoran
                  sangat diperlukan dalam hal-hal yang berkaitan dengan
                  administrasi.
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

export default OKTP;
