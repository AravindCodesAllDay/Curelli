import React, { useState, useEffect } from "react";
import { FaShareAlt, FaTrash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("id");
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleQuantityChange = async (productId, sign) => {
    try {
      console.log(userId, productId, sign);
      const res = await fetch(`${import.meta.env.VITE_API}users/cartquantity`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          userId,
          productId,
          sign,
        }),
      });
      const data = await res.json();
      console.log(data);
      await fetchCartDetails();
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast("Error updating quantity. Please try again later.");
    }
  };

  const fetchCartDetails = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API}users/${userId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch cart details");
      }

      const user = await response.json();
      setCartItems(user.cart);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user cart:", error);
      setError("Error fetching cart. Please try again later.");
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await fetch(`${import.meta.env.VITE_API}users/cart`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
      });

      // Remove the deleted item from cartItems state
      await fetchCartDetails();
      toast.success("An item removed", {
        closeButton: false,
        pauseOnHover: false,
      });
    } catch (error) {
      console.error("Error deleting item from cart:", error);
      setError("Error deleting item from cart. Please try again later.");
    }
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(cartItems);
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
              <tr key={item._id} className="border-2 m-1 text-center">
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
                      onClick={() => handleQuantityChange(item._id, "-")}
                    >
                      -
                    </button>
                    <span className="font-bold text-xl">{item.quantity}</span>
                    <button
                      className="w-5 h-5 rounded-full ml-2 font-bold text-xl"
                      onClick={() => handleQuantityChange(item._id, "+")}
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
                      onClick={() => handleDelete(item._id)}
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
              onClick={() => navigate("/checkout")}
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
