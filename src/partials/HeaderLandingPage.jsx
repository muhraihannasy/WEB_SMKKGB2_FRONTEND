import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { Dropdown, Menu, Space } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { IoLocation } from "react-icons/io5";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrYoutube } from "react-icons/gr";
import logo from "../images/logo.png";
import { MdEmail, MdKeyboardArrowDown } from "react-icons/md";
import { getUserIsLogin } from "../utils/Utils";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Beranda", "1"),
  getItem("Siswa", "sub1", <AppstoreOutlined />, [
    getItem("Pendaftaran Alumni", "2"),
    getItem("Direktori Alumni", "3"),
    getItem("Direktori Guru & Tenaga Kependidikan", "4"),
    getItem("Direktori Peserta Didik", "5"),
  ]),
  getItem("Jurusan", "sub2", <AppstoreOutlined />, [
    getItem("Teknik Komputer & Jaringan", "6"),
    getItem("Akutansi & Keuangan Lembaga", "7"),
    getItem("Otomatisasi & Tata Kelola Perkatoran", "8"),
  ]),
  getItem("Profile Sekolah", "9"),
  getItem("BKK", "sub4", <SettingOutlined />, [
    getItem("Lowogan Pekerjaan", "16"),
    getItem("Mitra Industri", "17"),
  ]),
  getItem("Artikel", "18"),
  getItem("PPDB", "19"),
  getItem("Lainnya", "sub7", <SettingOutlined />, [
    getItem("Foto LDKS", "23"),
    getItem("Hubungi Kami", "24"),
  ]),
];

const HeaderLandingPage = () => {
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, [scrollPosition]);

  return (
    <header className="bg-white py-4 px-6">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt=""
          className=" max-[842px]:w-[5rem] w-[4rem] object-cover"
        />
        <h3 className="text-[0.9rem] font-semibold text-primary  max-[842px]:text-center">
          SMK Karya Guna Bhakti 2 <br /> Kota Bekasi
        </h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="">Beranda</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLandingPage;
