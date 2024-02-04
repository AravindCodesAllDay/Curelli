// CartItems.js
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
          productDetails.quantity = cartItem.quantity;
          productDetails.id = cartItem.product;
          return productDetails;
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

  const handleAction = (index, action) => {
    // Handle common actions here
    // Example: handleDecreaseQuantity, handleIncreaseQuantity, handleDeleteItem
  };

  const handleProceedToBuy = () => {
    // Add logic for proceeding to buy
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto mt-4">
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your Cart is empty.</p>
      ) : (
        <>
          <CartItem data={cartItems} />
          <div className="mt-4">
            <button
              onClick={handleProceedToBuy}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
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
