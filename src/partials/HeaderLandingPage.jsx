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

  const onClick = (e) => {
    switch (Number(e.key)) {
      case 1:
        navigate("/");
        break;
      case 2:
        navigate("/login");
        break;
      case 3:
        navigate("/direktori_alumni");
        break;
      case 4:
        navigate("/direktori_guru");
        break;
      case 5:
        navigate("/direktori_siswa");
        break;
      case 6:
        navigate("/tkj");
        break;
      case 7:
        navigate("/akl");
        break;
      case 8:
        navigate("/oktp");
        break;
      case 9:
        navigate("/profile_sekolah");
        break;
      case 18:
        navigate("/artikel");
        break;
      case 23:
        window.location.href = "http://foto.smkkgb2.sch.id/";
        break;
      case 16:
        navigate("/lowongan");
        break;
      case 17:
        navigate("/mitra");
        break;
      case 19:
        navigate("/ppdb");
        break;
      case 24:
        navigate("/hubungi_kami");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, [scrollPosition]);

  return (
    <header className="lg:px-14 px-6 pb-[1rem] h-[8rem] max-[842px]:h-[13rem] flex flex-col justify-center max-w-[90rem] mx-auto">
      <div className="">
        <div className="flex items-center justify-between max-[842px]:justify-center  max-[842px]:pb- border-b-[1px]  max-[842px]:pb-4 text-[0.8rem]">
          <div className="flex items-center   max-[842px]:flex-col  gap-1">
            <img
              src={logo}
              alt=""
              className=" max-[842px]:w-[5rem] w-[4rem] object-cover"
            />
            <h3 className="text-[0.8rem] font-semibold text-primary  max-[842px]:text-center">
              SMK Karya Guna Bhakti 2 <br /> Kota Bekasi
            </h3>
          </div>
          <div className="max-[842px]:hidden">
            {Object.keys(getUserIsLogin()).length == 0 ? (
              <div className="flex items-center flex-row gap-2 w-max">
                <Link
                  to="/login"
                  className="px-4 py-2 text-white bg-secondary rounded-lg flex items-center justify-center gap-2 text-[0.8rem] w-max"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 text-white bg-third rounded-lg flex items-center gap-2 text-[0.8rem] w-max justify-center"
                >
                  Daftar PPDB
                </Link>
              </div>
            ) : (
              <Link
                to="/dashboard/ppdb"
                className="px-4 py-2 text-white bg-third rounded-lg flex items-center gap-2 text-[0.8rem] w-max justify-center flex-1"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-slate-500 text-[1rem]" />
          +62 824 2384 23
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="text-slate-500 text-[1rem]" />
          informasi@smkkgb2.sch.id
        </div>
      </div>
      <div className="flex items-center gap-2 text-[1rem] text-slate-500 ">
        <Link to="">
          <AiFillInstagram />
        </Link>
        <Link to="">
          <GrYoutube />
        </Link>
      </div> */}

      <nav
        className={`flex items-center justify-center pt-[1rem] transition-all ${
          scrollPosition > 102
            ? "fixed z-[99] top-[-0.5rem] w-[100%] left-0 bg-white h-[4rem] shadow-lg pt-[0.5rem]"
            : ""
        }`}
      >
        <ul
          className={`flex sm:items-center sm:gap-5 gap-7 items-start  font-medium text-[1rem]  font-poppins sm:relative fixed sm:right-auto sm:top-auto top-0 sm:flex-row flex-col z-[99] bg-white sm:w-auto w-[20rem] sm:h-auto h-full sm:shadow-none shadow-2xl right-0 sm:pr-0 transition-all max-[842px]:hidden ${
            activeNavbar
              ? " visible opacity-100"
              : "sm:visible sm:opacity-100 invisible opacity-0"
          }`}
        >
          <li
            className="text-[2rem] cursor-pointer w-full mt-[2rem] px-8 flex justify-end sm:hidden  text-third"
            onClick={() => setActiveNavbar(false)}
          >
            <AiFillCloseCircle className="text-right" />
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link className="" to="/">
              Beranda
            </Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>

          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem] cursor-pointer">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <Link> Pendaftaran Alumni</Link>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <Link to="/direktori_alumni">Direktori Alumni</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/direktori_guru">
                      Direktori Guru & Tenaga Kependidikan
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/direktori_siswa">Direktori Peserta Didik</Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="font-poppins flex items-center gap-2"
              >
                Siswa <MdKeyboardArrowDown />
              </a>
            </Dropdown>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>

          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem] cursor-pointer">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <Link to="/tkj">Teknik Komputer & Jaringan</Link>
                  </Menu.Item>
                  <Menu.Item key="1">
                    <Link to="/akl">Akutansi & Keuangan Lembaga</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/oktp">
                      Otomatisasi & Tata Kelola Perkantoran
                    </Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="font-poppins flex items-center gap-2"
              >
                Jurusan <MdKeyboardArrowDown />
              </a>
            </Dropdown>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link className="" to="/profile_sekolah">
              Profile Sekolah
            </Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>

          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem] cursor-pointer">
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="1">
                    <Link to="/lowongan">Lowongan Pekerjaan</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/mitra">Mitra Industri</Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="font-poppins flex items-center gap-2"
              >
                BKK <MdKeyboardArrowDown />
              </a>
            </Dropdown>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>

          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link to="/artikel">Artikel</Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem]">
            <Link to="/ppdb">PPDB</Link>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>
          <li className="text-primary transition-all hover:text-third sm:ml-0 ml-[3rem] cursor-pointer">
            <Dropdown
              overlay={
                <Menu>
                  {/* <Menu.Item key="0">
                    <Link>Galeri</Link>
                  </Menu.Item> */}
                  <Menu.Item key="2">
                    <a href="http://foto.smkkgb2.sch.id/">Foto LDKS</a>
                  </Menu.Item>

                  <Menu.Item key="3">
                    <Link to="/hubungi_kami">Hubungi Kami</Link>
                  </Menu.Item>
                </Menu>
              }
            >
              <a
                onClick={(e) => e.preventDefault()}
                className="font-poppins flex items-center gap-2"
              >
                Lainnya <MdKeyboardArrowDown />
              </a>
            </Dropdown>
            <span className="block bg-third translate-y-[0.4rem] w-[14rem] h-[0.1px] sm:hidden "></span>
          </li>
        </ul>

        <div
          className="text-[1.5rem] cursor-pointer hidden max-[842px]:block"
          onClick={() => setActiveNavbar(true)}
        >
          <RxHamburgerMenu />
        </div>
      </nav>
      <div
        className={`${
          activeNavbar ? "fixed z-[99999] top-0 right-0 block" : "hidden"
        }  bg-white transition-all h-full overflow-y-scroll px-4 py-4 w-[23rem]`}
      >
        <div
          className="text-[2rem] cursor-pointer w-full mb-[2rem] px-8 flex justify-end lg:hidden  text-third"
          onClick={() => setActiveNavbar(false)}
        >
          <AiFillCloseCircle className="text-right" />
        </div>
        <Menu
          onClick={onClick}
          style={{
            width: "100%",
            boxShadow: "none",
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        {Object.keys(getUserIsLogin()).length == 0 ? (
          <div className="flex items-center flex-row gap-2 w-full mt-[2rem]">
            <Link
              to="/login"
              className="px-4 py-2 text-white bg-secondary rounded-lg flex items-center justify-center gap-2 text-[0.8rem] w-max flex-1"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 text-white bg-third rounded-lg flex items-center gap-2 text-[0.8rem] w-max justify-center flex-1"
            >
              Daftar PPDB
            </Link>
          </div>
        ) : (
          <Link
            to="dashboard/ppdb"
            className="px-4 py-2 mt-[1rem] ml-6 text-white bg-third rounded-lg flex items-center gap-2 text-[0.8rem] w-max justify-center flex-1]"
          >
            Dashboard
          </Link>
        )}
      </div>
    </header>
  );
};

export default HeaderLandingPage;
