import React from "react";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 relative bg-gray-100 p-4 sm:p-8 rounded-md shadow-md my-8 sm:my-12">
      <div className="text-[#40773b] lg:text-4xl md:text-3xl sm:text-xl xl:text-4xl 2xl:text-4xl">
        Subscribe to Our Newsletter
      </div>
      <div className="w-full max-w-[400px] sm:max-w-[600px] h-[40px] sm:h-[50px] rounded-md overflow-hidden border border-solid border-[#4e4e4e] relative">
        <div className="w-[70px] sm:w-[100px] h-[40px] sm:h-[50px] absolute top-0 right-0">
          <div className="w-full h-full bg-[url(/rectangle-15.svg)] bg-cover bg-[#40773b]">
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-base sm:text-lg font-semibold">
                Join Now
              </div>
            </div>
          </div>
        </div>
        <input
          type="email"
          placeholder="Enter your email (e.g., sample@example.com)"
          className="w-full h-full px-2 sm:px-4 text-gray-700 text-sm sm:text-lg focus:outline-none"
        />
      </div>
    </div>
  );
}
