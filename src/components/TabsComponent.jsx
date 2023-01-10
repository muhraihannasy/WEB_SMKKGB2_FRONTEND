import { useLocation } from "react-router-dom";

const TabsComponent = ({ currentTab, setCurrentTab }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      {pathname.includes("dashboard/ppdb/admin/student/add") && (
        <ul className="flex items-center gap-[px] pb-2 border-b overflow-x-auto  whitespace-nowrap">
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 1
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(1)}
          >
            Akun Murid
          </li>

          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 2
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(2)}
          >
            Data Murid
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 3
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(3)}
          >
            Data Orang Tua/Wali
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 4
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(4)}
          >
            Beasiswa
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 5
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(5)}
          >
            Prestasi
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 6
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(6)}
          >
            Registrasi
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 7
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(7)}
          >
            Berkas
          </li>
        </ul>
      )}
      {pathname.includes("dashboard/ppdb/student/add") && (
        <ul className="flex items-center gap-[px] pb-2 border-b overflow-x-auto  whitespace-nowrap">
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 1
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(1)}
          >
            Data Murid
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 2
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(2)}
          >
            Data Orang Tua/Wali
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 3
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(3)}
          >
            Beasiswa
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 4
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(4)}
          >
            Prestasi
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 5
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(5)}
          >
            Registrasi
          </li>
          <li
            className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
              currentTab == 6
                ? "bg-orange-400 text-white border-transparent"
                : "border-slate-100"
            }`}
            onClick={() => setCurrentTab(6)}
          >
            Berkas
          </li>
        </ul>
      )}
    </>
  );
};

export default TabsComponent;
