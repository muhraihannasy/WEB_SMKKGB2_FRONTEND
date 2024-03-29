import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { BiEdit } from "react-icons/bi";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { RiEyeFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "react-spinkit";
import Header from "../../../partials/Header";
import Sidebar from "../../../partials/Sidebar";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";
import { notify } from "../../../utils/Utils";

const Blogs = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [lastRefresh, setLastRefresh] = useState(new Date());
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function handleDelete(id) {
    setIsLoading(true);

    const req = await FecthData(
      `${APIBASEURL}/admin/blogs/${id}`,
      requestSetting("DELETE")
    );
    const res = req;

    setTimeout(() => {
      if (res) {
        setLastRefresh(new Date());
        setIsLoading(false);
      }
    }, 500);
  }

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const req = await FecthData(
        `${APIBASEURL}/admin/blogs`,
        requestSetting("GET")
      );
      const res = req;

      setTimeout(() => {
        setData(res);
        setIsLoading(false);
      }, 1000);
    }

    (async () => getData())();
  }, [lastRefresh]);

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

      {/* Toast */}
      <Toaster position="top-right" reverseOrder={false} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Link
              className="w-max h-[2.5rem] text-white pt-2 px-5 bg-orange-400 block rounded-[4px] mb-[30px] ml-auto mt-[2.5rem]"
              to="/dashboard/tambah_artikel"
            >
              <div className="flex items-center gap-2">
                <span>Tambah Artikel</span>
                <IoMdAddCircle className="text-[1.2rem]" />
              </div>
            </Link>

            <section className=" overflow-x-auto pb-[2rem]">
              <Table
                navigate={navigate}
                items={data}
                handleDelete={handleDelete}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

function Table({ navigate, items, handleDelete }) {
  return (
    <table className=" table-auto lg:w-full w-[55rem] mt-[1.5rem] mx-auto ">
      <thead className="text-xs font-semibold uppercase text-slate-400 bg-slate-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Title</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">kategori</div>
          </th>

          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Pembuat</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-center">Action </div>
          </th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-slate-100 pt-2">
        {items.map((item, i) => {
          const { id, title, maker, category } = item;
          return (
            <tr className="h-[4rem]" key={i}>
              <td className="p-2 whitespace-nowrap sm:w-[24rem]">
                {title.length > 30 ? title.slice(0, 40) + "..." : title}
              </td>

              <td className="p-2 whitespace-nowrap">{category}</td>
              <td className="p-2 whitespace-nowrap">{maker}</td>
              <td className="p-2 whitespace-nowrap flex justify-center">
                <div className="flex items-center gap-2 pt-3">
                  <button
                    className="bg-blue-500 p-1 rounded-xl text-lg text-white"
                    onClick={() => navigate(`/dashboard/artikel`)}
                  >
                    <RiEyeFill />
                  </button>
                  <button
                    className="bg-yellow-500 p-1 rounded-xl text-lg text-white"
                    onClick={() => navigate(`/dashboard/edit_artikel/${id}`)}
                  >
                    <BiEdit />
                  </button>
                  <button
                    className="bg-red-500 p-1 rounded-xl text-lg text-white"
                    onClick={() => handleDelete(id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Blogs;
