import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Posters from "../components/Posters";
import Subscribe from "../components/Subscribe";
import Carousels from "../components/Carousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousels />
      <Posters />
      <Banner />
      <Subscribe />
      <Footer />
    </>
  );
}
