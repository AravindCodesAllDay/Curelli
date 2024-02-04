import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

export default function Shop() {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API}products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const products = await response.json();
        setCardDetails(products);
      } catch (error) {
        console.error("Fetch error:", error);
        // Handle errors here
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <div className="flex flex-col max-w-[350px] min-w-[300px]">
          <Sidebar />
        </div>
        <div className="p-12 lg:flex lg:flex-wrap">
          {cardDetails.map((details) => (
            <Card key={details.id} details={details} />
          ))}
        </div>
      </div>
      <Footer />
      <Outlet />
    </>
  );
}
