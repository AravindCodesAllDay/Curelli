import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PopupCard = () => {
  const userId = sessionStorage.getItem("id");
  const [details, setDetails] = useState({});
  const { _pid } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}products/${_pid}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const productData = await response.json();
        setDetails(productData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProductData();
  }, [_pid]);

  const add2Cart = async (productId, userId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const result = await response.json();

      if (result.cart.some((item) => item.product === productId)) {
        console.log("Item is already in the cart");
        toast.success("Added item to Cart");
      } else {
        const response = await fetch(`${import.meta.env.VITE_API}users/cart`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            product: productId,
            quantity: 1, // You may adjust the quantity based on your requirements
          }),
        });
        if (response.ok) {
          const result = await response.json();
          console.log(result.message);
          nav(`/cart/${userId}`);
        } else {
          const errorResult = await response.json();
          console.error(
            "Error adding item to cart:",
            errorResult.error || "Unknown error"
          );
        }
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => nav("/shop")}
    >
      <div className="bg-white p-8 rounded-lg w-full max-w-2xl flex flex-row">
        <div className="w-1/2 flex items-center justify-center">
          <img
            src={`${import.meta.env.VITE_API}uploads/${details.photo}`}
            alt="orange"
            className="max-w-full h-auto"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center pl-8">
          <h2 className="text-2xl font-semibold mb-2">{details.name}</h2>
          <p className="text-gray-600 mb-4">{details.description}</p>
          <p className="text-green-600 font-semibold mb-4">
            Rs: {details.price}
          </p>
          <div className="flex space-x-4">
            <button
              onClick={() => nav("/shop")}
              className="bg-blue-500 text-white px-4 py-2 rounded-md max-w-[100px]"
            >
              Close
            </button>
            <button
              className="bg-[#277933] text-white px-4 py-2 rounded-md"
              onClick={() => add2Cart(details._id, userId)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
