import React from "react";

export default function AboutContact() {
  return (
    <div className="flex flex-col items-center justify-center gap- px-4 md:px-8 lg:px-16 py-6 md:py-8 relative bg-white mt-6">
      <div className="flex-col gap-4 sm:gap-8">
        <div className="font-bold text-[#40773b] text-2xl md:text-3xl lg:text-4xl tracking-wide leading-normal m-8">
          Contact
        </div>
        <div className="flex flex-col gap-4 md:gap-8 sm:flex-row m-8">
          <p className="font-normal text-[#40773b] text-base md:text-lg lg:text-xl tracking-normal leading-normal">
            705/3B-2, Layam Road, Sagayam Nagar,
            <br />
            Thovalai, Kanyakumari.
          </p>
          <div className="flex-col gap-2 sm:ml-10">
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
