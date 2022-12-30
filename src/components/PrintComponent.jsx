import React, { useRef } from "react";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";
import { data } from "autoprefixer";
// import "/example/index.css";

const tabStyle = {
  height: 500,
  maxHeight: 300,
  overflow: "scroll",
  //backgroundColor: "blue"
};

const ComponentToPrint = ({ propsRef, data }) => {
  const {
    amount_siblings,
    class_pick,
    email,
    extracurricular,
    father_birth,
    father_education,
    father_job,
    father_name,
    father_nik,
    father_salary,
    father_special_needs,
    from_school,
    fullname,
    gender,
    guardian_birth,
    guardian_education,
    guardian_job,
    guardian_name,
    guardian_nik,
    guardian_salary,
    guardian_special_needs,
    height,
    kip,
    kps,
    mother_birth,
    mother_education,
    mother_job,
    mother_name,
    mother_nik,
    mother_salary,
    mother_special_needs,
    nisn,
    nik,
    no_certificate_registration,
    no_examinee,
    kks,
    no_serial_diploma,
    no_serial_skhus,
    order_family,
    payment_id,
    phone,
    photo,
    religion,
    residence,
    residence_distance,
    status,
    address,
    student_special_needs,
    time_to_school,
    transport,
    type_registration,
    uniform,
    weight,
    birth,
    kartu_keluarga_image,
    nik_image,
    nisn_image,
  } = data?.data;

  console.log(data?.data);

  const birthTemp = birth?.split("|") || [];
  const addressTemp = address?.split("|") || [];
  const timeToSchoolTemp = time_to_school?.split("|") || [];
  const classPickTemp = class_pick?.split("|") || [];
  const extracurricularTemp = extracurricular?.split("|") || [];
  const uniformTemp = uniform?.split("|") || [];
  const kipTemp = kip?.split("|") || [];
  const kpsTemp = kps?.split("|") || [];
  const kksTemp = kks?.split("|") || [];
  const tanggal_lahir = birthTemp[0];
  const tempat_lahir = birthTemp[1];
  const alamat = addressTemp[0];
  const rt = addressTemp[1];
  const rw = addressTemp[2];
  const kelurahan = addressTemp[3];
  const kecamatan = addressTemp[4];
  const kodepos = addressTemp[5];
  const lintang = addressTemp[6];
  const bujur = addressTemp[7];
  const hours = timeToSchoolTemp[0];
  const minute = timeToSchoolTemp[1];
  const receivedKip = kipTemp[0];
  const nameKip = kipTemp[1];
  const noKip = kipTemp[2];
  const reasonKip = kipTemp[3];
  const photoKip = kipTemp[4];
  const receivedKps = kpsTemp[0];
  const noKps = kpsTemp[1];
  const photoKps = kpsTemp[2];
  const komp1 = classPickTemp[0];
  const komp2 = classPickTemp[1];
  const extra1 = extracurricularTemp[0];
  const extra2 = extracurricularTemp[1];
  const uniform1 = uniformTemp[0];
  const uniform2 = uniformTemp[1];
  const uniform3 = uniformTemp[2];
  const uniform4 = uniformTemp[3];
  const noKKS = kksTemp[0];
  const photoKKS = kksTemp[1];

  return (
    <div style={tabStyle}>
      <div ref={propsRef} className="grid grid-cols-1 gap-1 px-8">
        <div className="h-[140rem]  printElement1">
          <div className="printElement1 text-center mt-[1.5rem] mb-[1.5rem]">
            <h1 className="font-semibold text-[1.3rem]">
              Formulir Pendaftaran
              <br />
              SMK Karya Guna Bhakti 2 Kota Bekasi
            </h1>
          </div>
          <div className="printElement1 mb-[4rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem]">
              Data Calon Siswa
            </h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama </span>
                <span className="text-left whitespace-nowrap ">
                  : {fullname}{" "}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jenis Kelamin </span>
                <span className="text-left whitespace-nowrap ">: {gender}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">NIK </span>
                <span className="text-left whitespace-nowrap ">: {nik}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">NISN </span>
                <span className="text-left whitespace-nowrap ">: {nisn}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No Ijazah </span>
                <span className="text-left whitespace-nowrap ">
                  : {no_serial_diploma}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No SKHUS </span>
                <span className="text-left whitespace-nowrap ">
                  : {no_serial_skhus}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No Ujian </span>
                <span className="text-left whitespace-nowrap ">
                  : {no_examinee}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Anak Ke </span>
                <span className="text-left whitespace-nowrap ">
                  : {order_family}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tempat Lahir </span>
                <span className="text-left whitespace-nowrap ">
                  : {tempat_lahir}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tanggal Lahir </span>
                <span className="text-left whitespace-nowrap ">
                  : {tanggal_lahir}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No. Registrasi Akta Lahir </span>
                <span className="text-left whitespace-nowrap ">
                  : {no_certificate_registration}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Agama & Kepercayaan </span>
                <span className="text-left whitespace-nowrap ">
                  : {religion}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Berkebutuhan Khusus </span>
                <span className="text-left whitespace-nowrap ">
                  : {student_special_needs}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Alamat Jalan </span>
                <span className="text-left whitespace-nowrap ">: {alamat}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">RT </span>
                <span className="text-left whitespace-nowrap ">: {rt}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">RW </span>
                <span className="text-left whitespace-nowrap ">: {rw}</span>
              </li>

              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama Kelurahan </span>
                <span className="text-left whitespace-nowrap ">
                  : {kelurahan}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Kecamatan </span>
                <span className="text-left whitespace-nowrap ">
                  : {kecamatan}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Kode Pos </span>
                <span className="text-left whitespace-nowrap ">
                  : {kodepos}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Lintang </span>
                <span className="text-left whitespace-nowrap ">
                  : {lintang}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Bujur </span>
                <span className="text-left whitespace-nowrap ">: {bujur}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tempat Tinggal </span>
                <span className="text-left whitespace-nowrap ">
                  : {residence}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Asal Sekolah</span>
                <span className="text-left whitespace-nowrap ">
                  : {from_school}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Kendaraan</span>
                <span className="text-left whitespace-nowrap ">
                  : {transport}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No KKS</span>
                <span className="text-left whitespace-nowrap ">: {noKKS}</span>
              </li>

              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Penerima KIP</span>
                <span className="text-left whitespace-nowrap ">
                  : {receivedKip}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Alasan Layak KIP</span>
                <span className="text-left whitespace-nowrap ">
                  : {reasonKip}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No KIP</span>
                <span className="text-left whitespace-nowrap ">: {noKip}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Penerima KPS</span>
                <span className="text-left whitespace-nowrap ">
                  : {receivedKps}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">No KPS</span>
                <span className="text-left whitespace-nowrap ">: {noKps}</span>
              </li>
            </ul>
          </div>
          <div className="printElement1 mb-[1rem] mt-[10rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Data Ayah</h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama Ayah </span>
                <span className="text-left whitespace-nowrap ">
                  : {father_name}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">NIK Ayah </span>
                <span className="text-left whitespace-nowrap ">
                  : {father_nik}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pekerjaan</span>
                <span className="text-left whitespace-nowrap ">
                  : {father_job}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pendidikan</span>
                <span className="text-left whitespace-nowrap ">
                  : {father_education}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pendapatan</span>
                <span className="text-left whitespace-nowrap ">
                  : {father_salary}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Berhebutukan Khusus </span>
                <span className="text-left whitespace-nowrap ">
                  : {father_special_needs}
                </span>
              </li>
            </ul>
          </div>
          <div className="printElement1 mb-[1rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Data Ibu</h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama Ibu </span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_name}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">NIK Ibu </span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_nik}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pekerjaan</span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_job}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pendidikan</span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_education}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pendapatan</span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_salary}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Berhebutukan Khusus </span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_special_needs}
                </span>
              </li>
            </ul>
          </div>
          <div className="printElement1 mb-[1rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Data Wali</h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama Wali </span>
                <span className="text-left whitespace-nowrap ">
                  : {guardian_name}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">NIK Ayah </span>
                <span className="text-left whitespace-nowrap ">
                  : {guardian_nik}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pekerjaan</span>
                <span className="text-left whitespace-nowrap ">
                  : {guardian_job}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pendidikan</span>
                <span className="text-left whitespace-nowrap ">
                  : {guardian_education}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Pendapatan</span>
                <span className="text-left whitespace-nowrap ">
                  : {guardian_salary}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Berhebutukan Khusus </span>
                <span className="text-left whitespace-nowrap ">
                  : {guardian_special_needs}
                </span>
              </li>
            </ul>
          </div>

          <div className="printElement1 mb-[1rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">
              Data Priodic Siswa
            </h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tinggi </span>
                <span className="text-left whitespace-nowrap ">
                  : {height} CM
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Berat </span>
                <span className="text-left whitespace-nowrap ">
                  : {weight} KG
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jarak Ke Sekolah</span>
                <span className="text-left whitespace-nowrap ">
                  : {residence_distance}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Waktu Ke Sekolah </span>
                <span className="text-left whitespace-nowrap ">
                  : {hours} | {minute}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jumlah Saudara Kandung </span>
                <span className="text-left whitespace-nowrap ">
                  : {amount_siblings}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-max printElement1">
          <div className="printElement1 mt-[6rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">
              Data Beasiswa
            </h2>
            {data?.scholarship.map((item, index) => {
              return (
                <ul className="text-left flex flex-col gap-1 mb-[1rem]">
                  <li className="font-semibold">Beasiswa {index + 1}</li>

                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Jenis Beasiswa </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.type ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Mulai Tahun </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.year_start_at ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Selesai 2</span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.year_finish_at ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Keterangan </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.descriptions ?? "-"}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="printElement1 mb-[1rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">
              Data Prestasi
            </h2>
            {data?.achievement.map((item, index) => {
              return (
                <ul className="text-left flex flex-col gap-1 mb-[1rem]">
                  <li className="font-semibold">Prestasi {index + 1}</li>

                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Nama Prestasi </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.achievement_name ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Jenis Prestasi </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.type ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Tingkat </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.level ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Tahun </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.year ?? "-"}
                    </span>
                  </li>
                  <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                    <span className="">Penyelenggara </span>
                    <span className="text-left whitespace-nowrap ">
                      : {item.organizer_by ?? "-"}
                    </span>
                  </li>
                </ul>
              );
            })}
          </div>
          <div className="printElement1 mb-[1rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">
              Data Registrasi
            </h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jenis Pendaftaran </span>
                <span className="text-left whitespace-nowrap ">
                  : {type_registration}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jurusan 1 </span>
                <span className="text-left whitespace-nowrap ">: {komp1}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jurusan 2</span>
                <span className="text-left whitespace-nowrap ">: {komp2}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Extrakurikuler 1</span>
                <span className="text-left whitespace-nowrap ">: {extra1}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Extrakurikuler 2</span>
                <span className="text-left whitespace-nowrap ">: {extra2}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Baju Olahraga </span>
                <span className="text-left whitespace-nowrap ">
                  : {uniform1}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Baju Wear Pack </span>
                <span className="text-left whitespace-nowrap ">
                  : {uniform2}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Baju Kotak-Kotak </span>
                <span className="text-left whitespace-nowrap ">
                  : {uniform3}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Jaz Alamamater</span>
                <span className="text-left whitespace-nowrap ">
                  : {uniform4}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="printElement1 mb-[1rem] mt-[75rem]">
          <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Photo Berkas</h2>
          <ul className="text-left grid grid-cols-2 gap-5">
            <li className="w-[25rem] ">
              <span className="block mb-[1rem]">Photo Nisn </span>
              <img src={nisn_image} alt="" className="w-[7rem]" />
            </li>
            <li className="w-[25rem] ">
              <span className="block mb-[1rem]">Photo Kartu Keluarga </span>
              <img src={kartu_keluarga_image} alt="" className="w-[7rem]" />
            </li>
            <li className="w-[25rem] ">
              <span className="block mb-[1rem]">Photo KIP </span>
              {photoKip == "" || photoKip == "-" ? (
                "Tidak Ada"
              ) : (
                <img src={photoKip} alt="" className="w-[7rem]" />
              )}
              <img src={photoKip} alt="" className="w-[7rem]" />
            </li>
            <li className="w-[25rem] ">
              <span className="block mb-[1rem]">Photo KPS </span>
              {photoKps == "" ? (
                "Tidak Ada"
              ) : (
                <img src={photoKps} alt="" className="w-[7rem]" />
              )}
            </li>
            <li className="w-[25rem] ">
              <span className="block mb-[1rem]">Photo KKS </span>
              {photoKKS == "-" ? (
                "Tidak Ada"
              ) : (
                <img src={photoKKS} alt="" className="w-[7rem]" />
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Example = ({ data, componentRef }) => {
  return (
    <div className="hidden">
      <ComponentToPrint propsRef={componentRef} data={data} />
    </div>
  );
};

export default Example;
