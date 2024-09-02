import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";

export default function PopularProducts() {
  const userId = localStorage.getItem("id");
  const nav = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const openPopup = (details) => {
    nav(`/shop/${details._id}`);
  };

  const add2Cart = async (productId) => {
    if (!userId) {
      console.error("User ID is not available.");
      nav("/login");
      return;
    }

    try {
      const userResponse = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const userResult = await userResponse.json();
      const isInCart = userResult.cart.find((item) => item._id === productId);

      if (isInCart) {
        toast.info("Item already in Cart", {
          closeButton: false,
          pauseOnHover: false,
        });
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
            }),
          }
        );

        if (cartResponse.ok) {
          const cartResult = await cartResponse.json();
          console.log(cartResult.message);
          toast.info("Item added to Cart", {
            closeButton: false,
            pauseOnHover: false,
          });
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

  const add2Wishlist = async (productId) => {
    if (!userId) {
      console.error("User ID is not available.");
      nav("/login");
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
          toast.info("Item already in wishlist");
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
            toast.info("Item added to wishlist...!", {
              closeButton: false,
              pauseOnHover: false,
            });
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
    <>
      <ToastContainer />
      <div className="overflow-x-auto">
        <div className="flex xs:justify-between sm:justify-between md:justify-around lg:justify-around xl:justify-around 2xl:justify-around">
          {cardDetails.map((details) => (
            <div key={details._id} className="flex-shrink-0">
              <div className="card-container overflow-x-auto flex flex-row flex-wrap justify-center">
                <div
                  className="relative w-full max-w-[290px] border-2 max-h-[400px] hover:shadow-2xl flex flex-col justify-between m-2 lg:my-5 transition-shadow duration-150 ease-out"
                  onMouseEnter={() => setHoveredCard(details._id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative max-h-[250px] w-100% h-100%">
                    <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded">
                      {details.status}
                    </div>
                    <img
                      src={`${import.meta.env.VITE_API}uploads/${
                        details.photo
                      }`}
                      alt="plant"
                      className="w-full h-full object-cover hover:cursor-pointer"
                      onClick={() => openPopup(details)}
                    />
                    <div
                      className={`absolute top-4 right-4 flex flex-col gap-2 transition-all cursor-pointer ${
                        hoveredCard === details._id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div
                        className="rounded-full bg-white p-3 shadow group"
                        onClick={() => add2Wishlist(details._id)}
                      >
                        <FaHeart className="text-[#303030] duration-150 ease-out group-hover:scale-150 xs:size-3 sm:size-3 md:size-3 lg:size-4 xl:size-4 2xl:size-5" />
                      </div>
                      <div
                        className="rounded-full bg-white p-3 shadow group"
                        onClick={() => add2Cart(details._id)}
                      >
                        <FaShoppingCart className="text-[#303030] duration-150 ease-out group-hover:scale-150 xs:size-3 sm:size-3 md:size-3 lg:size-4 xl:size-4 2xl:size-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 cursor-default">
                    <h2 className="xs:text-xs sm:text-xs md:text-sm lg:text-md xl:text-md 2xl:text-lg font-bold mb-2">
                      {details.name}
                    </h2>
                    <div className="flex flex-row -ml-0.5">
                      <Rating
                        name="size-small"
                        readOnly
                        defaultValue={details.rating}
                        precision={0.5}
                        size="small"
                      />
                      &nbsp;
                      <p className="text-gray-600 -mt-1 ">
                        ({details.numOfRating})
                      </p>
                    </div>
                    <p className="text-green-600 font-bold xs:text-xs sm:text-xs md:text-sm lg:text-md xl:text-md 2xl:text-lg">
                      Rs: {details.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
