import { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate } from "react-router-dom";

import { MdDelete, MdError } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Spinner from "react-spinkit";
import { FecthData, APIBASEURL, requestSetting } from "../../../service/API";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";

const AddJobs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [qualifications, setQualifications] = useState([""]);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    job_category_id: "",
    name: "",
    company_name: "",
    description: "",
    qualification: "",
    location: "",
  });

  const editorRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(e, qualifications) {
    e.preventDefault();
    setIsloading(true);

    const data = { ...formData };
    data.qualification = qualifications.join("|");

    const req = await FecthData(
      `${APIBASEURL}/admin/jobs`,
      requestSetting("POST", data)
    );
    const res = req;

    setTimeout(() => {
      if (res.errors && Object.keys(res.errors).length > 0)
        setErrors(res.errors);
      if (res.status == 200) {
        setErrors({});
        navigate("/dashboard/lowongan");
      }

      setIsloading(false);
    }, 1000);
  }

  if (isLoading) {
    return (
      <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
        <Spinner name="line-scale-pulse-out" />
        Loading....
      </div>
    );
  }
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Form
              ref={editorRef}
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              qualifications={qualifications}
              setQualifications={setQualifications}
              onSubmit={(e) => handleSubmit(e, qualifications)}
            />
          </div>
        </main>
      </div>
    </div>
  );
};

