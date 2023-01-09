import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const CardBlog = ({ data }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-[4rem] gap-[2rem]">
      {data.map((item) => {
        const { id, title, body, maker, image } = item;

        return (
          <Link
            className="rounded-[1rem] pb-[1.5rem] bg-white shadow-xl"
            to={`/artikel/detail/${id}`}
          >
            <div className="rounded-tl-[1rem] rounded-tr-[1rem] overflow-hidden h-[16rem]">
              <img src={image} alt="" className="object-cover " />
            </div>

            <div className="px-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 mt-[1.2rem] text-slate-500 text-[0.9rem]">
                <AiOutlineLike className="text-[1.5rem]" />
                <p>
                  <span className="font-semibold mr-1">2,700</span>
                  Like
                </p>
              </div>

              <h2 className="mt-[1rem] font-semibold w-[100%] h-[3.5rem]">
                {title.length > 90 ? title.slice(0, 90) + "..." : title}
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
        );
      })}
    </div>
  );
};

export default CardBlog;
