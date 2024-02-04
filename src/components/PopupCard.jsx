import React from "react";
// import img1 from "../assets/1.png";
import { useParams, useNavigate } from "react-router-dom";

const PopupCard = () => {
  const nav = useNavigate();
  const { id } = useParams();

  const onClosePreview = () => {
    nav(-1);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClosePreview}
    >
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl flex flex-row">
        {/* <div className="w-1/2 flex items-center justify-center">
          <img src={img1} alt="orange" className="max-w-full h-auto" />
        </div> */}
        <div className="w-1/2 flex flex-col justify-center pl-8">
          <h2 className="text-2xl font-semibold mb-2">Product-1</h2>
          <p className="text-gray-600 mb-4">Something based on product</p>
          <p className="text-green-600 font-semibold mb-4">Amount-₹40</p>
          <div className="flex space-x-4">
            <button
              onClick={onClosePreview}
              className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-[100px]"
            >
              Close
            </button>
            <button className="bg-[#277933] text-white px-4 py-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
