import React, { useState, useEffect } from "react";

export default function Orders() {
  window.scrollTo(0, 0);
  const userId = sessionStorage.getItem("id");
  const [ongoingOrders, setOngoingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [showCompletedOrders, setShowCompletedOrders] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API}users/${userId}`);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        console.log(data);
        setOngoingOrders(
          data.orders.filter((order) => order.orderStatus === "pending")
        );
        setCompletedOrders(
          data.orders.filter(
            (order) =>
              order.orderStatus === "delivered" || order.status === "canceled"
          )
        );
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [userId]);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="h-screen flex items-center justify-center">
        Error: {error}
      </div>
    );

  const ordersToShow = showCompletedOrders ? completedOrders : ongoingOrders;

  return (
    <div className="max-w-4xl mx-auto py-8 items-center">
      <h1 className="text-3xl font-semibold mb-8">Your Orders</h1>
      <button
        className={`border-2 rounded-lg px-3 py-1 hover:bg-[#40773b] hover:text-white ${
          !showCompletedOrders
            ? "bg-[#40773b] text-white"
            : "bg-white text-[#40773b]"
        } `}
        onClick={() => setShowCompletedOrders(false)}
      >
        <h2>Pending Orders</h2>
      </button>
      <button
        className={`border-2 rounded-lg px-3 py-1 hover:bg-[#40773b] hover:text-white ${
          showCompletedOrders
            ? "bg-[#40773b] text-white"
            : "bg-white text-[#40773b]"
        } `}
        onClick={() => setShowCompletedOrders(true)}
      >
        <h2>Completed Orders</h2>
      </button>
      <div className="space-y-8">
        {ordersToShow.length === 0 ? (
          <div>No orders found.</div>
        ) : (
          ordersToShow.map((order, index) => (
            <div key={index} className="bg-white rounded shadow-md">
              <div className="flex w-full p-4 items-center bg-green-700 text-white">
                <div className="flex items-center ">
                  <span className=" font-semibold inline">OrderId:</span>
                  <span className="inline"> {order._id}</span>
                </div>

                <div className="flex items-center justify-end w-full">
                  <span className="font-semibold inline">Date:</span>
                  <span className="inline"> {order.date}</span>
                </div>
              </div>
              <table className="w-full p-4">
                <thead>
                  <tr className="border-b">
                    <th className="py-2">ProductImage</th>
                    <th className="py-2">Product</th>
                    <th className="py-2">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {order.products.map((product, index) => (
                    <tr key={index} className="border-b ">
                      <td className="py-2 ">
                        <img
                          src={`${import.meta.env.VITE_API}uploads/${
                            product.photo
                          }`}
                          className="h-14 mx-auto"
                          alt=""
                        />
                      </td>
                      <td className="py-2 text-center">{product.name}</td>
                      <td className="py-2 text-center">{product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-lg p-4 border-t-2 border-green-800">
                Total Price: {order.totalPrice}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
