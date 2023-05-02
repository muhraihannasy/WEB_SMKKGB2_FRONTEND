import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Spinner from "react-spinkit";

// Icon
import { IoAddCircleSharp, IoChevronBackCircleSharp } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";

// Service
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";

// Utils
import {
  education,
  gender,
  income,
  profession,
  receiver,
  religion,
  specialNeeds,
  scholarship,
  levelAchievements,
  typeAchievements,
  typeRegistration,
  extracurriculer,
  uniform,
  year,
  competency,
} from "../../../utils/Data";
import { notify } from "../../../utils/Utils";

// Partials
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";

// Component
import { Input } from "../../../components";
import TabsComponent from "../../../components/TabsComponent";
import Preview from "../../../components/Preview";

// Interfaces
import {
  scholarshipInterface,
  achievementInterface,
  formPPDBAdminInterface,
  imagesUploadPPDBInterface,
} from "../../../interfaces";

// Field Require
import { fieldRequireFormPPDBAdmin } from "../../../Field Require";

const AddRegisterStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    ...formPPDBAdminInterface,
  });
  const [scholarships, setScholarships] = useState([
    { ...scholarshipInterface },
  ]);
  const [achievements, setAchievements] = useState([
    { ...achievementInterface },
  ]);
  const [imagesUpload, setImagesUpload] = useState({
    ...imagesUploadPPDBInterface,
  });

  const [errors, setErrors] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  let errorsTemp = [];

  async function onSubmit(e) {
    errorsTemp = [];
    e.preventDefault();
    setIsSubmit(true);

    for (const propFormData in formData) {
      let propToString = propFormData.toString();
      if (
        formData[propFormData] == "" &&
        fieldRequireFormPPDBAdmin.includes(propToString)
      ) {
        errorsTemp.push(propToString);
      }
    }

    setErrors(errorsTemp);

    if (errorsTemp.length > 0) {
      console.log("erorr");
      return;
    }

    setIsLoading(true);

    const data = { ...formData };
    const {
      alamat,
      city,
      date,
      kecamatan,
      kelurahan,
      kodepos,
      rt,
      rw,
      receiver_kip,
      receiver_kps,
      no_kip,
      no_kps,
      name_kip,
      reason_kip,
      uniform1,
      uniform2,
      uniform3,
      uniform4,
      extra1,
      extra2,
      class1,
      class2,
      class3,
      father_city,
      father_date,
      mother_city,
      mother_date,
      no_kks,
    } = data;

    data.birth = `${date}|${city}`;
    data.address = `${alamat}|${rt}|${rw}|${kelurahan}|${kecamatan}|${kodepos}`;
    // KKS
    data.kks = `${no_kks == "" ? "-" : no_kks}|${
      imagesUpload.foto_kks == "" ? "-" : imagesUpload.foto_kks
    }`;
    // KPS
    data.kps = `${receiver_kps == "" ? "-" : receiver_kps}|${
      no_kps == "" ? "-" : no_kps
    }|${imagesUpload.foto_kps == "" ? "" : imagesUpload.foto_kps}`;
    // KIP
    data.kip = `${receiver_kip == "" ? "-" : receiver_kip}|${
      name_kip == "" ? "-" : name_kip
    }|${no_kip == "" ? "-" : no_kip}|${reason_kip == "" ? "-" : reason_kip}|${
      imagesUpload.foto_kip == "" ? "-" : imagesUpload.foto_kip
    }`;
    data.uniform = `${uniform1}|${uniform2}|${uniform3}|${uniform4}`;
    data.extracurricular = `${extra1}|${extra2}`;
    data.father_birth = `${father_city}|${father_date}`;
    data.mother_birth = `${mother_city}|${mother_date}`;
    data.status_registration = 0;
    data.scholarships = scholarships;
    data.achievements = achievements;
    data.kartu_keluarga_image = imagesUpload.kartu_keluarga_image;
    data.nisn_image = imagesUpload.nisn_image;
    data.class_pick = `${class1}|${class2}|${class3}`;

    delete data.city;
    delete data.alamat;
    delete data.date;
    delete data.rt;
    delete data.rw;
    delete data.kecamatan;
    delete data.kelurahan;
    delete data.kodepos;
    delete data.receiver_kip;
    delete data.receiver_kps;
    delete data.no_kip;
    delete data.no_kps;
    delete data.no_kks;
    delete data.name_kip;
    delete data.reason_kip;
    delete data.uniform1;
    delete data.uniform2;
    delete data.uniform3;
    delete data.uniform4;
    delete data.extra1;
    delete data.extra2;
    delete data.komp1;
    delete data.komp2;
    delete data.father_date;
    delete data.father_city;
    delete data.mother_date;
    delete data.mother_city;

    const request = await FecthData(
      `${APIBASEURL}/admin/ppdb/store`,
      requestSetting("POST", data)
    );

    setTimeout(() => {
      if (request.errors?.email[0]) {
        setIsLoading(false);
        notify(request.errors.email[0], "error");
      }

      if (request.success) {
        setIsLoading(false);
        notify("Berhasil Menyimpan Data", "success");

        setTimeout(() => {
          navigate("/dashboard/ppdb");
        }, 1000);
      }
    }, 1000);
  }

  async function handleUpload(file, field) {
    const token = JSON.parse(localStorage.getItem("usr")).acctkn;

    // Upload Image
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const temp = imagesUpload[field].split("/");
    const imageOld = temp[3] + "/" + temp[4];

    const formdata = new FormData();
    formdata.append("image", file, file.name);
    formdata.append("image_old", imageOld);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(`${APIBASEURL}/upload_image`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result?.image) {
          notify(result?.image[0], "error");
          return;
        }

        setImagesUpload({ ...imagesUpload, [field]: result.url });
        setFormData((prev) => ({ ...prev, [field]: result.url }));
      })
      .catch((error) => console.log("error", error));
  }

  const handleFormChange = (event, index, type) => {
    let data = [];

    switch (type) {
      case "scholarship":
        data = [...scholarships];
        data[index][event.target.name] = event.target.value;
        setScholarships(data);
        break;
      case "achievement":
        data = [...achievements];
        data[index][event.target.name] = event.target.value;
        setAchievements(data);
        break;
      default:
        data = [];
    }
  };

  const addFields = (type) => {
    let field = {};
    switch (type) {
      case "scholarship":
        field = { ...scholarshipInterface };
        setScholarships([...scholarships, field]);
        break;
      case "achievement":
        field = { ...achievementInterface };
        setAchievements([...achievements, field]);
        break;
      default:
        break;
    }
  };

  const removeFields = (type, index) => {
    let data = [];

    switch (type) {
      case "scholarship":
        data = [...scholarships];
        data.splice(index, 1);
        setScholarships(data);
        break;
      case "achievement":
        data = [...achievements];
        data.splice(index, 1);
        setAchievements(data);
        break;
      default:
        console.log("Non Type");
        break;
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      notify("Upss, Masih ada data yang kosong. Coba Cek Kembali", "error");
    }
    setIsSubmit(false);
  }, [isSubmit]);

  useEffect(() => {
    setErrors([]);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Loading */}
      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 py-8 w-full max-w-9xl mx-auto ">
            <form
              onSubmit={onSubmit}
              className="shadow-lg px-6 rounded-xl py-8  max-w-[800px] mx-auto overflow-x-hidden"
            >
              <button
                className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem] mb-[2rem]"
                onClick={() => navigate("/dashboard/ppdb")}
                type="button"
              >
                <IoChevronBackCircleSharp className="text-[1rem]" />
                Back
              </button>
              <h2 className="font-semibold text-[1.5rem] mb-[2rem]">
                Formulir Pendaftaran
              </h2>

              <TabsComponent
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
                type="admin"
              />
              <div
                className={`wrapper-form-group mt-[2rem]  ${
                  currentTab == 1 ? "active-form" : "non-active-form"
                } `}
              >
                <div className="form-group">
                  <Input
                    type="text"
                    field="fullname"
                    label="Nama Lengkap"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="from_school"
                    label="Asal Sekolah"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />

                  <Input
                    type="number"
                    field="phone"
                    label="No Telepon"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="select"
                    field="class1"
                    label="Pilihan Kompetensi 1"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={competency}
                  />
                  <Input
                    type="select"
                    field="class2"
                    label="Pilihan Kompetensi 2"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={competency}
                  />
                  <Input
                    type="select"
                    field="class3"
                    label="Pilihan Kompetensi 3"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={competency}
                  />
                  <Input
                    type="email"
                    field="email"
                    label="Email"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="password"
                    field="password"
                    label="Password"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              </div>
              <div
                className={`wrapper-form-group mt-[2rem]  ${
                  currentTab == 2 ? "active-form" : "non-active-form"
                } `}
              >
                <div className="form-group">
                  <Input
                    type="text"
                    field="nisn"
                    label="NISN"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="number"
                    field="nik"
                    label="NIK"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="no_certificate_registration"
                    label="No. Registrasi Akta Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="select"
                    field="religion"
                    label="Agama"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={religion}
                  />
                  <Input
                    type="number"
                    field="weight"
                    label="Berat Badan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={religion}
                  />
                  <Input
                    type="number"
                    field="height"
                    label="Tinggi Badan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={religion}
                  />
                  <Input
                    type="select"
                    field="gender"
                    label="Jenis Kelamin"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={gender}
                  />
                  <Input
                    type="select"
                    field="special_needs"
                    label="Berkebutuhan Khusus"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={specialNeeds}
                  />
                  <Input
                    type="date"
                    field="date"
                    label="Tanggal Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="city"
                    label="Tempat Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="alamat"
                    label="Alamat"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <div className="grid grid-cols-2 items-center gap-2">
                    <Input
                      type="text"
                      field="rt"
                      label="RT"
                      errors={errors}
                      formData={formData}
                      setFormData={setFormData}
                    />
                    <Input
                      type="text"
                      field="rw"
                      label="RW"
                      errors={errors}
                      formData={formData}
                      setFormData={setFormData}
                    />
                  </div>

                  <Input
                    type="text"
                    field="kelurahan"
                    label="Kelurahan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="kecamatan"
                    label="Kecamatan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="number"
                    field="kodepos"
                    label="Kode Pos"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                </div>
              </div>
              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 3 ? "active-form" : "non-active-form"
                } `}
              >
                <h2 className="mt-[2rem] mb-[1.5rem] font-semibold border-b-2 border-slate-300 w-max  text-[1.5rem]">
                  Data Ayah
                </h2>
                <div className="form-group">
                  <Input
                    type="text"
                    field="father_name"
                    label="Nama Ayah Kandung"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="number"
                    field="father_nik"
                    label="NIK Ayah"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="date"
                    field="father_date"
                    label="Tanggal Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="father_city"
                    label="Tempat Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="select"
                    field="father_education"
                    label="Pendidikan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={education}
                  />
                  <Input
                    type="select"
                    field="father_job"
                    label="Pekerjaan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={profession}
                  />
                  <Input
                    type="select"
                    field="father_income"
                    label="Penghasilan Bulanan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={income}
                  />
                </div>

                <h2 className="mt-[2rem] mb-[1.5rem] font-semibold border-b-2 border-slate-300 w-max  text-[1.5rem]">
                  Data Ibu
                </h2>
                <div className="form-group">
                  <Input
                    type="text"
                    field="mother_name"
                    label="Nama Ibu Kandung"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="number"
                    field="mother_nik"
                    label="NIK Ibu"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="date"
                    field="mother_date"
                    label="Tanggal Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="mother_city"
                    label="Tempat Lahir"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="select"
                    field="mother_education"
                    label="Pendidikan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={education}
                  />
                  <Input
                    type="select"
                    field="mother_job"
                    label="Pekerjaan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={profession}
                  />
                  <Input
                    type="select"
                    field="mother_income"
                    label="Penghasilan Bulanan"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={income}
                  />
                </div>
              </div>

              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 4 ? "active-form" : "non-active-form"
                } `}
              >
                <p className="mb-[10px]">*Kosongkan Jika Tidak Ada</p>
                {scholarships.map((input, index) => {
                  return (
                    <div key={index} className="mb-[2rem]">
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="type_scholarship">Jenis Beasiswa</label>
                        <select
                          id="type_scholarship"
                          name="type_scholarship"
                          placeholder="..."
                          className={`border-1  focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "scholarship")
                          }
                          value={input.type_scholarship}
                        >
                          <option value="">Pilih...</option>
                          {scholarship.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="year_start_at_scholarship">
                          Tahun Mulai{" "}
                        </label>
                        <select
                          id="year_start_at_scholarship"
                          name="year_start_at_scholarship"
                          placeholder="..."
                          className={`border-1  focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "scholarship")
                          }
                          value={input.year_start_at_scholarship}
                        >
                          <option value="">Pilih...</option>
                          {year.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>{" "}
                      </div>
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="year_finish_at_scholarship">
                          Tahun Selesai{" "}
                        </label>
                        <select
                          id="year_finish_at_scholarship"
                          name="year_finish_at_scholarship"
                          placeholder="..."
                          className={`border-1  focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "scholarship")
                          }
                          value={input.year_finish_at_scholarship}
                        >
                          <option value="">Pilih...</option>
                          {year.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>{" "}
                      </div>
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="descriptions_scholarship">
                          Keterangan
                        </label>
                        <textarea
                          id="descriptions_scholarship"
                          name="descriptions_scholarship"
                          placeholder="..."
                          className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "scholarship")
                          }
                          value={input.descriptions_scholarship}
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeFields("scholarship", index)}
                          className="px-4 py-2 text-white bg-primary rounded-lg ml-auto flex items-center gap-2 text-[0.8rem] mt-[1rem]"
                        >
                          <IoMdTrash className="text-[1.1rem]" />
                          Delete
                        </button>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => addFields("scholarship")}
                  className="px-4 py-2 text-white bg-primary rounded-lg flex items-center ml-auto gap-2 text-[0.8rem] mt-[1rem] mb-[4rem]"
                >
                  <IoAddCircleSharp className="text-[1.1rem]" />
                  Tambah Beasiswa
                </button>

                <h2 className="mt-[2rem] mb-[0.4rem] font-semibold border-b-2 border-slate-300 w-max  text-[1.5rem]">
                  Data Optional
                </h2>
                <p className="mb-[1.8rem] w-[100%] text-[14px]">
                  Jika kamu, merima bantuan Pemerintah yang berupa KKS atau KIP.
                  Data dibawah wajib diisi
                </p>
                <div className="form-group">
                  <Input
                    type="number"
                    field="no_kks"
                    label="No KKS"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    require={false}
                  />
                  <Input
                    type="select"
                    field="receiver_kps"
                    label="Penerima KPS"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={receiver}
                    require={false}
                  />

                  <Input
                    type="number"
                    field="no_kps"
                    label="No KPS"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    require={false}
                  />
                  <Input
                    type="select"
                    field="receiver_kip"
                    label="Penerima KIP"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={receiver}
                    require={false}
                  />

                  <Input
                    type="text"
                    field="name_kip"
                    label="Nama Tertera di KIP"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    require={false}
                  />
                  <Input
                    type="number"
                    field="no_kip"
                    label="No KIP"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    require={false}
                  />
                  <Input
                    type="textarea"
                    field="reason_kip"
                    label="Alasan Layak KIP"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    require={false}
                  />
                </div>
              </div>
              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 5 ? "active-form" : "non-active-form"
                } `}
              >
                <p className="mb-[10px]">*Kosongkan Jika Tidak Ada</p>
                {achievements.map((input, index) => {
                  return (
                    <div key={index} className="mb-[2rem]">
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="name_achievement">Nama Prestasi</label>
                        <input
                          id="name_achievement"
                          name="name_achievement"
                          type="text"
                          placeholder="..."
                          className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "achievement")
                          }
                          value={input.name_achievement}
                        />
                      </div>
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="type_achievement">Jenis Prestasi</label>
                        <select
                          id="type_achievement"
                          name="type_achievement"
                          placeholder="..."
                          className={`border-1  focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "achievement")
                          }
                          value={input.type_achievement}
                        >
                          <option value="">Pilih...</option>
                          {typeAchievements.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="input-group mb-[1rem]">
                        <label htmlFor="year_achievement">Tahun </label>
                        <select
                          id="year_achievement"
                          name="year_achievement"
                          placeholder="..."
                          className={`border-1  focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "achievement")
                          }
                          value={input.year_achievement}
                        >
                          <option value="">Pilih...</option>
                          {year.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>

                      <div className="input-group mb-[1rem]">
                        <label htmlFor="level_achievement">Tingkat </label>
                        <select
                          id="level_achievement"
                          name="level_achievement"
                          placeholder="..."
                          className={`border-1  focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "achievement")
                          }
                          value={input.level_achievement}
                        >
                          <option value="">Pilih...</option>
                          {levelAchievements.map((item, index) => {
                            return (
                              <option key={index} value={item}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="input-group mb-[1rem]">
                        <label htmlFor="organinizer_achievement">
                          Penyelenggara
                        </label>
                        <input
                          id="organinizer_achievement"
                          name="organinizer_achievement"
                          placeholder="..."
                          type="text"
                          className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400`}
                          onChange={(e) =>
                            handleFormChange(e, index, "achievement")
                          }
                          value={input.organinizer_achievement}
                        />
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeFields("achievement", index)}
                          className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 ml-auto text-[0.8rem] mt-[1rem]"
                        >
                          <IoMdTrash className="text-[1.1rem]" />
                          Delete
                        </button>
                      )}
                    </div>
                  );
                })}

                <button
                  type="button"
                  onClick={() => addFields("achievement")}
                  className="px-4 py-2 text-white bg-primary rounded-lg flex items-center ml-auto gap-2 text-[0.8rem] mt-[1rem] mb-[4rem]"
                >
                  <IoAddCircleSharp className="text-[1.1rem]" />
                  Tambah Prestasi
                </button>
              </div>

              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 6 ? "active-form" : "non-active-form"
                } `}
              >
                <div className="form-group">
                  <Input
                    type="select"
                    field="type_registration"
                    label="Jenis Pendaftaran"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={typeRegistration}
                  />

                  <Input
                    type="number"
                    field="no_examinee"
                    label="No Perserta Ujian"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="no_serial_diploma"
                    label="No. Seri Ijazah"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="text"
                    field="no_serial_skhus"
                    label="No. SKHUS"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                  />
                  <Input
                    type="select"
                    field="extra1"
                    label="Ekstrakurikuler 1"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={extracurriculer}
                  />
                  <Input
                    type="select"
                    field="extra2"
                    label="Ekstrakurikuler 2"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={extracurriculer}
                  />
                  <Input
                    type="select"
                    field="uniform1"
                    label="Baju Olahraga"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={uniform}
                  />
                  <Input
                    type="select"
                    field="uniform2"
                    label="Baju Wear Pack (Khusus Jurusan TKJ)"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={uniform}
                  />
                  <Input
                    type="select"
                    field="uniform3"
                    label="Baju Kotak-Kotak"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={uniform}
                  />
                  <Input
                    type="select"
                    field="uniform4"
                    label="Jaz Alamamater"
                    errors={errors}
                    formData={formData}
                    setFormData={setFormData}
                    data={uniform}
                  />
                </div>
              </div>
              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 7 ? "active-form" : "non-active-form"
                } `}
              >
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-8 gap-x-5">
                  <div className="flex items-start flex-col overflow-hidden">
                    <Preview src={formData.nisn_image} />
                    <label htmlFor="" className="mb-[0.2em] font-semibold">
                      Foto Scan Nisn
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "nisn_image")
                      }

                      // required
                    />
                  </div>
                  <div className="flex items-start flex-col overflow-hidden">
                    <Preview src={formData.kartu_keluarga_image} />
                    <label htmlFor="" className="mb-[0.2em] font-semibold">
                      Foto Scan kartu Keluarga
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "kartu_keluarga_image")
                      }
                      // required
                    />
                  </div>
                  <div className="flex items-start flex-col overflow-hidden">
                    <Preview src={formData.foto_kip} />
                    <label htmlFor="" className="mb-[0.2em] font-semibold">
                      Foto Scan KIP
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_kip")
                      }
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <Preview src={formData.foto_kps} />
                    <label htmlFor="" className="mb-[0.2em] font-semibold">
                      Foto Scan KPS
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_kps")
                      }
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <Preview src={formData.foto_kks} />
                    <label htmlFor="" className="mb-[0.2em] font-semibold">
                      Foto Scan KKS
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_kks")
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 mt-[1.5rem]">
                {currentTab > 1 && (
                  <button
                    className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem]"
                    onClick={() => setCurrentTab((prev) => prev - 1)}
                    type="button"
                  >
                    <IoChevronBackCircleSharp className="text-[1rem]" />
                    Back
                  </button>
                )}
                {currentTab < 6 && (
                  <button
                    className={`px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem]`}
                    onClick={() => setCurrentTab((prev) => prev + 1)}
                    type="button"
                  >
                    Next
                    <IoChevronBackCircleSharp className="text-[1rem] rotate-[180deg]" />
                  </button>
                )}
                {/* {currentTab == 6 && ( */}
                <button
                  className="px-4 py-2 text-white bg-primary rounded-lg text-[0.8rem]"
                  type="submit"
                >
                  Submit
                </button>
                {/* )} */}
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddRegisterStudent;
