import Spinner from "react-spinkit";

import Footer from "../../../partials/landing page/footer";
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";
import { IoChevronBackCircleSharp } from "react-icons/io5";

const ArtikelDetail = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const bodyRef = useRef();

  useEffect(() => {
    async function getData() {
      const setting = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };
      const req = await FecthData(`${APIBASEURL}/blogs/${id}`, setting);

      const res = req;
      setTimeout(() => {
        setIsLoading(false);
        setData(res[0]);

        bodyRef.current.innerHTML = res[0].body;
      }, 1000);
    }

    (async () => getData())();
  }, []);
  return (
    <>
      <HeaderLandingPage />

      {/* Loading */}
      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      <main>
        <section>
          <div className="container">
            <button
              className="px-4 py-2 text-white bg-primary rounded-lg flex items-center gap-2 text-[0.8rem] mb-[1rem] mt-[2rem]"
              onClick={() => navigate("/artikel")}
              type="button"
            >
              <IoChevronBackCircleSharp className="text-[1rem]" />
              Kembali
            </button>
            <div className="cover rounded-[8px] overflow-hidden mt-[2rem] ">
              <img src={data.image} alt="" className="object-cover" />
            </div>

            <article className="mt-[2rem]">
              <h2 className="font-semibold text-[1.5rem]">{data.title}</h2>

              <div ref={bodyRef} className="mt-[1rem] leading-relaxed"></div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ArtikelDetail;