function Form({
  formData,
  setFormData,
  ref,
  qualifications,
  setQualifications,
  onSubmit,
  errors,
}) {
  let newArrQualification = [...qualifications];

  function handleDeleteQulification(index) {
    setQualifications([]);
    let qualificationss = newArrQualification.filter((item, i) => i != index);

    setQualifications(qualificationss);
  }

  return (
    <form
      className="bg-white shadow-lg rounded-[10px] px-[2rem] py-[2rem] xl:w-[60rem] mx-auto"
      onSubmit={(e) => onSubmit(e, qualifications)}
    >
      <Link
        className="w-max h-[2.5rem] text-white pt-2 px-5 bg-orange-400 block rounded-[4px] mb-[30px]"
        to="/dashboard/lowongan"
      >
        <div className="flex items-center gap-2">
          <IoChevronBackCircleSharp className="text-[1.2rem]" />
          <span>Kembali</span>
        </div>
      </Link>
      <h2 className="font text-[1.3rem] mb-[1.5rem]">
        Tambah Lowongan Pekerjaan
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-[1rem]">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-[6px] text-[0.9rem]">
            Nama Pekerjaan
          </label>
          <input
            id="name"
            type="text"
            className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
              errors.name && errors.name[0]
                ? "border-red-500"
                : "border-slate-300"
            }`}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <p className="text-slate-400 text-[0.7rem] mt-[8px] flex items-center gap-2">
            Cth: Staf Accounting
            <span
              className={`text-red-500 text-[0.7rem] flex items-center  ${
                errors.name ? "visible " : "invisible "
              }`}
            >
              <MdError className="text-[1.2rem] mr-1" />
              {errors.name ? errors.name[0] : ""}
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="company_name" className="mb-[6px] text-[0.9rem]">
            Nama Perusahaan
          </label>
          <input
            id="company_name"
            type="text"
            className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
              errors.company_name && errors.company_name[0]
                ? "border-red-500"
                : "border-slate-300"
            }`}
            onChange={(e) =>
              setFormData({ ...formData, company_name: e.target.value })
            }
          />
          <p className="text-slate-400 text-[0.7rem] mt-[8px] flex items-center gap-2">
            Cth: PT Jaya Mukti
            <span
              className={`text-red-500 text-[0.7rem] flex items-center ${
                errors.company_name ? "visible " : "invisible "
              }`}
            >
              <MdError className="text-[1.2rem] mr-1" />
              {errors.company_name ? errors.company_name[0] : ""}
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="job_category_id" className="mb-[6px] text-[0.9rem]">
            Kategori
          </label>
          <select
            name=""
            id="job_category_id"
            className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
              errors.job_category_id && errors.job_category_id[0]
                ? "border-red-500"
                : "border-slate-300"
            }`}
            onChange={(e) =>
              setFormData({ ...formData, job_category_id: e.target.value })
            }
          >
            <option value="">Pilih Kategori</option>
            <option value="1">Sofware Enginner</option>
            <option value="2">IT</option>
            <option value="3">Accounting</option>
          </select>
          <span
            className={`text-red-500 text-[0.7rem] mt-2 flex items-center ${
              errors.job_category_id ? "visible " : "invisible "
            }`}
          >
            <MdError className="text-[1.2rem] mr-1" />
            {errors.job_category_id ? errors.job_category_id[0] : ""}
          </span>
        </div>
        <div className="flex flex-col">
          <label htmlFor="location" className="mb-[6px] text-[0.9rem]">
            Lokasi
          </label>
          <input
            id="location"
            type="text"
            className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
              errors.location && errors.location[0]
                ? "border-red-500"
                : "border-slate-300"
            }`}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
          <p className="text-slate-400 text-[0.7rem] mt-[8px] flex items-center gap-2">
            Cth: Jakarta
            <span
              className={`text-red-500 text-[0.7rem] flex items-center  ${
                errors.location ? "visible " : "invisible "
              }`}
            >
              <MdError className="text-[1.2rem] mr-1" />
              {errors.location ? errors.location[0] : ""}
            </span>
          </p>
        </div>
      </div>

      <RichTextEditor
        ref={ref}
        onChangeContent={(content) =>
          setFormData({ ...formData, description: content })
        }
        label="Deskripsi"
      />

      <div className="mt-[2rem]">
        <div className="flex items-center justify-between w-[25rem]">
          <label htmlFor="" className="block mb-[6px] text-[0.9rem]">
            Kualifikasi
          </label>
        </div>
        {qualifications.map((item, index) => {
          return (
            <div className="mb-4 flex items-center ">
              <input
                type="text"
                className="input-style w-full"
                onChange={(e) => {
                  newArrQualification[index] = e.target.value;
                  setQualifications(newArrQualification);
                }}
                value={item}
              />

              {qualifications.length > 1 && (
                <button
                  className="ml-6 bg-red-600 px-3 py-3 rounded-[4px] text-white"
                  type="button"
                  onClick={() => handleDeleteQulification(index)}
                >
                  <MdDelete />
                </button>
              )}
            </div>
          );
        })}
        <span
          className={`text-red-500 text-[0.7rem] flex items-center  ${
            errors.qualification ? "visible mb-4" : "invisible mb-0"
          }`}
        >
          <MdError className="text-[1.2rem] mr-1" />
          {errors.qualification ? errors.qualification[0] : ""}
        </span>
        <button
          className="flex items-center gap-2 bg-primary text-white px-5 py-1.5 rounded-[4px] text-[14px]"
          onClick={() => setQualifications((prev) => [...prev, ""])}
          type="button"
        >
          Tambah Kualifikasi
          <IoIosAddCircle className="text-[1.5rem]" />
        </button>
      </div>

      <button className="block bg-primary text-white px-6 py-2 ml-auto mt-[2rem] w-max rounded-[4px] transition-all hover:bg-secondary">
        Submit
      </button>
    </form>
  );
}
const RichTextEditor = ({ ref, onChangeContent, label }) => {
  const buttons = [
    "undo",
    "redo",
    "|",
    "bold",
    "strikethrough",
    "underline",
    "italic",
    "|",
    "superscript",
    "subscript",
    "|",
    "align",
    "|",
    "ul",
    "ol",
    "outdent",
    "indent",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "link",
    "|",
    "hr",
    "eraser",
    "copyformat",
    "|",
    "fullsize",
  ];

  const editorConfig = {
    height: 642,
  };
  return (
    <>
      <label htmlFor="" className="block mb-[6px] text-[0.9rem]">
        {label}
      </label>
      <JoditEditor
        ref={ref}
        onChange={(content) => onChangeContent(content)}
        className="h-[50rem]"
      />
    </>
  );
};

export default AddJobs;
