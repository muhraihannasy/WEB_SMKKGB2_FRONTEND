import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import blog1 from "../../images/home/blog1.jpg";
import blog2 from "../../images/home/blog2.jpg";
import blog3 from "../../images/home/blog3.jpg";

const CardBlog = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      <div>
        <div className="overflow-hidden rounded-3xl w-full">
          <img src={blog1} alt="" />
        </div>
        <div className="py-[1rem] w-full text-fifty">
          <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
            SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
          </h3>
          <p className="text-sixty">
            berita gembira untuk calon siswa siswi baru ada pengurangan biaya
            jika mengikuti gelombang lebih awal berikut estimasi ....
          </p>

          <Link
            to=""
            className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
          >
            Lihat Artikel <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-hidden rounded-3xl w-full">
          <img src={blog2} alt="" />
        </div>
        <div className="py-[1rem] w-full text-fifty">
          <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
            SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
          </h3>
          <p className="text-sixty">
            berita gembira untuk calon siswa siswi baru ada pengurangan biaya
            jika mengikuti gelombang lebih awal berikut estimasi ....
          </p>

          <Link
            to=""
            className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
          >
            Lihat Artikel <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-hidden rounded-3xl w-full">
          <img src={blog3} alt="" />
        </div>
        <div className="py-[1rem] w-full text-fifty">
          <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
            SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
          </h3>
          <p className="text-sixty">
            berita gembira untuk calon siswa siswi baru ada pengurangan biaya
            jika mengikuti gelombang lebih awal berikut estimasi ....
          </p>

          <Link
            to=""
            className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
          >
            Lihat Artikel <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-hidden rounded-3xl w-full">
          <img src={blog1} alt="" />
        </div>
        <div className="py-[1rem] w-full text-fifty">
          <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
            SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
          </h3>
          <p className="text-sixty">
            berita gembira untuk calon siswa siswi baru ada pengurangan biaya
            jika mengikuti gelombang lebih awal berikut estimasi ....
          </p>

          <Link
            to=""
            className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
          >
            Lihat Artikel <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-hidden rounded-3xl w-full">
          <img src={blog2} alt="" />
        </div>
        <div className="py-[1rem] w-full text-fifty">
          <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
            SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
          </h3>
          <p className="text-sixty">
            berita gembira untuk calon siswa siswi baru ada pengurangan biaya
            jika mengikuti gelombang lebih awal berikut estimasi ....
          </p>

          <Link
            to=""
            className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
          >
            Lihat Artikel <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
      <div>
        <div className="overflow-hidden rounded-3xl w-full">
          <img src={blog3} alt="" />
        </div>
        <div className="py-[1rem] w-full text-fifty">
          <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
            SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
          </h3>
          <p className="text-sixty">
            berita gembira untuk calon siswa siswi baru ada pengurangan biaya
            jika mengikuti gelombang lebih awal berikut estimasi ....
          </p>

          <Link
            to=""
            className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
          >
            Lihat Artikel <BsFillArrowRightCircleFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
