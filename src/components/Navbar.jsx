import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/Logo_02.png";
import { FaShoppingBag, FaUser, FaBars } from "react-icons/fa";
import Dropdown from "./Dropdown";
import Search from "./Search";

export default function Navbar({ children }) {
  const nav = useNavigate();
  const userId = sessionStorage.getItem("id");
  const location = useLocation();
  const [isUserIdPresent, setIsUserIdPresent] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <div className="flex items-center gap-5 justify-between w-full lg:w-auto">
            <div className="lg:hidden md:hidden">
              <FaBars
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              />
            </div>
            <div className="lg:flex hidden md:flex flex-grow gap-[16px] relative items-center">
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
            <div className="flex items-center gap-5">
              <Search />
              <FaShoppingBag
                className="w-[27px] h-[27px] text-white lg:hidden md:block"
                onClick={() => {
                  accessCart();
                }}
              />
              {isUserIdPresent ? (
                <Dropdown />
              ) : (
                <Link to="/login">
                  <FaUser className="w-[27px] h-[27px] text-white lg:hidden md:block" />
                </Link>
              )}
            </div>
          </div>
        </div>
        {showMobileMenu && (
          <div className="lg:hidden bg-[#40773b] w-full py-2">
            <div className="flex flex-col items-center gap-3">
              <div className="text-white text-2xl font-bold">Menu</div>
              <div className="text-white">
                <Link to={`/`}>Home</Link>
              </div>
              <div className="text-white">
                <Link to={`/aboutus`}>Our Story</Link>
              </div>
              <div className="text-white">
                <Link to={`/shop`}>Our Products</Link>
              </div>
              <div className="text-white">
                <Link to={`/contact`}>Contact</Link>
              </div>
            </div>
          </div>
        )}
      </div>
      {children}
    </>
  );
}
