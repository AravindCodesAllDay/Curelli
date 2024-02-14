import React, { useState, useEffect } from "react";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
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

  const handleDelete = async (productId) => {
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
              <tr key={item.id}>
                <td>
                  <img
                    src={`${import.meta.env.VITE_API}uploads/${item.photo}`}
                    alt=""
                    className="w-24 h-24 object-contain"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>Rs.{item.price}</td>
                <td>
                  <div className="flex justify-center">
                    <FaTrash
                      className="w-5 h-5 text-red-800 mr-4 cursor-pointer"
                      onClick={() => handleDelete(item._id)}
                    />
                    <FaShareAlt className="w-5 h-5 text-black cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="border p-4 mt-4">
          <h2 className="text-lg font-bold">Cart Summary</h2>
          <hr className="my-2" />
          <p className="font-semibold">Total Items: {totalItems}</p>
          <p className="font-semibold">Total Price: Rs{totalPrice}</p>
        </div>
        <div className="text-center mt-4">
          <button className="bg-[#40773b] text-white px-4 py-2 rounded-md">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
