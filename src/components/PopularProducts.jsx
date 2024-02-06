// PopularProducts.js
import React from "react";
import img1 from "../assets/P1.jpg";
import img2 from "../assets/P4.jpg";
import img3 from "../assets/P2.jpg";
import img4 from "../assets/P3.jpg";
import Card2 from "./Card2";

export default function PopularProducts() {
  const cardDetails = [
    {
      _id: "1",
      name: "PirandaiPapad",
      description:
        " Home made organic ingredients. Boosts Immunity Rich in antioxidants Can be air fired ",
      price: 69,
      photo: img1,
      status: "New",
    },
    {
      _id: "2",
      name: "VallaraiPapad",
      description:
        "Healthy snack for children Highly nutritious enhancing brain activity. Well sundried and packaged.",
      price: 69,
      photo: img2,
      status: "Sale",
    },
    {
      _id: "3",
      name: "AavarampooPapad",
      description:
        "First of its kind Unadulterated pure ingredients Healthy snack with no preservatives",
      price: 69,
      photo: img3,
      status: "Popular",
    },
    {
      _id: "4",
      name: "Sangupoo Papad",
      description:
        " First of its kind Unadulterated pure ingredients Healthy snack with no preservatives",
      price: 69,
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
