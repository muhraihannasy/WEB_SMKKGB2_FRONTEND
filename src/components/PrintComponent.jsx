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
    achievement,
    email,
    fullname,
    phone,
    registration,
    scholarship,
    student,
  } = data;
  const {
    class_pick,
    extracurricular,
    no_serial_diploma,
    no_serial_skhus,
    no_examinee,
    type_registration,
    from_school,
    uniform,
  } = registration;
  const {
    father_birth,
    father_education,
    father_job,
    father_name,
    father_nik,
    father_income,
    father_special_needs,
    gender,
    height,
    kip,
    kps,
    mother_birth,
    mother_education,
    mother_job,
    mother_name,
    mother_nik,
    mother_income,
    mother_special_needs,
    nisn,
    nik,
    no_certificate_registration,
    kks,
    photo,
    religion,
    address,
    special_needs,
    weight,
    birth,
    kartu_keluarga_image,
    nisn_image,
  } = student;

  console.log(data?.data);

  const birthTemp = birth?.split("|") || [];
  const fatherBirthTemp = father_birth?.split("|") || [];
  const motherBirthTemp = mother_birth?.split("|") || [];
  const addressTemp = address?.split("|") || [];
  const classPickTemp = class_pick?.split("|") || [];
  const extracurricularTemp = extracurricular?.split("|") || [];
  const uniformTemp = uniform?.split("|") || [];
  const kipTemp = kip?.split("|") || [];
  const kpsTemp = kps?.split("|") || [];
  const kksTemp = kks?.split("|") || [];

  // --------- -----------//
  const tanggal_lahir = birthTemp[0];
  const tempat_lahir = birthTemp[1];
  const tp_ayah = fatherBirthTemp[0];
  const tl_ayah = fatherBirthTemp[1];
  const tp_ibu = fatherBirthTemp[0];
  const tl_ibu = fatherBirthTemp[1];
  const alamat = addressTemp[0];
  const rt = addressTemp[1];
  const rw = addressTemp[2];
  const kelurahan = addressTemp[3];
  const kecamatan = addressTemp[4];
  const kodepos = addressTemp[5];

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
  const komp3 = classPickTemp[2];
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
        <div className="h-[900px]  printElement1  mt-[1.5rem] mb-[1.5rem]">
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
                  : {special_needs}
                </span>
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
                <span className="">Asal Sekolah</span>
                <span className="text-left whitespace-nowrap ">
                  : {from_school}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Alamat Jalan </span>
                <span className="text-left whitespace-nowrap ">: {alamat}</span>
              </li>{" "}
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
                  : {kodepos == "" ? "-" : kodepos}
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
                <span className="">Nama KIP</span>
                <span className="text-left whitespace-nowrap ">
                  : {nameKip}
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
        </div>
        <div className="printElement1 h-[1000px] pt-[2rem] mt-[1.5rem]">
          <div className="printElement1 mb-[1.5rem] ">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Data Ayah</h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama Ayah </span>
                <span className="text-left whitespace-nowrap ">
                  : {father_name}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tanggal Lahir </span>
                <span className="text-left whitespace-nowrap ">
                  : {tl_ayah}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tempat Lahir </span>
                <span className="text-left whitespace-nowrap ">
                  : {tp_ayah}
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
                  : {father_income}
                </span>
              </li>
            </ul>
          </div>
          <div className="printElement1 mb-[1.5rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Data Ibu</h2>
            <ul className="text-left flex flex-col gap-1">
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Nama Ibu </span>
                <span className="text-left whitespace-nowrap ">
                  : {mother_name}
                </span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tanggal Lahir </span>
                <span className="text-left whitespace-nowrap ">: {tl_ibu}</span>
              </li>
              <li className="grid grid-cols-2 gap-4 w-[25rem] ">
                <span className="">Tempat Lahir </span>
                <span className="text-left whitespace-nowrap ">: {tp_ibu}</span>
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
                  : {mother_income}
                </span>
              </li>
            </ul>
          </div>
          <div className="printElement1 mb-[1.5rem]">
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
            </ul>
          </div>{" "}
          <div className="printElement1 mb-[1.5rem]">
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

        <div className="h-max printElement1">
          <div className="printElement1 mt-[2rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">
              Data Beasiswa
            </h2>
            <div className="grid grid-cols-2 gap-[1.8rem]">
              {scholarship.map((item, index) => {
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
          </div>
          <div className="printElement1 mb-[1rem]">
            <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">
              Data Prestasi
            </h2>
            <div className="grid grid-cols-2 gap-[1.8rem]">
              {achievement.map((item, index) => {
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
          </div>
        </div>
        <div className="printElement1 mb-[1rem] mt-[1rem] pt-[1rem] ">
          <h2 className="font-bold text-[1.2rem] mb-[0.5rem] ">Berkas</h2>
          <ul className="text-left flex flex-col ">
            <li className="mb-[2rem]">
              <span className="block mb-[1rem]">Photo Nisn </span>
              <div className="w-full h-[20rem] bg-slate-300 ">
                <img
                  src={nisn_image}
                  alt=""
                  className="w-full object-cover h-full"
                />
              </div>
            </li>
            <li className="mb-[2rem] mt-[45rem] h-[1500px]">
              <span className="block mb-[4rem]">Photo Kartu Keluarga </span>

              <div>
                <img
                  src={kartu_keluarga_image}
                  alt=""
                  className="w-[55em] h-[40rem] rotate-[90deg]"
                />
              </div>
            </li>
            {/* <li className="w-full">
              <span className="block mb-[1rem]">Photo Kartu Keluarga </span>

              <div className="w-full h-[20rem] bg-slate-300 ">
                <img
                  src="https://4.bp.blogspot.com/-fcV1gP3nfvA/V9ErrX8jqQI/AAAAAAAAbag/E7yumAd1AZ0cgHgZRxy1AbGLT9fGDVxPgCLcB/s1600/kartukeluargaedit.jpg"
                  alt=""
                  className="w-fulllu"
                />
              </div>
            </li> */}
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
    <div className="">
      <ComponentToPrint propsRef={componentRef} data={data} />
    </div>
  );
};

export default Example;
