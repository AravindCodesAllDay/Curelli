import React, { useState, useEffect } from "react";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const nav = useNavigate();
  const userId = sessionStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);

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
  const handleQuantityChange = async (productId, newQuantity) => {
    if (newQuantity <= 0) {
      return 0;
    }
    try {
      // Update the quantity on the server
      await fetch(`${import.meta.env.VITE_API}users/cart`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          product: productId,
        }),
      });

      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item.id === productId ? { ...item } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
      setError("Error updating quantity. Please try again later.");
    }
  };

  const fetchCartDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );
      const user = await response.json();

      const updatedCartItems = await Promise.all(
        user.cart.map(async (cartItem) => {
          const productDetails = await fetchProductDetails(cartItem.product);
          return {
            ...productDetails,
            quantity: cartItem.quantity,
            id: cartItem.product,
          };
        })
      );

      setCartItems(updatedCartItems);
    } catch (error) {
      console.error("Error fetching user cart:", error);
      setError("Error fetching cart. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);

  const handleDelete = async (productId, userId) => {
    try {
      // Delete the item from the cart on the server
      await fetch(`${import.meta.env.VITE_API}users/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, product: productId }),
      });

      // Update the local state to reflect the deletion
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item.id !== productId)
      );
      toast("An item removed");
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      setError("Error deleting item from cart. Please try again later.");
    }
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-2 m-1 text-center">
                <td className="flex justify-center">
                  <img
                    src={`${import.meta.env.VITE_API}uploads/${item.photo}`}
                    alt=""
                    className="w-24 h-24 object-contain"
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="flex justify-center">
                    <button
                      className="w-5 h-5 rounded-full mr-2 font-bold text-xl -m-0.5"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <span className="font-bold text-xl">{item.quantity}</span>
                    <button
                      className="w-5 h-5 rounded-full ml-2 font-bold text-xl"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </td>

                <td>Rs.{item.price}</td>
                <td>
                  <div className="flex justify-center">
                    <FaTrash
                      className="w-5 h-5 text-red-800 mr-4 cursor-pointer"
                      onClick={() => handleDelete(item._id, userId)}
                    />
                    <FaShareAlt className="w-5 h-5 text-black cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border p-4 mt-4 flex-wrap">
          <h2 className="text-lg font-bold flex flex-row justify-center">
            Subtotal({totalItems} Item) : ₹{totalPrice}
          </h2>
          <hr className="my-2" />
          <div className="text-center mt-4">
            <button
              className="bg-[#40773b] text-white px-4 py-2 rounded-md"
              onClick={() => nav("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
