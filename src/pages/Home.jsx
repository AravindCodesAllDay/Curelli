import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Posters from "../components/Posters";
import Subscribe from "../components/Subscribe";
import Carousels from "../components/Carousel";
import Tagline from "../components/Tagline";
import PopularProducts from "../components/PopularProducts";
import Whatsapp from "../components/Whatsapp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousels />
      <Tagline />
      <PopularProducts />
      <Subscribe />
      <Posters />
      <Banner />
      <Footer />
      <Outlet />
      <Whatsapp />
    </>
  );
}
