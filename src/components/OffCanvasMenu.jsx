import React from "react";
import { Link } from "react-router-dom";

const OffCanvasMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={onClose}
    >
      <div className="absolute right-0 top-0 h-full bg-white w-64 p-4 shadow-md text-[#277933]">
        <div className="text-2xl font-bold mb-4">Menu</div>
        <hr className="border-[1px] mb-4 border-[#277933]" />
        <div className=" mb-4">
          <Link to={`/`}>Home</Link>
        </div>
        <div className="mb-4">
          <Link to={`/aboutus`}>Our Story</Link>
        </div>
        <div className="mb-4">
          <Link to={`/shop`}>Our Products</Link>
        </div>
        <div className="mb-4">
          <Link to={`/contact`}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
