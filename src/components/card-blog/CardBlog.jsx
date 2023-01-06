import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

import blog1 from "../../images/home/blog1.jpg";
import blog2 from "../../images/home/blog2.jpg";
import blog3 from "../../images/home/blog3.jpg";

const CardBlog = () => {
  return (
    // <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
    //   <div>
    //     <div className="overflow-hidden rounded-3xl w-full">
    //       <img src={blog1} alt="" />
    //     </div>
    //     <div className="py-[1rem] w-full text-fifty">
    //       <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
    //         SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
    //       </h3>
    //       <p className="text-sixty">
    //         berita gembira untuk calon siswa siswi baru ada pengurangan biaya
    //         jika mengikuti gelombang lebih awal berikut estimasi ....
    //       </p>

    //       <Link
    //         to=""
    //         className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
    //       >
    //         Lihat Artikel <BsFillArrowRightCircleFill />
    //       </Link>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="overflow-hidden rounded-3xl w-full">
    //       <img src={blog2} alt="" />
    //     </div>
    //     <div className="py-[1rem] w-full text-fifty">
    //       <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
    //         SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
    //       </h3>
    //       <p className="text-sixty">
    //         berita gembira untuk calon siswa siswi baru ada pengurangan biaya
    //         jika mengikuti gelombang lebih awal berikut estimasi ....
    //       </p>

    //       <Link
    //         to=""
    //         className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
    //       >
    //         Lihat Artikel <BsFillArrowRightCircleFill />
    //       </Link>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="overflow-hidden rounded-3xl w-full">
    //       <img src={blog3} alt="" />
    //     </div>
    //     <div className="py-[1rem] w-full text-fifty">
    //       <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
    //         SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
    //       </h3>
    //       <p className="text-sixty">
    //         berita gembira untuk calon siswa siswi baru ada pengurangan biaya
    //         jika mengikuti gelombang lebih awal berikut estimasi ....
    //       </p>

    //       <Link
    //         to=""
    //         className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
    //       >
    //         Lihat Artikel <BsFillArrowRightCircleFill />
    //       </Link>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="overflow-hidden rounded-3xl w-full">
    //       <img src={blog1} alt="" />
    //     </div>
    //     <div className="py-[1rem] w-full text-fifty">
    //       <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
    //         SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
    //       </h3>
    //       <p className="text-sixty">
    //         berita gembira untuk calon siswa siswi baru ada pengurangan biaya
    //         jika mengikuti gelombang lebih awal berikut estimasi ....
    //       </p>

    //       <Link
    //         to=""
    //         className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
    //       >
    //         Lihat Artikel <BsFillArrowRightCircleFill />
    //       </Link>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="overflow-hidden rounded-3xl w-full">
    //       <img src={blog2} alt="" />
    //     </div>
    //     <div className="py-[1rem] w-full text-fifty">
    //       <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
    //         SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
    //       </h3>
    //       <p className="text-sixty">
    //         berita gembira untuk calon siswa siswi baru ada pengurangan biaya
    //         jika mengikuti gelombang lebih awal berikut estimasi ....
    //       </p>

    //       <Link
    //         to=""
    //         className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
    //       >
    //         Lihat Artikel <BsFillArrowRightCircleFill />
    //       </Link>
    //     </div>
    //   </div>
    //   <div>
    //     <div className="overflow-hidden rounded-3xl w-full">
    //       <img src={blog3} alt="" />
    //     </div>
    //     <div className="py-[1rem] w-full text-fifty">
    //       <h3 className="font-semibold text-[1.2rem] mb-[1.2rem] ">
    //         SMK Karya Guna Bhakti 2 Memenangi Lomba Paskib
    //       </h3>
    //       <p className="text-sixty">
    //         berita gembira untuk calon siswa siswi baru ada pengurangan biaya
    //         jika mengikuti gelombang lebih awal berikut estimasi ....
    //       </p>

    //       <Link
    //         to=""
    //         className=" mt-[2rem] flex items-center gap-4 text-[1rem] font-medium text-third"
    //       >
    //         Lihat Artikel <BsFillArrowRightCircleFill />
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[4rem] gap-[2rem]">
      <Link className="rounded-[1rem] pb-[1.5rem] bg-white shadow-xl">
        <div className="rounded-tl-[1rem] rounded-tr-[1rem] overflow-hidden">
          <img src={blog1} alt="" className="object-cover" />
        </div>

        <div className="px-4 ">
          <div className="flex items-center gap-2 mt-[1.2rem] text-slate-500 text-[0.9rem]">
            <AiOutlineLike className="text-[1.5rem]" />
            <p>
              <span className="font-semibold mr-1">2,700</span>
              Like
            </p>
          </div>

          <h2 className="mt-[1rem] font-semibold">
            SMK Karya Guna Bhakti 2 Kota Bekasi Memenangi Lomba Paskibra...
          </h2>

          <div className="flex items-center gap-4 mt-[1.6rem]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt=""
              className="object-cover rounded-full w-[3rem] h-[3rem]"
            />

            <div>
              <h2>Muhammad Raihan</h2>
              <p className="text-[0.8rem]">27 November 2023</p>
            </div>
          </div>
        </div>
      </Link>
      <Link className="rounded-[1rem] pb-[1.5rem] bg-white shadow-xl">
        <div className="rounded-tl-[1rem] rounded-tr-[1rem] overflow-hidden">
          <img src={blog1} alt="" className="object-cover" />
        </div>

        <div className="px-4 ">
          <div className="flex items-center gap-2 mt-[1.2rem] text-slate-500 text-[0.9rem]">
            <AiOutlineLike className="text-[1.5rem]" />
            <p>
              <span className="font-semibold mr-1">2,700</span>
              Like
            </p>
          </div>

          <h2 className="mt-[1rem] font-semibold">
            SMK Karya Guna Bhakti 2 Kota Bekasi Memenangi Lomba Paskibra...
          </h2>

          <div className="flex items-center gap-4 mt-[1.6rem]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt=""
              className="object-cover rounded-full w-[3rem] h-[3rem]"
            />

            <div>
              <h2>Muhammad Raihan</h2>
              <p className="text-[0.8rem]">27 November 2023</p>
            </div>
          </div>
        </div>
      </Link>
      <Link className="rounded-[1rem] pb-[1.5rem] bg-white shadow-xl">
        <div className="rounded-tl-[1rem] rounded-tr-[1rem] overflow-hidden">
          <img src={blog1} alt="" className="object-cover" />
        </div>

        <div className="px-4 ">
          <div className="flex items-center gap-2 mt-[1.2rem] text-slate-500 text-[0.9rem]">
            <AiOutlineLike className="text-[1.5rem]" />
            <p>
              <span className="font-semibold mr-1">2,700</span>
              Like
            </p>
          </div>

          <h2 className="mt-[1rem] font-semibold">
            SMK Karya Guna Bhakti 2 Kota Bekasi Memenangi Lomba Paskibra...
          </h2>

          <div className="flex items-center gap-4 mt-[1.6rem]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt=""
              className="object-cover rounded-full w-[3rem] h-[3rem]"
            />

            <div>
              <h2>Muhammad Raihan</h2>
              <p className="text-[0.8rem]">27 November 2023</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardBlog;
