import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import Rating from "@mui/material/Rating";

export default function Card2({ children, details }) {
  const userId = sessionStorage.getItem("id");
  const nav = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const openPopup = () => {
    nav("/shop/65c26bea167ec3c69e917c08");
  };

  const add2Cart = async (productId, userId) => {
    // add2Cart function remains the same
  };

  return (
    <div
      className="relative max-w-[290px] min-w-[260px] border-2 max-h-[400px] min-h-[380px] size-100% w-100% h-100% hover:shadow-2xl flex flex-col justify-between m-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ flex: "1 0 auto" }} // Allow flex items to shrink but not grow
    >
      <div className="relative max-h-[250px] w-full h-100%">
        {children}
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
            <FaHeart className="text-[#303030] hover:scale-150" />
          </div>
          <div
            className="rounded-full bg-white p-3"
            onClick={() => openPopup()}
          >
            <FaEye className="text-[#303030] hover:scale-150" />
          </div>
          <div
            className="rounded-full bg-white p-3"
            onClick={() => add2Cart(details._id, userId)}
          >
            <FaShoppingCart className="text-[#303030] hover:scale-150" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{details.name}</h2>
        <div className="flex flex-row -ml-0.5">
          <Rating
            name="size-small"
            readOnly
            defaultValue={details.rating}
            precision={0.5}
            size="small"
          />
          &nbsp;
          <p className="text-gray-600 -mt-1">({details.numOfRating})</p>
        </div>
        <p className="text-green-600 font-bold">Rs: {details.price}</p>
      </div>
    </div>
  );
}
