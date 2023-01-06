import { useEffect, useState } from "react";

// Component
import HeaderLandingPage from "../../../partials/HeaderLandingPage";
import Footer from "../../../partials/landing page/footer";

import CardBlog from "../../../components/card-blog/CardBlog";

const Artikel = () => {
  return (
    <>
      <HeaderLandingPage />

      <main>
        <section>
          <div className="container mt-[3rem]">
            <h2 className="text-[2rem] text-center  mx-auto mb-[1.5rem] font-semibold">
              Artikel Terbaru
            </h2>

            <CardBlog />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Artikel;
