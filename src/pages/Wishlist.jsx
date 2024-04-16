import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "@mui/material/Rating";

const Wishlist = () => {
  window.scrollTo(0, 0);
  const nav = useNavigate();
  const userId = sessionStorage.getItem("id");
  const [wishlistItems, setWishlistItems] = useState([]);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}products/${productId}`
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching product details:", error);
      return null;
    }
  };

  const fetchWishDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const user = await response.json();

      const updatedWishItems = await Promise.all(
        user.wishlist.map(async (wishItem) => {
          const productDetails = await fetchProductDetails(wishItem.product);
          return {
            ...productDetails,
            id: wishItem.product,
          };
        })
      );

      setWishlistItems(updatedWishItems);
    } catch (error) {
      console.error("Error fetching user wishlist:", error);
      toast.error("Error fetching wishlist. Please try again later.");
    }
  };

  useEffect(() => {
    fetchWishDetails();
  }, []);

  const handleDelete = async (productId) => {
    try {
      console.log(productId);
      await fetch(`${import.meta.env.VITE_API}users/wishlist`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, product: productId }),
      });

      await fetchWishDetails();
      toast.success("Item removed from wishlist.");
    } catch (error) {
      console.error("Error deleting item from wishlist:", error);
      toast.error("Error deleting item from wishlist. Please try again later.");
    }
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

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">My Wishlist</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 shadow rounded flex flex-row items-center justify-between"
            >
              <div className="flex items-center">
                <img
                  src={`${import.meta.env.VITE_API}uploads/${item.photo}`}
                  alt=""
                  className="w-24 h-24 object-cover mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="flex flex-row -ml-0.5">
                    <Rating
                      name="size-small"
                      readOnly
                      defaultValue={item.rating}
                      precision={0.5}
                      size="small"
                    />
                    &nbsp;
                    <p className="text-gray-600 -mt-1">({item.numOfRating})</p>
                  </div>
                  <p className="text-gray-600 mb-2">Rs: {item.price}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="px-4 py-2 bg-[#40773b] text-white rounded hover:bg-[#30512d]"
                  onClick={() => add2Cart(item._id, userId)}
                >
                  Add to Cart
                </button>
                <div className="flex justify-center">
                  <FaTrash
                    className="w-5 h-5 text-red-800 mr-4 cursor-pointer"
                    onClick={() => handleDelete(item._id)}
                  />
                  <FaShareAlt className="w-5 h-5 text-black cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
