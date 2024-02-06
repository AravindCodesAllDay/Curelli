import React from "react";
import img from "../assets/AboutUs.jpg";
import img1 from "../assets/facebook.svg";
import img2 from "../assets/instagram.png";
import img3 from "../assets/x.svg";
import img4 from "../assets/linkedin.png";

export default function AboutBanner() {
  return (
    <div className="flex flex-col items-center gap-10 px-8 md:px-16 py-12 relative bg-white">
      <div className="flex items-center  gap-4 md:gap-12 relative">
        <img
          className="w-full md:w-[510px] h-auto rounded-md hover:scale-105"
          alt="Pancakes"
          src={img}
        />
        <div className="flex-col items-start gap-6">
          <p className="font-bold text-[#40773b] text-2xl md:text-4xl tracking-wide leading-normal m-8">
            Reviving Tradition: A Modern Twist to Forgotten Organic Foods
          </p>
          <p className="font-normal text-[#40773b] text-base md:text-lg tracking-normal leading-normal m-8">
            Inspired by my mother’s legacy of crafting exquisite Pirandai
            Vatthal, &#34;Curelli Foods,&#34; in the heart of Aralvaimozhi. We
            believe in preserving tradition while infusing it with a touch of
            modernity. With a small team of dedicated homemakers in and around
            the location, we set out on a mission to take the family’s heritage
            to the world.
          </p>
          <div className="flex items-center gap-4 m-8">
            <img className="w-6 h-6" alt="Facebook" src={img1} />
            <img className="w-6 h-6" alt="Instagram" src={img2} />
            <img className="w-6 h-6" alt="Twitter" src={img3} />
            <img className="w-6 h-6" alt="LinkedIn" src={img4} />
          </div>
        </div>
      </div>
    </div>
  );
}
