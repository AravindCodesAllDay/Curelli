// PopularProducts.js
import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import Card from "./Card";

export default function PopularProducts() {
  const cardDetails = [
    {
      photo: img1,
      header: "Product-1",
      detail: "Something based on product",
      amount: "₹40/-",
      status: "Popular",
    },
    {
      photo: img2,
      header: "Product-1",
      detail: "Something based on product",
      amount: "₹40/-",
      status: "Popular",
    },
    {
      photo: img3,
      header: "Product-1",
      detail: "Something based on product",
      amount: "₹40/-",
      status: "Best Seller",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center">
      {cardDetails.map((details) => {
        return (
          <Card details={details}>
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
              {details.status}
            </div>
          </Card>
        );
      })}
    </div>
  );
}
