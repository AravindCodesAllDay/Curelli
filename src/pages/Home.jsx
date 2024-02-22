import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Posters from "../components/Posters";
import Subscribe from "../components/Subscribe";
import Carousels from "../components/Carousel";
import Tagline from "../components/Tagline";
import Whatsapp from "../components/Whatsapp";
import PopularProducts from "../components/PopularProducts";
import Instagram from "../components/Instagram";
import Recognition from "../components/Recognition";

export default function Home() {
  return (
    <>
      <div className="w-screen">
        <Carousels />
        <Tagline />
        <PopularProducts />
        <Subscribe />
        <Posters />
        <Banner />
        <Instagram />
        <Recognition />
        <Footer />
        <Outlet />
        <Whatsapp />
      </div>
    </>
  );
}
