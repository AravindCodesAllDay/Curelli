import React from "react";
import image1 from "../assets/carousel.png";

const Carousel = () => {
  const posters = [{ photo: image1, id: 1, title: "High Quality Products" }];

  return (
    <div className="flex flex-wrap h-[520px] items-center justify-around gap-[10px_10px] p-[10px] relative bg-white w-100% min-w-[1440px]">
      <div className="absolute w-100% h-full">
        <img src={image1} alt="" />
      </div>
      <div className="flex flex-wrap h-[505px] items-center justify-center gap-[0px_0px] px-[10px] py-[168px] relative flex-1 grow mt-[-2.50px] mb-[-2.50px] bg-[url(/frame-82.svg)] bg-cover bg-[50%_50%]">
        <div className="flex flex-wrap items-center justify-center gap-[10px_10px] relative flex-1 grow">
          <div className="flex items-center gap-[10px] relative flex-1 grow">
            <div className="relative w-[55px] h-[55px] bg-white rounded-[27.5px]" />
            &lt;
          </div>
          <div className="flex flex-col w-[551px] items-end gap-[15px] relative">
            <div className="relative w-[280px] h-[164px]">
              <div className="flex flex-wrap w-[280px] items-start gap-[6px_6px] absolute top-0 left-0">
                <div className="flex flex-col w-[284px] items-start gap-[8px]">
                  <p className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-[#277933] text-[45px] tracking-[0] leading-[normal]">
                    <span className="[font-family:'Poppins-Regular',Helvetica] font-normal text-[#277933] text-[45px] tracking-[0]">
                      High Quality <br />
                    </span>
                  </p>
                  <p className="relative self-stretch [font-family:'Poppins-Regular',Helvetica] font-normal text-[#277933] text-[45px] tracking-[0] leading-[normal]">
                    <span className="text-[32px]">Products</span>
                  </p>
                </div>
              </div>
              <div className="absolute w-[114px] h-[30px] top-[134px] left-0 bg-[#277933]">
                <div className="absolute w-[53px] top-[5px] left-[30px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[12px] tracking-[0] leading-[normal]">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[10px] relative flex-1 grow -rotate-180">
            <div className="relative w-[55px] h-[55px] bg-white rounded-[27.5px]" />
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
