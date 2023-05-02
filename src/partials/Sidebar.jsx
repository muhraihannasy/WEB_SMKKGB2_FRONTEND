import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGroup";

// Images
import logo from "../images/logo.png";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [menuPermission, setMenuPermission] = useState([]);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  useEffect(() => {
    const menu_permission = localStorage.getItem("menu_permission");
    setMenuPermission(menu_permission);
  }, []);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <button
          ref={trigger}
          className="lg:hidden text-slate-500 hover:text-slate-400 mb-[1.2rem]"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
          </svg>
        </button>
        <div className="flex justify-between pr-3 mb-10 sm:px-2">
          {/* Close button */}

          {/* Logo */}
          <NavLink end to="/" className="flex items-center gap-3 ">
            <img
              src={logo}
              alt="Logo SMK Karya Guna Bhakti 2 Kota Bekasi"
              className="w-[2.8rem] bg-white rounded-full  object-cover"
            />
            <h2 className="text-white font-medium text-[0.8rem]">
              SMK Karya Guna <br />
              Bhakti 2 Bekasi
            </h2>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-6">
          {/* Pages group */}
          <div>
            <ul className="">
              {menuPermission.includes("dashboard") ||
              menuPermission.includes("all") ? (
                <li className={`px-3 py-2 rounded-sm mb-[0.5rem] last:mb-0 `}>
                  <NavLink
                    end
                    to="/dashboard"
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes("admin") && "hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname === "/dashboard" && "!text-indigo-500"
                          }`}
                          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                        />
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname === "/" && "text-indigo-600"
                          }`}
                          d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname === "/" && "text-indigo-200"
                          }`}
                          d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                        />
                      </svg>
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Dashboard
                      </span>
                    </div>
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {/* PPDB */}
              {menuPermission.includes("ppdb") ||
              menuPermission.includes("all") ? (
                <li className={`px-3 py-2 rounded-sm mb-[0.5rem] last:mb-0 `}>
                  <NavLink
                    end
                    to="/dashboard/ppdb"
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes("admin") && "hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("ppdb") && "text-indigo-500"
                          }`}
                          d="M18.974 8H22a2 2 0 012 2v6h-2v5a1 1 0 01-1 1h-2a1 1 0 01-1-1v-5h-2v-6a2 2 0 012-2h.974zM20 7a2 2 0 11-.001-3.999A2 2 0 0120 7zM2.974 8H6a2 2 0 012 2v6H6v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5H0v-6a2 2 0 012-2h.974zM4 7a2 2 0 11-.001-3.999A2 2 0 014 7z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("ppdb") && "text-indigo-300"
                          }`}
                          d="M12 6a3 3 0 110-6 3 3 0 010 6zm2 18h-4a1 1 0 01-1-1v-6H6v-6a3 3 0 013-3h6a3 3 0 013 3v6h-3v6a1 1 0 01-1 1z"
                        />
                      </svg>
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        PPDB
                      </span>
                    </div>
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              {/* Jobs */}

              {menuPermission.includes("loker") ||
              menuPermission.includes("all") ? (
                <SidebarLinkGroup
                  activecondition={pathname === "/dashboard/lowongan"}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                            pathname === "/dashboard/lowongan" &&
                            "hover:text-slate-200"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                className="w-6 h-6 shrink-0"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  className={`fill-current text-slate-400 ${
                                    pathname === "/dashboard/lowongan" &&
                                    "!text-indigo-500"
                                  }`}
                                  d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                                />
                                <path
                                  className={`fill-current text-slate-600 ${
                                    pathname === "/dashboard/lowongan" &&
                                    "text-indigo-600"
                                  }`}
                                  d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                                />
                                <path
                                  className={`fill-current text-slate-400 ${
                                    pathname === "/dashboard/lowongan" &&
                                    "text-indigo-200"
                                  }`}
                                  d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                                />
                              </svg>
                              <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Lowongan Kerja
                              </span>
                            </div>
                            <div className="flex ml-2 shrink-0">
                              <svg
                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                  open && "rotate-180"
                                }`}
                                viewBox="0 0 12 12"
                              >
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                            <li className="mb-1 bg-transparent last:mb-0">
                              <NavLink
                                end
                                to="/dashboard/lowongan"
                                className={({ isActive }) =>
                                  "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                  (isActive ? "!text-indigo-500" : "")
                                }
                              >
                                <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                  List Lowogan
                                </span>
                              </NavLink>
                            </li>
                            <li className="mb-1 bg-transparent last:mb-0">
                              <NavLink
                                end
                                to="/dashboard/kategori_lowongan"
                                className={({ isActive }) =>
                                  "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                  (isActive ? "!text-indigo-500" : "")
                                }
                              >
                                <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                  Kategori Lowongan
                                </span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              ) : (
                ""
              )}

              {/* Blog */}
              {menuPermission.includes("artikel") ||
              menuPermission.includes("all") ? (
                <SidebarLinkGroup
                  activecondition={pathname === "/dashboard/artikel"}
                >
                  {(handleClick, open) => {
                    return (
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                            pathname === "/dashboard/artikel" &&
                            "hover:text-slate-200"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <svg
                                className="w-6 h-6 shrink-0"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  className={`fill-current text-slate-400 ${
                                    pathname === "/dashboard/artikel" &&
                                    "!text-indigo-500"
                                  }`}
                                  d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                                />
                                <path
                                  className={`fill-current text-slate-600 ${
                                    pathname === "/dashboard/artikel" &&
                                    "text-indigo-600"
                                  }`}
                                  d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                                />
                                <path
                                  className={`fill-current text-slate-400 ${
                                    pathname === "/dashboard/artikel" &&
                                    "text-indigo-200"
                                  }`}
                                  d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                                />
                              </svg>
                              <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Artikel
                              </span>
                            </div>
                            <div className="flex ml-2 shrink-0">
                              <svg
                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                  open && "rotate-180"
                                }`}
                                viewBox="0 0 12 12"
                              >
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                              </svg>
                            </div>
                          </div>
                        </a>
                        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                            <li className="mb-1 bg-transparent last:mb-0">
                              <NavLink
                                end
                                to="/dashboard/artikel"
                                className={({ isActive }) =>
                                  "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                  (isActive ? "!text-indigo-500" : "")
                                }
                              >
                                <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                  List Artikel
                                </span>
                              </NavLink>
                            </li>
                            <li className="mb-1 bg-transparent last:mb-0">
                              <NavLink
                                end
                                to="/dashboard/kategori_artikel"
                                className={({ isActive }) =>
                                  "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                  (isActive ? "!text-indigo-500" : "")
                                }
                              >
                                <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                  Kategori Artikel
                                </span>
                              </NavLink>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              ) : (
                ""
              )}

              {menuPermission.includes("admin") ||
              menuPermission.includes("all") ? (
                <li className={`px-3 py-2 rounded-sm mb-[0.5rem] last:mb-0 `}>
                  <NavLink
                    end
                    to="/dashboard/admin"
                    className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                      pathname.includes("dashboard/admin") &&
                      "hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center">
                      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("dashboard/admin") &&
                            "text-indigo-500"
                          }`}
                          d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("dashboard/admin") &&
                            "text-indigo-300"
                          }`}
                          d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                        />
                        <path
                          className={`fill-current text-slate-600 ${
                            pathname.includes("dashboard/admin") &&
                            "text-indigo-500"
                          }`}
                          d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                        />
                        <path
                          className={`fill-current text-slate-400 ${
                            pathname.includes("dashboard/admin") &&
                            "text-indigo-300"
                          }`}
                          d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                        />
                      </svg>
                      <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                        Admin
                      </span>
                    </div>
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {/* CMS */}
              {/* <SidebarLinkGroup activecondition={pathname === "/cms"}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                          pathname === "/cms" && "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              id=""
                              className="w-6 h-6 shrink-0 "
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname === "/cms" && "!text-indigo-500"
                                }`}
                                d="m356 52v-17a35 35 0 0 0 -35-35h-240a35 35 0 0 0 -35 35v360a35 35 0 0 0 35 35h45v-313a65.08 65.08 0 0 1 65-65z"
                              />
                              <path
                                d="m431 82h-240a35 35 0 0 0 -35 35v360a35 35 0 0 0 35 35h240a35 35 0 0 0 35-35v-360a35 35 0 0 0 -35-35zm-50 310h-140a15 15 0 0 1 0-30h140a15 15 0 0 1 0 30zm0-80h-140a15 15 0 0 1 0-30h140a15 15 0 0 1 0 30zm0-80h-140a15 15 0 0 1 0-30h140a15 15 0 0 1 0 30z"
                                className={`fill-current text-slate-500 ${
                                  pathname === "/cms" && "!text-indigo-500"
                                }`}
                              />
                            </svg>
                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              CMS
                            </span>
                          </div>
                          <div className="flex ml-2 shrink-0">
                            <div className="flex ml-2 shrink-0">
                              <svg
                                className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                  open && "rotate-180"
                                }`}
                                viewBox="0 0 12 12"
                              >
                                <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/cms/home"
                              className={({ isActive }) =>
                                "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                (isActive ? "!text-indigo-500" : "")
                              }
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Home
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/cms/about"
                              className={({ isActive }) =>
                                "block text-slate-400 hover:text-slate-200 transition duration-150 truncate " +
                                (isActive ? "!text-indigo-500" : "")
                              }
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                About Us
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup> */}

              {/* Settings */}
              {/* <SidebarLinkGroup activecondition={pathname.includes("admin")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                          pathname.includes("admin") && "hover:text-slate-200"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className="w-6 h-6 shrink-0"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes("admin") &&
                                  "text-indigo-500"
                                }`}
                                d="M19.714 14.7l-7.007 7.007-1.414-1.414 7.007-7.007c-.195-.4-.298-.84-.3-1.286a3 3 0 113 3 2.969 2.969 0 01-1.286-.3z"
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes("admin") &&
                                  "text-indigo-300"
                                }`}
                                d="M10.714 18.3c.4-.195.84-.298 1.286-.3a3 3 0 11-3 3c.002-.446.105-.885.3-1.286l-6.007-6.007 1.414-1.414 6.007 6.007z"
                              />
                              <path
                                className={`fill-current text-slate-600 ${
                                  pathname.includes("admin") &&
                                  "text-indigo-500"
                                }`}
                                d="M5.7 10.714c.195.4.298.84.3 1.286a3 3 0 11-3-3c.446.002.885.105 1.286.3l7.007-7.007 1.414 1.414L5.7 10.714z"
                              />
                              <path
                                className={`fill-current text-slate-400 ${
                                  pathname.includes("admin") &&
                                  "text-indigo-300"
                                }`}
                                d="M19.707 9.292a3.012 3.012 0 00-1.415 1.415L13.286 5.7c-.4.195-.84.298-1.286.3a3 3 0 113-3 2.969 2.969 0 01-.3 1.286l5.007 5.006z"
                              />
                            </svg>
                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Admins
                            </span>
                          </div>
                          <div className="flex ml-2 shrink-0">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/"
                              className="block truncate transition duration-150 text-slate-400 hover:text-slate-200"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                My Account
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup> */}
            </ul>
          </div>

          {/* More group */}
          {/* <div>
            <h3 className="pl-3 text-xs font-semibold uppercase text-slate-500">
              <span
                className="hidden w-6 text-center lg:block lg:sidebar-expanded:hidden 2xl:hidden"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                More
              </span>
            </h3>
            <ul className="mt-3">
              Home
              <li
                className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                  pathname.includes("admin") && "bg-slate-900"
                }`}
              >
                <NavLink
                  end
                  to="/dashboard/ppdb"
                  className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                    pathname.includes("admin") && "hover:text-slate-200"
                  }`}
                >
                  <div className="flex items-center">
                    <RiAdminFill
                      className={`text-[1.5rem] ${
                        pathname.includes("ppdb") && "text-indigo-500"
                      }`}
                    />

                    <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                      Admins
                    </span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Expand / collapse button */}
        <div className="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                viewBox="0 0 24 24"
              >
                <path
                  className="text-slate-400"
                  d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
