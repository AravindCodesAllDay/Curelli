import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Posters from "../components/Posters";
import Carousels from "../components/Carousel";
import Tagline from "../components/Tagline";
import Whatsapp from "../components/Whatsapp";
import PopularProducts from "../components/PopularProducts";
import Recognition from "../components/Recognition";
import Subscribe from "../components/Subscribe";

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="w-screen">
        <Carousels />
        <Tagline />
        <PopularProducts />
        <Subscribe />
        <Posters />
        <Banner />
        <Recognition />
        <Footer />
        <Outlet />
        <Whatsapp />
      </div>
    </>
  );
}
