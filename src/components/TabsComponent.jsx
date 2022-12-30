import React, { useState } from "react";

const TabsComponent = ({ currentTab, setCurrentTab }) => {
  return (
    <ul className="flex items-center gap-[px] pb-2 border-b overflow-x-auto lg:w-max whitespace-nowrap">
      <li
        className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
          currentTab == 1
            ? "bg-third text-white border-transparent"
            : "border-slate-100"
        }`}
        onClick={() => setCurrentTab(1)}
      >
        Data Murid
      </li>
      <li
        className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
          currentTab == 2
            ? "bg-third text-white border-transparent"
            : "border-slate-100"
        }`}
        onClick={() => setCurrentTab(2)}
      >
        Data Orang Tua/Wali
      </li>
      <li
        className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
          currentTab == 3
            ? "bg-third text-white border-transparent"
            : "border-slate-100"
        }`}
        onClick={() => setCurrentTab(3)}
      >
        Beasiswa
      </li>
      <li
        className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
          currentTab == 4
            ? "bg-third text-white border-transparent"
            : "border-slate-100"
        }`}
        onClick={() => setCurrentTab(4)}
      >
        Prestasi
      </li>
      <li
        className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
          currentTab == 5
            ? "bg-third text-white border-transparent"
            : "border-slate-100"
        }`}
        onClick={() => setCurrentTab(5)}
      >
        Registrasi
      </li>
      <li
        className={`cursor-pointer px-4 py-2 rounded-tl-md rounded-tr-md border-t-[2px] border-l-[2px]  transition-all ${
          currentTab == 6
            ? "bg-third text-white border-transparent"
            : "border-slate-100"
        }`}
        onClick={() => setCurrentTab(6)}
      >
        Berkas
      </li>
    </ul>
  );
};

export default TabsComponent;
