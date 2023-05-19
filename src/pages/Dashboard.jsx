import React, { useEffect, useState } from "react";
import { APIBASEURL, FecthData, requestSetting } from "../service/API";


import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
// import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
// import DashboardAvatars from "../partials/dashboard/DashboardAvatars";
// import FilterButton from "../partials/actions/FilterButton";
// import Datepicker from "../partials/actions/Datepicker";
import DashboardCard01 from "../partials/dashboard/DashboardCard01";
import DashboardCard02 from "../partials/dashboard/DashboardCard02";
import DashboardCard03 from "../partials/dashboard/DashboardCard03";
// import DashboardCard04 from "../partials/dashboard/DashboardCard04";
// import DashboardCard05 from "../partials/dashboard/DashboardCard05";
import DashboardCard06 from "../partials/dashboard/DashboardCard06";
import DashboardCard07 from "../partials/dashboard/DashboardCard07";
// import DashboardCard08 from "../partials/dashboard/DashboardCard08";
// import DashboardCard09 from "../partials/dashboard/DashboardCard09";
// import DashboardCard10 from "../partials/dashboard/DashboardCard10";
// import DashboardCard11 from "../partials/dashboard/DashboardCard11";
// import DashboardCard12 from "../partials/dashboard/DashboardCard12";
// import DashboardCard13 from "../partials/dashboard/DashboardCard13";


function Dashboard() {
  const [data, setData] = useState({
    amount_registration: 0,
    student_isAccepted: 0,
    student_isNotAccepted: 0,
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
      (async () => {
        const result = await FecthData(
          `${APIBASEURL}/admin/dashboard`,
          requestSetting("GET")
        );

        setData(result)
        console.log(result)
    })();
  }, []);

  return (
    <div className="flex h-screen pb-6 overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto ">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="pt-[1em] px-[3rem]">
          {/* Dashboard actions */}
          <div className="mb-8 sm:flex sm:justify-between sm:items-center">
            {/* Left: Avatars */}
            {/* <DashboardAvatars /> */}

            {/* Right: Actions */}
            {/* <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end"> */}
            {/* Filter button */}
            {/* <FilterButton /> */}
            {/* Datepicker built with flatpickr */}
            {/* <Datepicker /> */}
            {/* Add view button */}
            {/* <button className="text-white bg-indigo-500 btn hover:bg-indigo-600">
                <svg
                  className="w-4 h-4 opacity-50 fill-current shrink-0"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span className="hidden ml-2 xs:block">Add view</span>
              </button>
            </div> */}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-12 gap-6">
            {/* Line chart (Acme Plus) */}
            <DashboardCard01 amount={data.amount_registration}  />
            {/* Line chart (Acme Advanced) */}
            <DashboardCard02 amount={data.student_isAccepted} />
            {/* Line chart (Acme Professional) */}
            <DashboardCard03 amount={data.student_isNotAccepted} />
            {/* Bar chart (Direct vs Indirect) */}
            {/* <DashboardCard04 /> */}
            {/* Line chart (Real Time Value) */}
            {/* <DashboardCard05 /> */}
            {/* Doughnut chart (Top Countries) */}
            {/* <DashboardCard06 /> */}
            {/* Table (Top Channels) */}
            {/* <DashboardCard07 /> */}
            {/* Line chart (Sales Over Time) */}
            {/* <DashboardCard08 /> */}
            {/* Stacked bar chart (Sales VS Refunds) */}
            {/* <DashboardCard09 /> */}
            {/* Card (Customers) */}
            {/* <DashboardCard10 /> */}
            {/* Card (Reasons for Refunds) */}
            {/* <DashboardCard11 /> */}
            {/* Card (Recent Activity) */}
            {/* <DashboardCard12 /> */}
            {/* Card (Income/Expenses) */}
            {/* <DashboardCard13 /> */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
