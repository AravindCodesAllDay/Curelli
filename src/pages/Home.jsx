import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Posters from "../components/Posters";
import Subscribe from "../components/Subscribe";
import Carousels from "../components/Carousel";
import Tagline from "../components/Tagline";
import Whatsapp from "../components/Whatsapp";
import PopularProducts from "../components/PopularProducts";

export default function Home() {
  const { _id } = useParams();
  sessionStorage.setItem("id", _id);
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
