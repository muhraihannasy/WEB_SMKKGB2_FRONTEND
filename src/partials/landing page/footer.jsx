import React from "react";
import Logo from "../../images/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { GrYoutube } from "react-icons/gr";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondary">
      <div className="text-white container mt-[8rem] py-[4rem] flex flex-wrap gap-[2rem]">
        <div className="md:mb-[0] mb-[2rem]">
          <img src={Logo} alt="" className="w-[4rem] mb-[1.2rem]" />
          <h4 className="w-[20rem] mt-[0.5rem] mb-[1.2rem]">
            SMK Karya Guna Bhakti 2 Bekasi | SMK Bisa! KGB 2 Luar Biasa!
          </h4>
          <div className="mb-[1.5rem]">
            <div className="flex items-center gap-2 mb-[0.8rem]">
              <FaPhoneAlt className="text-[1.5rem]" />
              +62 824 2384 23
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-[1.5rem]" />
              informasi@smkkgb2.sch.id
            </div>
          </div>
          <div className="flex gap-2 text-fourty">
            <Link
              to=""
              className="w-[2rem] h-[2rem] bg-white flex items-center justify-center rounded-full text-[1.3rem]"
            >
              <AiFillInstagram />
            </Link>
            <Link
              to=""
              className="w-[2rem] h-[2rem] bg-white flex items-center justify-center rounded-full text-[1.1rem]"
            >
              <GrYoutube />
            </Link>
          </div>
        </div>

        <div className="flex md:gap-[4rem] gap-[3rem] flex-wrap xl:justify-center sm:flex-1">
          <div>
            <div className="flex flex-col">
              <h4 className="font-semibold mb-[1rem]">Profile Sekolah</h4>

              <div className="flex flex-col gap-2">
                <Link to="">Visi & Misi</Link>
                <Link to="">Tata Tertib</Link>
                <Link to="">Sarana & Prasarana</Link>
                <Link to="">Struktur Organisasi</Link>
                <Link to="">Sejarah SMK KGB2</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-semibold mb-[1rem]">BKK</h4>

            <div className="flex flex-col gap-2">
              <Link to="">Info BKK</Link>
              <Link to="">Lowongan Pekerjaan </Link>
              <Link to="">Mitra Industri</Link>
            </div>
          </div>
          <div className="flex xl:flex-col flex-wrap gap-[2rem]">
            <div className="flex flex-col">
              <h4 className="font-semibold mb-[1rem] flex items-center gap-2">
                <IoLocation className="text-[1.4rem]" />
                Kampus A
              </h4>

              <p className="font-regular leading-[149.4%] md:w-[15rem]">
                Jl. Anggrek 1, RT.002/RW.016, Duren Jaya, Kec. Bekasi Tim., Kota
                Bks, Jawa Barat 17111
              </p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-semibold mb-[1rem] flex items-center gap-2">
                <IoLocation className="text-[1.4rem]" />
                Kampus B
              </h4>

              <p className="font-regular leading-[149.4%] md:w-[15rem]">
                Jl. H.Ujan, RT.006/RW.007, Duren Jaya, Kec. Bekasi Tim., Kota
                Bks, Jawa Barat 17111
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright text-center text-white pb-[2rem] px-8">
        Copyright ©2023 SMK Karya Guna Bhakti 2 Kota Bekasi All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
