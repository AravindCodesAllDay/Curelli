import React from "react";
import img1 from "../assets/facebook.png";
import img2 from "../assets/instagram.png";
import img4 from "../assets/linkedin.png";

export default function FollowUs() {
  return (
    <div className="flex flex-col items-center text-[#40773b] relative bg-gray-100 p-4 shadow-md mb-12 gap-3 justify-around">
      <h4 className="xs:text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl">
        Follow us on:
      </h4>
      <div className="flex items-center justify-center gap-8">
        <a
          href="https://www.instagram.com/curellifoods?igsh=cXlidmxhbm91cGto&utm_source=qr"
          target="_blank "
          className="text-xs lg:text-base sm:text-xs xl:text-lg 2xl:text-lg hover:scale-110"
        >
          <img
            className="xs:size-5 sm:size-6 md:size-6 lg:size-7 xl:size-7 2xl:size-8"
            alt="Instagram"
            src={img2}
          />
        </a>
        <a
          href="https://www.facebook.com/curellifoods"
          target="_blank"
          className="text-xs lg:text-base sm:text-xs xl:text-lg 2xl:text-lg hover:scale-110"
        >
          <img
            className="xs:size-5 sm:size-6 md:size-6 lg:size-7 xl:size-7 2xl:size-8"
            alt="Facebook"
            src={img1}
          />
        </a>
        <a
          href="https://www.linkedin.com/company/curellifoods/"
          target="_blank"
          className="text-xs lg:text-base sm:text-xs xl:text-lg 2xl:text-lg hover:scale-110"
        >
          <img
            className="xs:size-5 sm:size-6 md:size-6 lg:size-7 xl:size-7 2xl:size-8"
            alt="LinkedIn"
            src={img4}
          />
        </a>
      </div>
    </div>
  );
}
