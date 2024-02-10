import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/Logo_02.png";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import Dropdown from "./Dropdown";

export default function Navbar({ children }) {
  const nav = useNavigate();
  const userId = sessionStorage.getItem("id");
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserIdPresent, setIsUserIdPresent] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

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
      nav("/login");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[2px] relative bg-white">
        <div className="flex flex-col items-center justify-center gap-[10px] relative w-full max-w-[1440px] p-2">
          <Link to={`/`}>
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
          <div className="flex items-center gap-5 justify-center">
            <div className="relative">
              {isSearchOpen ? (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="bg-white border border-gray-300 rounded-md shadow-md pl-8 pr-3 py-1 w-96
                    "
                  />
                  <FaSearch
                    className="text-black cursor-pointer absolute right-0 top-1 mr-2 w-[25px] h-[25px]"
                    onClick={toggleSearch}
                  />
                </div>
              ) : (
                <FaSearch
                  className="text-white cursor-pointer w-[25px] h-[25px]"
                  onClick={toggleSearch}
                />
              )}
            </div>
            <FaShoppingBag
              className="w-[27px] h-[27px] text-white"
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
      {children}
    </>
  );
}
