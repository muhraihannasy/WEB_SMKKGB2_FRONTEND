import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrYoutube } from "react-icons/gr";
import logo from "../images/logo.png";

const HeaderLandingPage = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  return (
    <header className="lg:px-14 px-6 h-[7.8rem] flex flex-col justify-center max-w-7xl mx-auto">
      <div className=" md:block hidden">
        <div className="flex items-center justify-between border-b-[1px] pb-2 text-[0.8rem]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-slate-500 text-[1rem]" />
              +62 824 2384 23
            </div>
            <div className="flex items-center gap-2">
              <IoLocation className="text-slate-500 text-[1rem]" />
              Jl. H.Ujan, RT.006/RW.007, Duren Jaya, Kec. Bekasi Timur.
            </div>
          </div>
          <div className="flex items-center gap-2 text-[1rem] text-slate-500 ">
            <Link to="">
              <AiFillInstagram />
            </Link>
            <Link to="">
              <GrYoutube />
            </Link>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between mt-[0.5rem]">
        <div>
          <div className=" flex items-center gap-2 ">
            <img src={logo} alt="" className="w-[4rem] object-cover" />
            <h3 className="text-[0.9rem] font-semibold text-primary">
              SMK Karya Guna <br /> Bhakti 2 Bekasi
            </h3>
          </div>
        </div>
        <ul
          className={`flex sm:items-center sm:gap-5 gap-7 items-start  font-medium text-[1rem]  font-poppins sm:relative fixed sm:right-auto sm:top-auto top-0 sm:flex-row flex-col z-[99] bg-white sm:w-auto w-[20rem] sm:h-auto h-full sm:shadow-none shadow-2xl right-0 sm:pr-0 transition-all ${
            activeNavbar
              ? " visible opacity-100"
              : "sm:visible sm:opacity-100 invisible opacity-0"
          }`}
        >
          <li
            className="text-[2rem] cursor-pointer w-full mt-[2rem] px-8 flex justify-end sm:hidden block text-third"
            onClick={() => setActiveNavbar(false)}
          >
            <AiFillCloseCircle className="text-right" />
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link className="">Home</Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden block"></span>
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link>About</Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden block"></span>
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link>PPDB</Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden block"></span>
          </li>
          <li className="flex items-center sm:flex-row flex-col gap-2 sm:pl-0 pl-[3rem] sm:px-0 px-[2rem] w-full sm:mt-0 mt-[1rem]">
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-secondary rounded-lg flex items-center justify-center gap-2 text-[0.8rem] w-full flex-1"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-white bg-third rounded-lg flex items-center gap-2 text-[0.8rem] w-full justify-center flex-1"
            >
              Daftar
            </Link>
          </li>
        </ul>

        <div
          className="text-[1.5rem] cursor-pointer sm:hidden block"
          onClick={() => setActiveNavbar(true)}
        >
          <RxHamburgerMenu />
        </div>
      </nav>
    </header>
  );
};

export default HeaderLandingPage;
