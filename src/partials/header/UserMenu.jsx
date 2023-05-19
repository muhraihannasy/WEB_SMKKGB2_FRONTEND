import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Transition from "../../utils/Transition";

import UserAvatar from "../../images/user-avatar-32.png";
import { APIBASEURL, FecthData, requestSetting } from "../../service/API";
import { data } from "autoprefixer";
import { UserContext } from "../../context/UserContext";

function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { name, logout } = useContext(UserContext);
  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handleLogout = async () => {
    const request = await FecthData(
      `${APIBASEURL}/auth/logout`,
      requestSetting("POST")
    );

    setTimeout(() => {
      if (request) {
        logout();
      }
    }, 500);
  };

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex items-center justify-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <img
          className="w-8 h-8 rounded-full"
          src={UserAvatar}
          width="32"
          height="32"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="ml-2 text-sm font-medium truncate group-hover:text-slate-800">
            {name}
          </span>
          <svg
            className="w-3 h-3 ml-1 fill-current shrink-0 text-slate-400"
            viewBox="0 0 12 12"
          >
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <ul>
            <li>
              <Link
                className="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                to="/"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Settings
              </Link>
            </li>
            <li>
              <button
                className="flex items-center px-3 py-1 text-sm font-medium text-indigo-500 hover:text-indigo-600"
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  // handleLogout();
                }}
              >
                Sign Out
              </button>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default UserMenu;
