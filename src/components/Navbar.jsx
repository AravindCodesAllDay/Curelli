import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img1 from "../assets/curelli_logo.webp";
import img2 from "../assets/cart.svg";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const userId = sessionStorage.getItem("id");
  const location = useLocation();

  const [isUserIdPresent, setIsUserIdPresent] = useState(false);

  useEffect(() => {
    const handleSubmission = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API}users/${userId}`
        );
        setIsUserIdPresent(response.ok);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    handleSubmission();
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center gap-[2px] relative bg-white">
      <div className="flex flex-col items-center justify-center gap-[10px] relative w-full max-w-[1440px]">
        <Link to={`/${userId}`}>
          <img
            className="relative h-[100px] object-cover"
            alt="Image"
            src={img1}
          />
        </Link>
      </div>
      <div className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-13 relative w-full bg-[#40773b]">
        <div className="flex items-center gap-[16px] relative">
          <div
            className={`text-white text-[16px] ${
              location.pathname === "/"
                ? "underline decoration-4"
                : "hover:underline hover:decoration-2"
            }`}
          >
            <Link to={`/`}>Home</Link>
          </div>
          <div
            className={`text-white text-[16px] ${
              location.pathname === "/aboutus"
                ? "underline decoration-4"
                : "hover:underline hover:decoration-2"
            }`}
          >
            <Link to={`/aboutus`}>About Us</Link>
          </div>
          <div
            className={`text-white text-[16px] ${
              location.pathname === "/shop"
                ? "underline decoration-4"
                : "hover:underline hover:decoration-2"
            }`}
          >
            <Link to={`/shop`}>Shop</Link>
          </div>
          <div
            className={`text-white text-[16px] ${
              location.pathname === "/contact"
                ? "underline decoration-4"
                : "hover:underline hover:decoration-2"
            }`}
          >
            <Link to={`/contact`}>Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <Link to="/cart">
            <img className="w-[30px] h-[30px]" alt="Shopping cart" src={img2} />
          </Link>
          {isUserIdPresent ? (
            <Dropdown />
          ) : (
            <div className="text-white text-[14px] border-white border-2 p-1 rounded hover:bg-white hover:text-black">
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
