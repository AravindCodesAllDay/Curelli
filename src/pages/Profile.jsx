import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Profile() {
  const userId = sessionStorage.getItem("id");
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="bg-gray-100 rounded-lg overflow-hidden cursor-default">
        <div className="flex items-center p-4">
          <p className=" text-white rounded-full p-1 w-8 bg-[#964B00] border-2 justify-center flex">
            {sessionStorage.getItem("name").charAt(0)}
          </p>
          <div className="ml-4 text-gray-600 font-medium">
            Hello, {sessionStorage.getItem("name")}
          </div>
        </div>
        <div className="px-4 py-2 border-b border-gray-300 font-medium">
          Personal Information
        </div>
        <div className="px-4 py-2 border-b border-gray-300">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500"
              placeholder="Sree"
            />
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500"
              placeholder="Aranganathan"
            />
          </div>
        </div>
        <div className="px-4 py-2 border-b border-gray-300 font-medium">
          Gender
        </div>
        <div className="px-4 py-2 border-b border-gray-300">
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="radio" className="form-radio" name="gender" />
              <span className="text-gray-700">Male</span>
            </label>
            <label className="flex items-center space-x-1 cursor-pointer">
              <input type="radio" className="form-radio" name="gender" />
              <span className="text-gray-700">Female</span>
            </label>
          </div>
        </div>
        <div className="px-4 py-2 border-b border-gray-300 font-medium">
          Email Address
        </div>
        <div className="px-4 py-2 border-b border-gray-300 flex items-center justify-between">
          <input
            type="text"
            className="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500 flex-grow mr-2"
            placeholder="ds04aranganthan@gmail.com"
          />
          <div className="text-brown-500 cursor-pointer">Edit</div>
        </div>
        <div className="px-4 py-2 border-b border-gray-300 font-medium">
          Mobile Number
        </div>
        <div className="px-4 py-2 border-b border-gray-300 flex items-center justify-between">
          <input
            type="number"
            className="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500 flex-grow mr-2"
            placeholder="63692 XXXX6"
          />
          <div className="text-brown-500 cursor-pointer">Edit</div>
        </div>
        <div className="flex px-4 py-2 border-b border-gray-300 font-medium items-center">
          Manage Address
          <button className="ml-auto border-[2px] px-1 rounded border-black ">
            add
          </button>
        </div>
        <div className="px-4 py-2">
          <div className="flex bg-white rounded p-4 border border-gray-300 mb-2">
            <div className="flex-col flex">
              <p className="text-gray-600 font-medium mb-1">Aravindhan U D</p>
              <p className="text-gray-600 text-sm mb-1">
                Plot No. 11, Senthamil 3rd Street, Villapuram
              </p>
              <p className="text-gray-600 text-sm">
                Madurai, Tamil Nadu - 625012
              </p>
            </div>
            <div className="flex flex-col gap-4 ml-auto">
              <FaEdit className="w-5 h-5 ml-auto cursor-pointer text-blue-400" />
              <FaTrash className="w-5 h-5 ml-auto cursor-pointer text-red-800" />
            </div>
          </div>
          <div className="flex bg-white rounded p-4 border border-gray-300 mb-2">
            <div className="flex-col flex">
              <p className="text-gray-600 font-medium mb-1">Aravindhan U D</p>
              <p className="text-gray-600 text-sm mb-1">
                Plot No. 11, Senthamil 3rd Street, Villapuram
              </p>
              <p className="text-gray-600 text-sm">
                Madurai, Tamil Nadu - 625012
              </p>
            </div>
            <div className="flex flex-col gap-4 ml-auto">
              <FaEdit className="w-5 h-5 ml-auto cursor-pointer text-blue-400" />
              <FaTrash className="w-5 h-5 ml-auto cursor-pointer text-red-800" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
