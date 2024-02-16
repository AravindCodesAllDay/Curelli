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
        " Home made organic ingredients. Boosts Immunity Rich in antioxidants Can be air fried ",
      price: 69,
      photo: img1,
      status: "New",
      rating: 4,
      numOfRating: 44,
    },
    {
      _id: "2",
      name: "VallaraiPapad",
      description:
        "Healthy snack for children Highly nutritious enhancing brain activity. Well sun-dried and packaged.",
      price: 69,
      photo: img2,
      status: "Sale",
      rating: 4,
      numOfRating: 40,
    },
    {
      _id: "3",
      name: "AavarampooPapad",
      description:
        "First of its kind Unadulterated pure ingredients Healthy snack with no preservatives",
      price: 69,
      photo: img3,
      status: "Popular",
      rating: 4,
      numOfRating: 14,
    },
    {
      _id: "4",
      name: "Sangupoo Papad",
      description:
        " First of its kind Unadulterated pure ingredients Healthy snack with no preservatives",
      price: 69,
      photo: img4,
      status: "Popular",
      rating: 4.5,
      numOfRating: 9,
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center flex-wrap">
      {cardDetails.map((details) => (
        <div
          key={details._id}
          className="flex-grow max-w-[290px] min-w-[260px] w-full h-full"
        >
          <Card2 details={details}>
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
              {details.status}
            </div>
          </Card2>
        </div>
      ))}
    </div>
  );
}
