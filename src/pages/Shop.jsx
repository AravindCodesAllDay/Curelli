import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Shop() {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        setCardDetails(products);
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs once on mount

  const userId = sessionStorage.getItem("id");
  const nav = useNavigate();
  // const [isHovered, setIsHovered] = useState(false);

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
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <>
      <ToastContainer />
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {cardDetails.map((details, index) => (
          <div
            key={index}
            className="card-container overflow-x-auto flex flex-row flex-wrap justify-center"
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative w-full max-w-[290px] border-2 max-h-[400px] hover:shadow-2xl flex flex-col justify-between m-2 lg:my-5 transition-shadow duration-150 ease-out">
              <div className="relative max-h-[250px] w-100% h-100%">
                <img
                  src={`${import.meta.env.VITE_API}uploads/${details.photo}`}
                  alt="plant"
                  className="w-full h-full object-cover hover:cursor-pointer"
                  onClick={() => openPopup(details)}
                />
                {hoveredCard === index && (
                  <div className="absolute top-4 right-4 flex flex-col gap-2 transition-all cursor-pointer">
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
                )}
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
        ))}
      </div>
      <Footer />
      <Whatsapp />
      <Outlet />
    </>
  );
}
