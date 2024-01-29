import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/curelli_logo.webp";
import img2 from "../assets/cart.svg";
import img3 from "../assets/profile.svg";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center justify-center gap-[2px] relative bg-white">
      <div className="flex flex-col items-center justify-center gap-[10px] relative w-full max-w-[1440px]">
        <img
          className="relative h-[100px] object-cover"
          alt="Image"
          src={img1}
        />
      </div>
      <div className="flex items-center justify-between px-4 lg:px-10 py-4 lg:py-13 relative w-full bg-[#40773b]">
        <div className="flex items-center gap-[16px] relative">
          <div className="text-white text-[16px]">
            <Link to="/">Home</Link>
          </div>
          <div className="text-white text-[16px]">
            <Link to="/aboutus">About Us</Link>
          </div>
          <div className="text-white text-[16px]">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="text-white text-[16px]">
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-[30px] h-[30px]" alt="Shopping cart" src={img2} />
          <img className="w-[30px] h-[30px]" alt="Male user" src={img3} />
        </div>
      </div>
    </div>
  );
}
