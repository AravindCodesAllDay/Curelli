import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Rating from "@mui/material/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Footer";
import ToTop from "../../components/ToTop";

export default function Shop() {
  const [cardDetails, setCardDetails] = useState([]);
  const userId = localStorage.getItem("id");
  const nav = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        setCardDetails(products);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const openPopup = (details) => {
    nav(`/shop/${details._id}`);
  };

  const handleAddToCartOrWishlist = async (
    url,
    productId,
    successMessage,
    errorMessage
  ) => {
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

      if (!userResponse.ok) {
        throw new Error(userResult.error || "Unknown error");
      }

      const isInList =
        userResult.cart.find((item) => item._id === productId) ||
        userResult.wishlist.find((item) => item.product === productId);

      if (isInList) {
        toast.info(`Item already in ${errorMessage}`, {
          closeButton: false,
          pauseOnHover: false,
        });
      } else {
        const listResponse = await fetch(
          `${import.meta.env.VITE_API}users/${url}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId, product: productId }),
          }
        );

        if (listResponse.ok) {
          const listResult = await listResponse.json();
          console.log(listResult.message);
          toast.info(`Item added to ${successMessage}`, {
            closeButton: false,
            pauseOnHover: false,
          });
        } else {
          const errorResult = await listResponse.json();
          throw new Error(errorResult.error || "Unknown error");
        }
      }
    } catch (error) {
      console.error(
        `Error adding item to ${successMessage.toLowerCase()}:`,
        error
      );
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5">
        {cardDetails.map((details) => (
          <div
            key={details._id}
            className="card-container overflow-x-auto flex flex-row flex-wrap justify-center group/main"
          >
            <div className="relative w-full max-w-[290px] border-2 max-h-[400px] hover:shadow-2xl flex flex-col justify-between m-2 lg:my-5 transition-shadow duration-150 ease-out">
              <div className="relative max-h-[250px] w-full h-full">
                <img
                  src={`${import.meta.env.VITE_API}uploads/${details.photo}`}
                  alt="plant"
                  className="w-full h-full object-cover hover:cursor-pointer"
                  onClick={() => openPopup(details)}
                />
                <div className="absolute top-4 right-4 flex flex-col gap-2 transition-all cursor-pointer opacity-0 group-hover/main:opacity-100">
                  <div
                    className="rounded-full bg-white p-3 shadow group"
                    onClick={() =>
                      handleAddToCartOrWishlist(
                        "wishlist",
                        details._id,
                        "wishlist",
                        "wishlist"
                      )
                    }
                  >
                    <FaHeart className="text-[#303030] duration-150 ease-out group-hover:scale-150 xs:size-3 sm:size-3 md:size-3 lg:size-4 xl:size-4 2xl:size-5" />
                  </div>
                  <div
                    className="rounded-full bg-white p-3 shadow group"
                    onClick={() =>
                      handleAddToCartOrWishlist(
                        "cart",
                        details._id,
                        "Cart",
                        "cart"
                      )
                    }
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
        ))}
      </div>
      <Footer />
      <ToTop />
      <Outlet />
    </>
  );
}
