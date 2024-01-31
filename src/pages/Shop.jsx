import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import img1 from "../assets/plant.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

export default function Shop() {
  const cardDetails = [
    {
      photo: img1,
      header: "Product-1",
      detail: "Something based on product",
      amount: "₹40/-",
    },
    {
      photo: img2,
      header: "Product-2",
      detail: "Something based on product",
      amount: "₹60/-",
    },
    {
      photo: img3,
      header: "Product-3",
      detail: "Something based on product",
      amount: "₹50/-",
    },
    {
      photo: img1,
      header: "Product-1",
      detail: "Something based on product",
      amount: "₹40/-",
    },
    {
      photo: img2,
      header: "Product-2",
      detail: "Something based on product",
      amount: "₹60/-",
    },
    {
      photo: img3,
      header: "Product-3",
      detail: "Something based on product",
      amount: "₹50/-",
    },
    {
      photo: img1,
      header: "Product-1",
      detail: "Something based on product",
      amount: "₹40/-",
    },
    {
      photo: img2,
      header: "Product-2",
      detail: "Something based on product",
      amount: "₹60/-",
    },
    {
      photo: img3,
      header: "Product-3",
      detail: "Something based on product",
      amount: "₹50/-",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col  max-w-[350px] min-w-[300px]">
          <Sidebar />
        </div>
        <div className="p-12 lg:flex lg:flex-wrap">
          {cardDetails.map((details) => {
            return <Card details={details} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
