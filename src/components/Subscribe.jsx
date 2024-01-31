import React from "react";

export default function Subscribe() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 relative bg-gray-100 p-8 rounded-md shadow-md m-3">
      <div className="text-[#40773b] text-4xl">Subscribe to Our Newsletter</div>
      <div className="w-full max-w-[553px] h-[50px] rounded-md overflow-hidden border border-solid border-[#4e4e4e] relative">
        <div className="w-[85px] h-[50px] absolute top-0 right-0">
          <div className="w-full h-full bg-[url(/rectangle-15.svg)] bg-cover bg-[#40773b]">
            <div className="flex items-center justify-center h-full">
              <div className="text-white text-lg font-semibold">Join Now</div>
            </div>
          </div>
        </div>
        <input
          type="email"
          placeholder="Enter your email (e.g., sample@example.com)"
          className="w-full h-full px-4 text-gray-700 text-lg focus:outline-none"
        />
      </div>
    </div>
  );
}
