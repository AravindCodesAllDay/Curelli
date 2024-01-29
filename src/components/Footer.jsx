import React from "react";

export default function Footer() {
  return (
    <div className="flex items-center justify-center relative bg-white w-full min-w-[320px] min-h-[200px] border-t-2 border-[#277933]">
      <p className="text-[#277933] text-[35px] text-center font-extralight tracking-[0] leading-[normal]">
        <span className="text-[#277933] text-[26px] tracking-[0]">
          Healthy Snacks for Healthy Life
          <br />
        </span>
        <span className="text-[16px]">
          contact@curellifoods.com
          <br />
        </span>
        <span className="text-[14px]">© Curelli Foods 2023</span>
      </p>
    </div>
  );
}
