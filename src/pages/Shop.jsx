import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import AllProducts from "../components/AllProducts";
import Sidebar from "../components/Sidebar";

export default function Shop() {
  return (
    <>
      <Navbar />
      <AllProducts />
      <div className="flex flex-row">
        <div className="flex flex-col  max-w-[350px] min-w-[300px]">
          <Sidebar />
        </div>
        <div className="p-12 flex-col">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
