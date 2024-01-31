import React, { useState } from "react";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";

export default function Card({ details }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative max-w-[280px] min-w-[250px] border-2 max-h-[400px] min-h-[380px] size-100% w-100% h-100% hover:shadow-2xl flex flex-col justify-between m-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative max-h-[250px] w-100% h-100%">
        <img
          src={details.photo}
          alt="plant"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="rounded-full bg-white p-3">
            <FaHeart className="text-[#303030]" />
          </div>
          <div className="rounded-full bg-white p-3">
            <FaEye className="text-[#303030]" />
          </div>
          <div className="rounded-full bg-white p-3">
            <FaShoppingCart className="text-[#303030]" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{details.header}</h2>
        <p className="text-gray-600">{details.detail}</p>
        <p className="text-green-600 font-bold">Amount - {details.amount}</p>
      </div>
    </div>
  );
}
