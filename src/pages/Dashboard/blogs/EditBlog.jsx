import { useEffect, useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdError } from "react-icons/md";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import Spinner from "react-spinkit";
import { FecthData, APIBASEURL, requestSetting } from "../../../service/API";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";
import { Toaster } from "react-hot-toast";
import { notify } from "../../../utils/Utils";

const EditBlog = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    blog_category_id: "",
    title: "",
    body: "",
    image: "",
  });
  const { id } = useParams();
  const editorRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);

    const req = await FecthData(
      `${APIBASEURL}/admin/blogs/${id}`,
      requestSetting("PUT", formData)
    );
    const res = req;

    setTimeout(() => {
      if (res.errors && Object.keys(res.errors).length > 0)
        setErrors(res.errors);
      if (res.status == 200) {
        setIsLoading(false);
        setErrors({});
        notify("Berhasil Mengubah Artikel", "success");
        navigate("/dashboard/artikel");
      }
    }, 1000);
  }
  async function handleUpload(file) {
    const token = JSON.parse(localStorage.getItem("usr")).acctkn;

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    const temp = formData.image.split("/");
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
        setFormData({
          ...formData,
          image: result.url,
        });
      })
      .catch((error) => console.log("error", error));
  }

  async function getCategories() {
    const req = await FecthData(
      `${APIBASEURL}/admin/blog_categories`,
      requestSetting("GET")
    );
    const res = req;

    setTimeout(() => {
      setCategories(res);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    async function getData() {
      const req = await FecthData(
        `${APIBASEURL}/admin/blogs/${id}`,
        requestSetting("GET")
      );
      const res = req;

      setTimeout(() => {
        const { title, blog_category_id, body, image } = res[0];

        setFormData({
          title,
          blog_category_id,
          body,
          image,
        });
        setIsLoading(false);
      }, 1000);
    }

    (async () => {
      getData();
      getCategories();
    })();
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <Form
              ref={editorRef}
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              categories={categories}
              onSubmit={(e) => handleSubmit(e)}
              onUpload={(file) => handleUpload(file)}
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
  onSubmit,
  errors,
  onUpload,
  categories,
}) {
  return (
    <form
      className="bg-white shadow-lg rounded-[10px] px-[2rem] py-[2rem] xl:w-[60rem] mx-auto"
      onSubmit={(e) => onSubmit(e)}
    >
      <Link
        className="w-max h-[2.5rem] text-white pt-2 px-5 bg-orange-400 block rounded-[4px] mb-[30px]"
        to="/dashboard/artikel"
      >
        <div className="flex items-center gap-2">
          <IoChevronBackCircleSharp className="text-[1.2rem]" />
          <span>Kembali</span>
        </div>
      </Link>
      <h2 className="font text-[1.3rem] mb-[1.5rem]">Tambah Artikel</h2>
      <div className="flex flex-col">
        <img
          src={formData.image}
          alt="no image"
          className="w-[8rem] h-[8rem] mb-[10px] border-4 rounded-[4px]"
        />
        <label htmlFor="image" className="mb-[6px] text-[0.9rem]">
          image
        </label>
        <input
          id="image"
          type="file"
          className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
            errors.image && errors.image[0]
              ? "border-red-500"
              : "border-slate-300"
          }`}
          onChange={(e) => onUpload(e.target.files[0])}
        />
        <span
          className={`text-red-500 text-[0.7rem] mt-2 flex items-center ${
            errors.image ? "visible " : "invisible "
          }`}
        >
          <MdError className="text-[1.2rem] mr-1" />
          {errors.image ? errors.image[0] : ""}
        </span>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-[1rem]">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-[6px] text-[0.9rem]">
            Title
          </label>
          <input
            id="title"
            type="text"
            className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
              errors.title && errors.title[0]
                ? "border-red-500"
                : "border-slate-300"
            }`}
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <p className="text-slate-400 text-[0.7rem] mt-[8px] flex items-center gap-2">
            Cth: Staf Accounting
            <span
              className={`text-red-500 text-[0.7rem] flex items-center  ${
                errors.title ? "visible " : "invisible "
              }`}
            >
              <MdError className="text-[1.2rem] mr-1" />
              {errors.title ? errors.title[0] : ""}
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="blog_category_id" className="mb-[6px] text-[0.9rem]">
            Kategori
          </label>
          <select
            name=""
            id="blog_category_id"
            className={`focus:outline-none focus:ring-0 rounded-[4px]  ${
              errors.blog_category_id && errors.blog_category_id[0]
                ? "border-red-500"
                : "border-slate-300"
            }`}
            value={formData.blog_category_id}
            onChange={(e) =>
              setFormData({ ...formData, blog_category_id: e.target.value })
            }
          >
            <option value="">Pilih Kategori</option>
            {categories.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <span
            className={`text-red-500 text-[0.7rem] mt-2 flex items-center ${
              errors.blog_category_id ? "visible " : "invisible "
            }`}
          >
            <MdError className="text-[1.2rem] mr-1" />
            {errors.blog_category_id ? errors.blog_category_id[0] : ""}
          </span>
        </div>
      </div>

      <RichTextEditor
        ref={ref}
        onChangeContent={(content) =>
          setFormData({ ...formData, body: content })
        }
        label="Konten"
        value={formData.body}
      />

      <button className="block bg-primary text-white px-6 py-2 ml-auto mt-[2rem] w-max rounded-[4px] transition-all hover:bg-secondary">
        Submit
      </button>
    </form>
  );
}
const RichTextEditor = ({ ref, onChangeContent, label, value }) => {
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
    height: 542,
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
        value={value}
      />
    </>
  );
};

export default EditBlog;
