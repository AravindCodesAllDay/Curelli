import React from "react";

export default function AboutContact() {
  return (
    <div className="flex flex-col items-center justify-center p-6 mt-6 relative bg-white">
      <div className="flex-col">
        <div className="font-bold text-[#40773b] text-2xl md:text-3xl lg:text-4xl tracking-wide leading-normal m-4">
          Contact
        </div>
        <div className="flex flex-col sm:flex-row m-4">
          <p className="font-normal text-[#40773b] text-base md:text-lg lg:text-xl tracking-normal leading-normal">
            No.705/3B of Chenbagaramanputhoor Road, Sahayanagar, Thovalai
            Village,
            <br />
            Shanmugapuram, kanyakumari district, Tamil Nadu - 629302
          </p>
          <div className="flex-col sm:ml-10">
            <a
              className="font-normal text-[#40773b] text-base md:text-lg lg:text-xl tracking-normal leading-normal underline"
              href="mailto:info@mysite.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              contact@curellifoods.com
            </a>
            <div className="font-normal text-[#40773b] text-base md:text-lg lg:text-xl tracking-normal leading-normal">
              08668157699
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
