import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Banner from "./Banner";
import Posters from "./Posters";
import Carousels from "./Carousel";
import Tagline from "./Tagline";
import ToTop from "../../components/ToTop";
import PopularProducts from "./PopularProducts";
import Recognition from "./Recognition";
import FollowUs from "./FollowUs";

export default function Home() {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="w-screen">
        <Carousels />
        <Tagline />
        <PopularProducts />
        <FollowUs />
        <Posters />
        <Banner />
        <Recognition />
        <Footer />
        <Outlet />
        <ToTop />
      </div>
    </>
  );
}
