import React from "react";

export default function Card() {
  return (
    <div className="inline-flex flex-col items-start gap-[10px] relative m-3">
      <div className="relative w-[260px] h-[260px] border border-solid border-black" />
      <div className="flex flex-col items-start gap-[7px]">
        <p className="relative self-stretch [font-family:'Poppins-Light',Helvetica] font-light text-[#277933] text-[17px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Poppins-Light',Helvetica] font-light text-[#277933] text-[17px] tracking-[0]">
            I’m a product
            <br />
          </span>
        </p>
        <p className="relative self-stretch [font-family:'Poppins-Light',Helvetica] font-light text-[#277933] text-[17px] tracking-[0] leading-[normal]">
          <span className="[font-family:'Poppins-Light',Helvetica] font-light text-[#277933] text-[17px] tracking-[0]">
            ₹ 85.00
          </span>
        </p>
      </div>
    </div>
  );
}
