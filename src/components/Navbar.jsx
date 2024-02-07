import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/Logo_02.png";
import img2 from "../assets/cart.svg";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const nav = useNavigate();
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

  const accessCart = () => {
    if (isUserIdPresent) {
      nav("/cart");
    } else {
      toast.error("Login to View Cart");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center gap-[2px] relative bg-white">
        <div className="flex flex-col items-center justify-center gap-[10px] relative w-full max-w-[1440px] p-2">
          <Link to={`/${userId}`}>
            <img
              className="relative h-[70px] object-cover"
              alt="Image"
              src={img1}
            />
          </Link>
        </div>
        <div className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-13 relative w-full bg-[#40773b]">
          <div className="flex items-center gap-[16px] relative">
            <div
              className={`text-[16px] ${
                location.pathname === "/"
                  ? "text-[#6b986a]"
                  : "hover:text-[#6b986a] text-white"
              }`}
            >
              <Link to={`/`}>Home</Link>
            </div>
            <div
              className={` text-[16px] ${
                location.pathname === "/aboutus"
                  ? "text-[#6b986a]"
                  : "hover:text-[#6b986a] text-white"
              }`}
            >
              <Link to={`/aboutus`}>Our Story</Link>
            </div>
            <div
              className={` text-[16px] ${
                location.pathname === "/shop"
                  ? "text-[#6b986a]"
                  : "hover:text-[#6b986a] text-white"
              }`}
            >
              <Link to={`/shop`}>Our Products</Link>
            </div>
            <div
              className={`text-[16px] ${
                location.pathname === "/contact"
                  ? "text-[#6b986a]"
                  : "hover:text-[#6b986a] text-white"
              }`}
            >
              <Link to={`/contact`}>Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <img
              className="w-[30px] h-[30px]"
              alt="Shopping cart"
              src={img2}
              onClick={() => {
                accessCart();
              }}
            />
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
    </>
  );
}
