// PopularProducts.js
import React from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import Card2 from "./Card2";

export default function PopularProducts() {
  const cardDetails = [
    {
      _id: "1",
      name: "Product 1",
      description: "Description for Product 1",
      price: 20.0,
      photo: img1,
      status: "New",
    },
    {
      _id: "2",
      name: "Product 2",
      description: "Description for Product 2",
      price: 25.0,
      photo: img2,
      status: "Sale",
    },
    {
      _id: "3",
      name: "Product 1",
      description: "Description for Product 1",
      price: 20.0,
      photo: img3,
      status: "Popular",
    },
    {
      _id: "4",
      name: "Product 2",
      description: "Description for Product 2",
      price: 25.0,
      photo: img4,
      status: "Popular",
    },
  ];
  return (
    <div className="flex flex-row justify-center items-center">
      {cardDetails.map((details) => {
        return (
          <Card2 details={details}>
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
              {details.status}
            </div>
          </Card2>
        );
      })}
    </div>
  );
}
