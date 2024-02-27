import React from "react";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 relative bg-gray-100 p-4 sm:p-8 rounded-md shadow-md my-8 sm:my-12">
      <h4 className="text-[#40773b] xs:text-xl lg:text-4xl md:text-3xl sm:text-xl xl:text-4xl 2xl:text-4xl">
        Follow us on Instagram
      </h4>
      <a
        href="https://www.instagram.com/curellifoods?igsh=cXlidmxhbm91cGto&utm_source=qr"
        target="_blank"
      >
        <button className="hover:[#40773b] text-[#40773b] hover:bg-[#40773b] border-2 p-1 font-semibold mt-6 hover:text-white rounded xs:text-sm lg:text-lg md:text-lg sm:text-sm xl:text-lg 2xl:text-xl">
          @curellifoods
        </button>
      </a>
    </div>
  );
}
