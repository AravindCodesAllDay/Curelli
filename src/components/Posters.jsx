import React from "react";
import img from "../assets/Picture5.png";

export default function Posters() {
  return (
    <div className="flex flex-wrap mx-auto items-start justify-center gap-8 p-10 relative bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative flex-1">
        <div className="flex flex-wrap min-w-[320px] items-center justify-center gap-8 md:gap-10 p-8 md:p-12 relative flex-1 grow bg-[#cddccb]">
          <div className="flex flex-col items-center justify-center gap-8 relative flex-1 grow">
            <div className="flex flex-col items-center justify-center gap-8 relative w-full">
              <div className="text-[#40773b] text-3xl font-bold text-center">
                GET TO KNOW US
              </div>
              <p className="text-[#40773b] text-lg text-center">
                We believe in preserving the rich heritage of forgotten herbs
                while embracing the modern needs of health-conscious
                individuals. We are passionate about reviving traditional wisdom
                and bringing it to your table in the form of highly medicinal
                Vathals. Our range includes the rarest of herbs such as
                Pirandai, Sangupushpam, Avarampoo, and more, meticulously
                crafted into delectable Vathals that not only tantalize your
                taste buds but also nurture your well-being.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 p-2 md:p-4 rounded border border-solid border-[#40773b]">
              <div className="text-[#40773b] text-lg font-normal">More</div>
            </div>
          </div>
        </div>
        <img
          className="w-full max-w-[600px] lg:max-w-[500px] h-auto object-cover md:flex-1"
          alt="Frame"
          src={img}
        />
      </div>
    </div>
  );
}
