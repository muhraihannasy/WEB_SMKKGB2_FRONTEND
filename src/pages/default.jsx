import React, { useState } from "react";
import Header from "../../partials/Header";
import Sidebar from "../../partials/Sidebar";

const Default = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar  */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content Area */}

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />a
        <main>
          {/* Welcome banner */}
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto"></div>
          <h1>sad</h1>
        </main>
      </div>
    </div>
  );
};

export default Default;
