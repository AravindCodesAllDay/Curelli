import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopupCard = () => {
  const userId = sessionStorage.getItem("id");
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state
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
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchProductData();

    // Disable background scroll when component mounts
    document.body.style.overflow = "hidden";

    // Re-enable background scroll when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [_pid]);

  const add2Cart = async (productId, userId) => {
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
              quantity: 1,
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

  return (
    <>
      <ToastContainer />
      <div className="fixed inset-0 flex items-center justify-center bg-opacity-20 bg-black ">
        <div className="bg-white  rounded-lg w-full max-w-4xl flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center items-center xs:p-4 sm:p-6 md:p-3 lg:p-4 xl:p-6 2xl:p-8 xs:m-2 sm:m-4 md:m4- lg:m-4 xl:m-6 2xl:m-8">
          <div className="xs:w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex items-center justify-center">
            <img
              src={`${import.meta.env.VITE_API}uploads/${details.photo}`}
              alt="orange"
              className="max-w-full h-auto"
            />
          </div>
          <div className=" xs:w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 flex flex-col justify-center m-2">
            <h2 className="text-2xl font-semibold mb-2">{details.name}</h2>
            <p className="text-gray-600 mb-4">{details.description}</p>
            {!loading &&
              details.rating !== undefined && ( // Conditionally render the Rating component
                <div className="flex flex-row -ml-0.5">
                  <Rating
                    name="size-small"
                    readOnly
                    defaultValue={details.rating}
                    precision={0.5}
                    size="medium"
                  />
                  &nbsp;
                  <p className="text-gray-600 -mt-1">({details.numOfRating})</p>
                </div>
              )}
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
                className="bg-[#277933] text-white px-4 py-2 rounded-md "
                onClick={() => add2Cart(details._id, userId)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupCard;
