import React, { useState, useEffect } from "react";

export default function Orders() {
  window.scrollTo(0, 0);
  const userId = sessionStorage.getItem("id");
  const [orderDetails, setOrderDetails] = useState([]);
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
        setOrderDetails(data.orders);
        console.log(orderDetails);
        // console.log(data);
        console.log("Address details fetched:", data.address);
      } catch (error) {
        console.error("Error fetching user details:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
    console.log(orderDetails);
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    // <>
    //   <div>
    //     {orderDetails.length === 0 ? (
    //       <div>No orders found.</div>
    //     ) : (
    //       orderDetails.map((order) => (
    //         <div key={order._id}>
    //           {/* <div>
    //             Address:
    //             <div key={order._id}>
    //               <div>Name: {order.name}</div>
    //               <div>Address: {order.address}</div>
    //               <div>District: {order.district}</div>
    //               <div>State: {order.state}</div>
    //               <div>Pincode: {order.pincode}</div>
    //               <div>Contact: {order.addressContact}</div>
    //             </div>
    //           </div> */}
    //           <table>
    //             <thead>
    //               <tr>
    //                 <th>Product</th>
    //                 <th>Quantity</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {order.products.map((product) => (
    //                 <tr key={product._id}>
    //                   <td>{product.name}</td>
    //                   <td>{product.quantity}</td>
    //                 </tr>
    //               ))}
    //             </tbody>
    //           </table>
    //           <div>Total Price: {order.totalPrice}</div>
    //         </div>
    //       ))
    //     )}
    //   </div>
    // </>
    <>orders</>
  );
}
