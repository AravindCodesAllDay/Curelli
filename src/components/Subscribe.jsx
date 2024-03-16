import React from "react";
import img1 from "../assets/facebook.png";
import img2 from "../assets/instagram.png";
import img4 from "../assets/linkedin.png";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center text-[#40773b] relative bg-gray-100 p-4 shadow-md mb-12 justify-around">
      <h4 className="text-xl lg:text-3xl md:text-2xl sm:text-lg xl:text-3xl 2xl:text-4xl mt-4 mb-2">
        Follow us on
      </h4>
      <div className="flex items-center justify-center space-x-4">
        <a
          href="https://www.instagram.com/curellifoods?igsh=cXlidmxhbm91cGto&utm_source=qr"
          target="_blank "
          className="text-xs lg:text-base sm:text-xs xl:text-lg 2xl:text-lg"
        >
          <img className="h-6 w-6" alt="Instagram" src={img2} />
        </a>
        <a
          href="https://www.facebook.com/curellifoods"
          target="_blank"
          className="text-xs lg:text-base sm:text-xs xl:text-lg 2xl:text-lg"
        >
          <img className="h-6 w-6" alt="Facebook" src={img1} />
        </a>
        <a
          href="https://www.linkedin.com/company/curellifoods/"
          target="_blank"
          className="text-xs lg:text-base sm:text-xs xl:text-lg 2xl:text-lg"
        >
          <img className="h-6 w-6" alt="LinkedIn" src={img4} />
        </a>
      </div>
    </div>
  );
}
