import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoAddCircleSharp, IoChevronBackCircleSharp } from "react-icons/io5";
import Spinner from "react-spinkit";

// Utils
import {
  education,
  gender,
  income,
  profession,
  receiver,
  religion,
  residence,
  specialNeeds,
  scholarship,
  levelAchievements,
  typeAchievements,
  distance,
  typeRegistration,
  extracurriculer,
  uniform,
  year,
  transport,
  competency,
} from "../../../utils/Data";

// Component
import { Input, ProgressBarComponent } from "../../../components";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";
import { getUserIsLogin, notify } from "../../../utils/Utils";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { Toaster } from "react-hot-toast";
import TabsComponent from "../../../components/TabsComponent";

const scholarshipInterface = {
  type_scholarship: "",
  year_start_at_scholarship: "",
  year_finish_at_scholarship: "",
  descriptions_scholarship: "",
};
const achievementInterface = {
  name_achievement: "",
  year_achievement: "",
  type_achievement: "",
  level_achievement: "",
  organinizer_achievement: "",
};

const EditRegisterStudent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [scholarships, setScholarships] = useState([
    { ...scholarshipInterface },
  ]);
  const [achievements, setAchievements] = useState([
    { ...achievementInterface },
  ]);
  const [imagesUpload, setImagesUpload] = useState({
    foto_nisn: " ",
    foto_kartu_keluarga: "",
    foto_kip: "",
    foto_kks: "",
    foto_kps: "",
  });
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { religion: "" } });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState(1);
  const [index, setIndex] = useState(1);
  const [totalForm, setTotalForm] = useState(8);
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(id);

  const onSubmit = async (data) => {
    // setData(data);
    const {
      alamat,
      bujur,
      city,
      date,
      kecamatan,
      kelurahan,
      kodepos,
      lintang,
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
      father_city,
      father_date,
      mother_city,
      mother_date,
      guardian_city,
      guardian_date,
      hours,
      no_kks,
      minute,
      class1,
      class2,
      class3,
    } = data;

    data.birth = `${date}|${city}`;
    data.address = `${alamat}|${rt}|${rw}|${kelurahan}|${kecamatan}|${kodepos}|${lintang}|${bujur}`;
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
    data.class_pick = `${class1}|${class2}|${class3}`;
    data.father_birth = `${father_city}|${father_date}`;
    data.mother_birth = `${mother_city}|${mother_date}`;
    data.guardian_birth = `${guardian_city}|${guardian_date}`;
    data.time_to_school = `${hours}|${minute}`;
    data.status_registration = 0;
    data.scholarships = scholarships;
    data.achievements = achievements;
    data.foto_kartu_keluarga = imagesUpload.foto_kartu_keluarga;
    data.foto_nisn = imagesUpload.foto_nisn;

    delete data.city;
    delete data.alamat;
    delete data.date;
    delete data.rt;
    delete data.rw;
    delete data.kecamatan;
    delete data.kelurahan;
    delete data.kodepos;
    delete data.lintang;
    delete data.bujur;
    delete data.receiver_kip;
    delete data.receiver_kps;
    delete data.no_kip;
    delete data.no_kps;
    delete data.name_kip;
    delete data.reason_kip;
    delete data.uniform1;
    delete data.uniform2;
    delete data.uniform3;
    delete data.uniform4;
    delete data.extra1;
    delete data.extra2;
    delete data.class1;
    delete data.class2;
    delete data.class3;
    delete data.father_date;
    delete data.father_city;
    delete data.mother_date;
    delete data.mother_city;
    delete data.guardian_date;
    delete data.guardian_city;
    delete data.hours;
    delete data.minute;

    // setIsLoading(true);
    const request = await FecthData(
      `${APIBASEURL}/admin/ppdb/store`,
      requestSetting("POST", data)
    );

    if (request.errors?.email) {
      notify("Email Sudah Ada", "error");
      return;
    }

    if (request.success) {
      setIsLoading(false);
      notify("Berhasil Membuat Formulir", "success");
      setTimeout(() => {
        navigate("/dashboard/ppdb");
      }, 500);
    }
  };

  const handleUpload = async (file, field) => {
    const token = JSON.parse(localStorage.getItem("usr")).acctkn;
    // Upload Image
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const formdata = new FormData();
    formdata.append("image", file, file.name);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(`${APIBASEURL}/student/registration/upload`, requestOptions)
      .then((response) => response.json())
      .then((result) =>
        setImagesUpload({ ...imagesUpload, [field]: result.path })
      )
      .catch((error) => console.log("error", error));
  };

  // console.log(formdata);
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
  }, [errors]);

  useEffect(() => {
    async function getData() {
      const req = await FecthData(
        `${APIBASEURL}/admin/ppdb/${id}`,
        requestSetting("GET")
      );

      setTimeout(() => {
        const {
          id,
          fullname,
          phone,
          email,
          registration,
          student,
          scholarship,
          achievement,
        } = req;

        const {
          registration_id,
          user_id,
          student_id,
          payment_id,
          type_registration,
          from_school,
          no_examinee,
          no_serial_diploma,
          no_serial_skhus,
          class_pickn,
          extracurricular,
          uniform,
          code_registration,
          is_paid,
          statusa,
          active,
        } = registration;

        const {
          student_achievement_id,
          student_scholarship_id,
          nisn,
          nisn_image,
          nik,
          nik_image,
          kartu_keluarga_image,
          no_certificate_registration,
          kks,
          kps,
          kip,
          address,
          residence,
          residence_distance,
          time_to_school,
          religion,
          birth,
          height,
          weight,
          amount_siblings,
          gender,
          special_needs,
          order_family,
          father_name,
          father_nik,
          father_birth,
          father_education,
          father_job,
          father_income,
          father_special_needs,
          mother_name,
          mother_nik,
          mother_birth,
          mother_education,
          mother_job,
          mother_income,
          mother_special_needs,
          guardian_name,
          guardian_nik,
          guardian_birth,
          guardian_education,
          guardian_job,
          guardian_income,
          guardian_special_needs,
        } = student;

        setValue("fullname", fullname);
        setValue("phone", phone);
        setValue("email", email);
        setValue("nisn", nisn);
        setValue("nik", nik);
        setValue("no_certificate_registration", no_certificate_registration);
        console.log(religion);
        setValue("religion", religion);
        // setValue("fullname", fullname);
        // setValue("fullname", fullname);
      }, 1000);
    }

    (async () => getData())();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Loading */}
      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}
      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 py-8 w-full max-w-9xl mx-auto ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="shadow-lg px-6 rounded-xl py-8  max-w-[800px] mx-auto overflow-x-hidden"
            >
              <Link
                className="w-max h-[2.5rem] text-white pt-2 px-5 bg-orange-400 block rounded-[4px] mb-[30px] mt-[2.5rem]"
                to="/dashboard/ppdb"
              >
                <div className="flex items-center gap-2">
                  <IoChevronBackCircleSharp className="text-[1rem]" />

                  <span> Back</span>
                </div>
              </Link>

              <h2 className="font-semibold text-[1.5rem] mb-[2rem]">
                Formulir Pendaftaran
              </h2>

              <TabsComponent
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
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
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="number"
                    field="phone"
                    label="No Telepon"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="email"
                    field="email"
                    label="Email"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="password"
                    field="password"
                    label="Password"
                    register={register}
                    errors={errors}
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
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="number"
                    field="nik"
                    label="NIK"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="no_certificate_registration"
                    label="No. Registrasi Akta Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="select"
                    field="religion"
                    label="Agama"
                    register={register}
                    errors={errors}
                    data={religion}
                    value="khonghucu"
                  />
                  {/* {console.log()} */}
                  <Input
                    type="number"
                    field="weight"
                    label="Berat Badan"
                    register={register}
                    errors={errors}
                    data={religion}
                  />
                  <Input
                    type="number"
                    field="height"
                    label="Tinggi Badan"
                    register={register}
                    errors={errors}
                    data={religion}
                  />
                  <Input
                    type="select"
                    field="gender"
                    label="Jenis Kelamin"
                    register={register}
                    errors={errors}
                    data={gender}
                  />
                  <Input
                    type="select"
                    field="special_needs"
                    label="Berkebutuhan Khusus"
                    register={register}
                    errors={errors}
                    data={specialNeeds}
                  />
                  <Input
                    type="date"
                    field="date"
                    label="Tanggal Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="city"
                    label="Tempat Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="alamat"
                    label="Alamat"
                    register={register}
                    errors={errors}
                  />
                  <div className="grid grid-cols-2 items-center gap-2">
                    <Input
                      type="text"
                      field="rt"
                      label="RT"
                      register={register}
                      errors={errors}
                    />
                    <Input
                      type="text"
                      field="rw"
                      label="RW"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <Input
                    type="text"
                    field="dusun"
                    label="Dusun"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="kelurahan"
                    label="Kelurahan"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="kecamatan"
                    label="Kecamatan"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="number"
                    field="kodepos"
                    label="Kode Pos"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="lintang"
                    label="Lintang"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="bujur"
                    label="Bujur"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="select"
                    field="residence_distance"
                    label="Jarak Tempat Tinggal"
                    register={register}
                    errors={errors}
                    data={distance}
                  />
                  <Input
                    type="select"
                    field="residence"
                    label="Tempat Tinggal"
                    register={register}
                    errors={errors}
                    data={residence}
                  />
                  <Input
                    type="select"
                    field="transport"
                    label="Transportasi"
                    register={register}
                    errors={errors}
                    data={transport}
                  />
                  <Input
                    type="text"
                    field="amount_siblings"
                    label="Jumlah Saudara Kandung"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="order_family"
                    label="Anak Ke"
                    register={register}
                    errors={errors}
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
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="number"
                    field="father_nik"
                    label="NIK Ayah"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="date"
                    field="father_date"
                    label="Tanggal Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="father_city"
                    label="Tempat Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="select"
                    field="father_education"
                    label="Pendidikan"
                    register={register}
                    errors={errors}
                    data={education}
                  />
                  <Input
                    type="select"
                    field="father_job"
                    label="Pekerjaan"
                    register={register}
                    errors={errors}
                    data={profession}
                  />
                  <Input
                    type="select"
                    field="father_income"
                    label="Penghasilan Bulanan"
                    register={register}
                    errors={errors}
                    data={income}
                  />
                  <Input
                    type="select"
                    field="father_special_needs"
                    label="Berkebutuhan Khusus"
                    register={register}
                    errors={errors}
                    data={specialNeeds}
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
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="number"
                    field="mother_nik"
                    label="NIK Ibu"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="date"
                    field="mother_date"
                    label="Tanggal Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="mother_city"
                    label="Tempat Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="select"
                    field="mother_education"
                    label="Pendidikan"
                    register={register}
                    errors={errors}
                    data={education}
                  />
                  <Input
                    type="select"
                    field="mother_job"
                    label="Pekerjaan"
                    register={register}
                    errors={errors}
                    data={profession}
                  />
                  <Input
                    type="select"
                    field="mother_income"
                    label="Penghasilan Bulanan"
                    register={register}
                    errors={errors}
                    data={income}
                  />
                  <Input
                    type="select"
                    field="mother_special_needs"
                    label="Berkebutuhan Khusus"
                    register={register}
                    errors={errors}
                    data={specialNeeds}
                  />
                </div>
                <h2 className="mt-[2rem] mb-[1.5rem] font-semibold border-b-2 border-slate-300 w-max  text-[1.5rem]">
                  Data Wali
                </h2>
                <div className="form-group">
                  <Input
                    type="text"
                    field="guardian_name"
                    label="Nama Wali"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="number"
                    field="guardian_nik"
                    label="NIK Wali"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="date"
                    field="guardian_date"
                    label="Tanggal Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="guardian_city"
                    label="Tempat Lahir"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="select"
                    field="guardian_education"
                    label="Pendidikan"
                    register={register}
                    errors={errors}
                    data={education}
                  />
                  <Input
                    type="select"
                    field="guardian_job"
                    label="Pekerjaan"
                    register={register}
                    errors={errors}
                    data={profession}
                  />
                  <Input
                    type="select"
                    field="guardian_income"
                    label="Penghasilan Bulanan"
                    register={register}
                    errors={errors}
                    data={income}
                  />
                  <Input
                    type="select"
                    field="guardian_special_needs"
                    label="Berkebutuhan Khusus"
                    register={register}
                    errors={errors}
                    data={specialNeeds}
                  />
                </div>
              </div>

              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 4 ? "active-form" : "non-active-form"
                } `}
              >
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
                    register={register}
                    errors={errors}
                    require={false}
                  />
                  <Input
                    type="select"
                    field="receiver_kps"
                    label="Penerima KPS"
                    register={register}
                    errors={errors}
                    data={receiver}
                    require={false}
                  />

                  <Input
                    type="number"
                    field="no_kps"
                    label="No KPS"
                    register={register}
                    errors={errors}
                    require={false}
                  />
                  <Input
                    type="select"
                    field="receiver_kip"
                    label="Penerima KIP"
                    register={register}
                    errors={errors}
                    data={receiver}
                    require={false}
                  />

                  <Input
                    type="text"
                    field="name_kip"
                    label="Nama Tertera di KIP"
                    register={register}
                    errors={errors}
                    require={false}
                  />
                  <Input
                    type="number"
                    field="no_kip"
                    label="No KIP"
                    register={register}
                    errors={errors}
                    require={false}
                  />
                  <Input
                    type="textarea"
                    field="reason_kip"
                    label="Alasan Layak KIP"
                    register={register}
                    errors={errors}
                    require={false}
                  />
                </div>
              </div>
              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 5 ? "active-form" : "non-active-form"
                } `}
              >
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
                    register={register}
                    errors={errors}
                    data={typeRegistration}
                  />

                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="number"
                      field="hours"
                      label="Jam
                     "
                      register={register}
                      errors={errors}
                    />
                    <Input
                      type="number"
                      field="minute"
                      label="Menit"
                      register={register}
                      errors={errors}
                    />
                  </div>
                  <Input
                    type="number"
                    field="no_examinee"
                    label="No Perserta Ujian"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="no_serial_diploma"
                    label="No. Seri Ijazah"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="text"
                    field="no_serial_skhus"
                    label="No. SKHUS"
                    register={register}
                    errors={errors}
                  />
                  <Input
                    type="select"
                    field="class1"
                    label="Pilihan Kompetensi 1"
                    register={register}
                    errors={errors}
                    data={competency}
                  />
                  <Input
                    type="select"
                    field="class2"
                    label="Pilihan Kompetensi 2"
                    register={register}
                    errors={errors}
                    data={competency}
                  />
                  <Input
                    type="select"
                    field="class3"
                    label="Pilihan Kompetensi 3"
                    register={register}
                    errors={errors}
                    data={competency}
                  />
                  <Input
                    type="select"
                    field="extra1"
                    label="Ekstrakurikuler 1"
                    register={register}
                    errors={errors}
                    data={extracurriculer}
                  />
                  <Input
                    type="select"
                    field="extra2"
                    label="Ekstrakurikuler 2"
                    register={register}
                    errors={errors}
                    data={extracurriculer}
                  />
                  <Input
                    type="select"
                    field="uniform1"
                    label="Baju Olahraga"
                    register={register}
                    errors={errors}
                    data={uniform}
                  />
                  <Input
                    type="select"
                    field="uniform2"
                    label="Baju Wear Pack (Khusus Jurusan TKJ)"
                    register={register}
                    errors={errors}
                    data={uniform}
                  />
                  <Input
                    type="select"
                    field="uniform3"
                    label="Baju Kotak-Kotak"
                    register={register}
                    errors={errors}
                    data={uniform}
                  />
                  <Input
                    type="select"
                    field="uniform4"
                    label="Jaz Alamamater"
                    register={register}
                    errors={errors}
                    data={uniform}
                  />
                </div>
              </div>
              <div
                className={`wrapper-form-group mt-[4rem]  ${
                  currentTab == 7 ? "active-form" : "non-active-form"
                } `}
              >
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-start flex-col">
                    <label
                      htmlFor="nisn"
                      className="pl-3 mb-[0.2em] font-semibold"
                    >
                      Foto Scan Nisn
                    </label>
                    <input
                      id="nisn"
                      type="file"
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_nisn")
                      }
                      className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400  `}
                      required
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <label
                      htmlFor="family_card"
                      className="pl-3 mb-[0.2em] font-semibold"
                    >
                      Foto Scan kartu Keluarga
                    </label>
                    <input
                      type="file"
                      id="family_card"
                      className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400  `}
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_kartu_keluarga")
                      }
                      required
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <label
                      htmlFor="kip"
                      className="pl-3 mb-[0.2em] font-semibold"
                    >
                      Foto Scan KIP
                    </label>
                    <input
                      id="kip"
                      type="file"
                      className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400  `}
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_kip")
                      }
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <label
                      htmlFor="kps"
                      className="pl-3 mb-[0.2em] font-semibold"
                    >
                      Foto Scan KPS
                    </label>
                    <input
                      id="kps"
                      type="file"
                      className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400  `}
                      onChange={(e) =>
                        handleUpload(e.target.files[0], "foto_kps")
                      }
                    />
                  </div>
                  <div className="flex items-start flex-col">
                    <label
                      htmlFor="kks"
                      className="pl-3 mb-[0.2em] font-semibold"
                    >
                      Foto Scan KKS
                    </label>
                    <input
                      id="kks"
                      type="file"
                      className={`border-1 py-2 px-3 focus:ring-0 focus:outline-none rounded-lg border-slate-300 focus:border-slate-400  `}
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
                {currentTab < 7 && (
                  <button
                    className={`px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem]`}
                    onClick={() => setCurrentTab((prev) => prev + 1)}
                    type="button"
                  >
                    Next
                    <IoChevronBackCircleSharp className="text-[1rem] rotate-[180deg]" />
                  </button>
                )}
                {currentTab == 7 && (
                  <button
                    className="px-4 py-2 text-white bg-primary rounded-lg text-[0.8rem]"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EditRegisterStudent;
