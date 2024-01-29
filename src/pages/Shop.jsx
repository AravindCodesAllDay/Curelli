import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import AllProducts from "../components/AllProducts";

export default function Shop() {
  return (
    <>
      <Navbar />
      <AllProducts />
      <div className="p-12">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}
