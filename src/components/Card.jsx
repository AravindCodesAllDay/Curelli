import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaEye, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";

export default function Card({ children, details }) {
  const userId = sessionStorage.getItem("id");
  const nav = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const openPopup = (details) => {
    nav(`/shop/${details._id}`);
  };

  const add2Cart = async (productId, userId) => {
    if (!userId) {
      console.error("User ID is not available.");
      return;
    }

    try {
      const userResponse = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const userResult = await userResponse.json();

      if (userResult.cart.some((item) => item.product === productId)) {
        console.log("Item is already in the cart");
        toast.success("Item already in Cart");
      } else {
        const cartResponse = await fetch(
          `${import.meta.env.VITE_API}users/cart`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId,
              product: productId,
              quantity: 1, // You may adjust the quantity based on your requirements
            }),
          }
        );

        if (cartResponse.ok) {
          const cartResult = await cartResponse.json();
          console.log(cartResult.message);
          nav(`/cart`);
        } else {
          const errorResult = await cartResponse.json();
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
  const add2Wishlist = async (productId, userId) => {
    if (!userId) {
      console.error("User ID is not available.");
      return;
    }

    try {
      const userResponse = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const userResult = await userResponse.json();

      if (userResponse.ok) {
        if (userResult.wishlist.some((item) => item.product === productId)) {
          console.log("Item is already in the wishlist");
          toast.success("Item already in wishlist");
        } else {
          const wishlistResponse = await fetch(
            `${import.meta.env.VITE_API}users/wishlist`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId,
                product: productId,
              }),
            }
          );

          if (wishlistResponse.ok) {
            const wishlistResult = await wishlistResponse.json();
            console.log(wishlistResult.message);
            nav(`/wishlist`);
          } else {
            const errorResult = await wishlistResponse.json();
            console.error(
              "Error adding item to wishlist:",
              errorResult.error || "Unknown error"
            );
          }
        }
      } else {
        console.error(
          "Error fetching user data:",
          userResult.error || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="relative max-w-[290px] min-w-[240px] border-2 max-h-[400px] min-h-[360px] size-100% w-100% h-100% hover:shadow-2xl flex flex-col justify-between m-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative max-h-[250px] w-100% h-100%">
          {children}
          <img
            src={`${import.meta.env.VITE_API}uploads/${details.photo}`}
            alt="plant"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute top-4 right-4 flex flex-col gap-2 transition-all ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="rounded-full bg-white p-3 shadow"
              onClick={() => add2Wishlist(details._id, userId)}
            >
              <FaHeart className="text-[#303030] hover:scale-150" />
            </div>
            <div
              className="rounded-full bg-white p-3 shadow"
              onClick={() => openPopup(details)}
            >
              <FaEye className="text-[#303030] hover:scale-150" />
            </div>
            <div
              className="rounded-full bg-white p-3 shadow"
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
    </>
  );
}
