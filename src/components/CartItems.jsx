import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";

const CartItems = () => {
  const userId = sessionStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      setError("Error deleting item from cart. Please try again later.");
    }
  };

  const handleProceedToBuy = () => {
    // Add logic for proceeding to buy
  };

  if (loading) {
    return <p className="text-center mt-4">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-4">{error}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-4 flex flex-col items-center">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center m-3">Your Cart is empty.</p>
      ) : (
        <>
          <CartItem data={cartItems} onDelete={handleDelete} />
          <div className="mt-4">
            <button
              onClick={handleProceedToBuy}
              className="m-3 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Proceed to Buy
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;
