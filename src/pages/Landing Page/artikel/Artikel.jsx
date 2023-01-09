import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";
import Spinner from "react-spinkit";

import CardBlog from "../../../components/card-blog/CardBlog";
import { APIBASEURL, FecthData, requestSetting } from "../../../service/API";

const Artikel = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const setting = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
      };
      const req = await FecthData(`${APIBASEURL}/blogs`, setting);
      const res = req;

      setTimeout(() => {
        if (res) {
          setData(res);
        }
        setIsLoading(false);
      }, 1000);
    }

    ((async) => getData())();
  }, []);

  return (
    <>
      <HeaderLandingPage />

      {isLoading && (
        <div className="fixed left-0 top-0 h-[100%] w-full bg-white flex items-center flex-col justify-center z-[99] ">
          <Spinner name="line-scale-pulse-out" />
          Loading....
        </div>
      )}

      <main>
        <section>
          <div className="container mt-[3rem]">
            <h2 className="text-[2rem] text-center  mx-auto mb-[1.5rem] font-semibold">
              Artikel Terbaru
            </h2>

            <CardBlog data={data} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Artikel;
