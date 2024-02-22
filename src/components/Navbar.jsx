import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/Logo_02.png";
import { FaShoppingBag, FaUser, FaBars, FaSearch } from "react-icons/fa";

import Dropdown from "./Dropdown";
import Search from "./Search";
import OffCanvasMenu from "./OffCanvasMenu";

export default function Navbar({ children }) {
  const nav = useNavigate();
  const userId = sessionStorage.getItem("id");
  const location = useLocation();
  const [isUserIdPresent, setIsUserIdPresent] = useState(false);
  const [showOffCanvasMenu, setShowOffCanvasMenu] = useState(false);

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
              className="relative h-[50px] sm:h-[60px] md:h-[70px] lg:h-[70px] xl:h-[70px] 2xl:h-[80px] object-cover xs:h-[40px]"
              alt="Image"
              src={img1}
            />
          </Link>
        </div>
        <div className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-13 relative w-full bg-[#40773b]">
          <div className="flex items-center gap-5 justify-between w-full lg:w-auto">
            <div className="lg:hidden md:hidden">
              <FaBars
                className="xs:size-[21px] sm:size-[23px] md:size-[25px] lg:size-[27px] xl:size-[27px]  2xl:size-[29px] text-white cursor-pointer"
                onClick={() => setShowOffCanvasMenu(!showOffCanvasMenu)}
              />
              <OffCanvasMenu
                isOpen={showOffCanvasMenu}
                onClose={() => setShowOffCanvasMenu(false)}
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
              {/* Render FaSearch icon only in small screens */}

              <Search />
              <FaShoppingBag
                className="xs:size-[21px] sm:size-[23px] md:size-[25px] lg:size-[27px] xl:size-[27px]  2xl:size-[29px] text-white lg:hidden md:block"
                onClick={() => {
                  accessCart();
                }}
              />
              {isUserIdPresent ? (
                <Dropdown />
              ) : (
                <Link to="/login">
                  <FaUser className="xs:size-[21px] sm:size-[23px] md:size-[25px] lg:size-[27px] xl:size-[27px]  2xl:size-[29px] text-white lg:hidden md:block" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* OffCanvasMenu component is rendered separately */}
      </div>
      {children}
    </>
  );
}
