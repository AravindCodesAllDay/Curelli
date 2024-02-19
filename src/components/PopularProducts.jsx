import React from "react";
import Card from "./Card";

export default function PopularProducts() {
  const cardDetails = [
    {
      _id: "65c26a36167ec3c69e917c07",
      name: "PirandaiPapad",
      description:
        " Home made organic ingredients. Boosts Immunity Rich in antioxidants Can be air fried ",
      price: 69,
      photo: "P1.jpg",
      status: "New",
      rating: 4,
      numOfRating: 44,
    },
    {
      _id: "65c26d76167ec3c69e917c09",
      name: "VallaraiPapad",
      description:
        "Healthy snack for children Highly nutritious enhancing brain activity. Well sun-dried and packaged.",
      price: 69,
      photo: "P4.jpg",
      status: "Sale",
      rating: 4,
      numOfRating: 40,
    },
    {
      _id: "65c2794d167ec3c69e917c16",
      name: "AavarampooPapad",
      description:
        "First of its kind Unadulterated pure ingredients Healthy snack with no preservatives",
      price: 69,
      photo: "P2.jpg",
      status: "Popular",
      rating: 4,
      numOfRating: 14,
    },
    {
      _id: "65c26bea167ec3c69e917c08",
      name: "Sangupoo Papad",
      description:
        " First of its kind Unadulterated pure ingredients Healthy snack with no preservatives",
      price: 69,
      photo: "P3.jpg",
      status: "Popular",
      rating: 4.5,
      numOfRating: 9,
    },
  ];

  return (
    <div className="flex overflow-x-auto justify-between">
      {cardDetails.map((details) => (
        <div
          key={details._id}
          className="flex-shrink-0 max-w-[290px] min-w-[260px] w-full h-full mx-4"
        >
          <Card details={details}>
            <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
              {details.status}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
