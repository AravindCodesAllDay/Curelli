import React from "react";
import img1 from "../assets/facebook.svg";
import img2 from "../assets/instagram.png";
import img4 from "../assets/linkedin.png";

export default function Subscribe() {
  return (
    <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row items-center text-[#40773b] relative bg-gray-100 p-4 shadow-md mb-12 justify-around ">
      <div className="flex flex-col items-center justify-center">
        <h4 className="xs:text-base lg:text-2xl md:text-xl sm:text-base xl:text-2xl 2xl:text-3xl mt-4">
          Follow us on Instagram
        </h4>
        <a
          href="https://www.instagram.com/curellifoods?igsh=cXlidmxhbm91cGto&utm_source=qr"
          target="_blank "
          className="mt-4 flex xs:text-xs lg:text-base md:sm sm:text-xs xl:text-lg 2xl:text-lg items-center"
        >
          <img className="size-6" alt="Instagram" src={img2} />
          www.instagram.com/curellifoods
        </a>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="xs:text-base lg:text-2xl md:text-xl sm:text-base xl:text-2xl 2xl:text-3xl mt-4">
          Follow us on Facebook
        </h4>
        <a
          href="https://www.facebook.com/curellifoods"
          target="_blank"
          className="mt-4 flex xs:text-xs lg:text-base md:sm sm:text-xs xl:text-lg 2xl:text-lg items-center"
        >
          <img className="size-6" alt="Facebook" src={img1} />
          www.facebook.com/curellifoods
        </a>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h4 className="xs:text-base lg:text-2xl md:text-xl sm:text-base xl:text-2xl 2xl:text-3xl mt-4">
          Follow us on Linkedin
        </h4>
        <a
          href="https://www.linkedin.com/company/curellifoods/"
          target="_blank"
          className="mt-4 flex xs:text-xs lg:text-base md:sm sm:text-xs xl:text-lg 2xl:text-lg items-center"
        >
          <img className="size-6" alt="LinkedIn" src={img4} />
          www.linkedin.com/curellifoods
        </a>
      </div>
    </div>
  );
}
