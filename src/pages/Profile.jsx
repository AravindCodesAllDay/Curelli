import React from "react";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import success from "../assets/checked.png";
import AddAddressModal from "../components/AddAddressModal";

export default function Profile() {
  window.scrollTo(0, 0);
  const userId = sessionStorage.getItem("id");
  const [userDetails, setUserDetails] = useState({});
  const [addressDetails, setAddressDetails] = useState([]);
  const [addModal, setAddModal] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [showModalComplete, setShowModalComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    mail: "",
    phone: "",
    dob: "",
  });

  const deleteAddress = async (id) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API}users/address/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ addressId: id }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        toast.success(data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      console.error("Error during deletion ", error.message);
    }
  };

  const convertDate = async (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API}users/${userId}`);
        const data = await res.json();
        setUserDetails(data);
        setFormData({
          name: data.name,
          gender: data.gender,
          mail: data.mail,
          phone: data.phone,
          dob: await convertDate(data.dob),
        });
        console.log("Address details fetched:", data.address); // Add this line
        setAddressDetails(data.address); // Assuming data.address contains an array of addresses
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchDetails();
    console.log(userDetails);
  }, [userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API}users/edit/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res.ok) {
        setCanEdit(false);
        setShowModalComplete(true);
      }
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <ToastContainer />
      <div className="bg-gray-100 rounded-lg overflow-hidden cursor-default">
        <div>
          <form>
            <div className="flex items-center p-4">
              <p className=" text-white rounded-full p-1 w-8 bg-[#964B00] border-2 justify-center flex">
                {sessionStorage.getItem("name").charAt(0)}
              </p>
              <div className="ml-4 text-gray-600 font-medium">
                Hello, {sessionStorage.getItem("name")}
              </div>
            </div>
            <div className="px-4 py-2 border-b border-gray-300 flex items-center justify-between">
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500 flex-grow mr-2"
                placeholder="E-Mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="flex px-4 py-2 border-b border-gray-300 font-medium">
              Personal Information
              <button
                className="ml-auto border-[2px] px-1 rounded border-black justify-end"
                onClick={() => setCanEdit(true)}
                disabled={canEdit}
              >
                Edit
              </button>
            </div>

            <div className="px-4 py-2 border-b border-gray-300 font-medium">
              UserName
            </div>
            <div className="flex px-4 py-2 border-b border-gray-300">
              <input
                type="text"
                name="name"
                className="border border-gray-300 rounded w-full px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500"
                placeholder="First name"
                value={formData.name}
                onChange={handleChange}
                disabled={!canEdit}
              />
            </div>
            <div className="px-4 py-2 border-b border-gray-300 font-medium">
              Gender
            </div>
            <div className="px-4 py-2 border-b border-gray-300">
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio"
                    value="male"
                    checked={userDetails.gender === "male"}
                    name="gender"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    value="female"
                    className="form-radio"
                    checked={userDetails.gender === "female"}
                    disabled={!canEdit}
                    name="gender"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
                <label className="flex items-center space-x-1 cursor-pointer">
                  <input
                    type="radio"
                    value="others"
                    className="form-radio"
                    disabled={!canEdit}
                    checked={userDetails.gender === "others"}
                    name="gender"
                  />
                  <span className="text-gray-700">Others</span>
                </label>
              </div>
            </div>
            <div className="px-4 py-2 border-b border-gray-300 font-medium">
              Date of Birth
            </div>
            <div className="flex px-4 py-2 border-b border-gray-300">
              <input
                type="date"
                name="dob"
                className="border border-gray-300 rounded w-full px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500"
                placeholder="First name"
                value={formData.dob}
                onChange={handleChange}
                disabled={!canEdit}
              />
            </div>
            <div className="px-4 py-2 border-b border-gray-300 font-medium">
              Mobile Number
            </div>
            <div className="px-4 py-2 border-b border-gray-300 flex items-center justify-between">
              <input
                type="number"
                className="border border-gray-300 rounded px-3 py-2 placeholder-gray-400 text-gray-700 focus:outline-none focus:border-brown-500 flex-grow mr-2"
                placeholder="XXXXX XXXXX"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!canEdit}
              />
            </div>
            {canEdit && (
              <div className="justify-center flex border-b">
                <button
                  className="bg-blue-500 text-white border-[2px] rounded px-1 m-1"
                  onClick={() => setCanEdit(false)}
                >
                  Close
                </button>
                <button
                  className="bg-green-500 text-white border-[2px] rounded px-1 m-1"
                  onClick={handleSubmit}
                >
                  Save
                </button>
              </div>
            )}
          </form>
        </div>
        {showModalComplete && (
          <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50"
            onClick={() => setShowModalComplete(false)}
          >
            <div
              className="bg-white p-4 rounded shadow relative"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-center p-2.5 text-[#40773b] font-bold">
                Changes updated successfully
              </p>
              <img src={success} alt="success" className="w-12 h-12 ml-20 " />
              <button
                onClick={() => setShowModalComplete(false)}
                className="absolute top-2 -right-0.5 bg-transparent border-none"
              >
                {/* Replace the text "Close" with your close icon */}
                <svg
                  className="w-6 h-6 text-[#40773b]"
                  fill="none"
                  viewBox="0 0 40 40"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        <div>
          <div className="flex px-4 py-2 border-b border-gray-300 font-medium items-center">
            Manage Address
            <button
              className="ml-auto border-[2px] px-1 rounded border-black "
              onClick={() => setAddModal(true)}
            >
              Add
            </button>
          </div>
          {addModal && <AddAddressModal setAddModal={setAddModal} />}
          <div className="px-4 py-2">
            {addressDetails.map((details) => (
              <div
                key={details._id}
                className="flex bg-white rounded p-4 border border-gray-300 mb-2"
              >
                <div className="flex-col flex">
                  <p className="text-gray-600 font-medium mb-1">
                    {details.name}
                  </p>
                  <p className="text-gray-600 text-sm mb-1">
                    {details.address}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {details.district}, {details.state} - {details.pincode}
                  </p>
                </div>
                <div className="flex flex-col gap-4 ml-auto justify-center">
                  <FaTrash
                    onClick={() => deleteAddress(details._id)}
                    className="w-5 h-5 ml-auto cursor-pointer text-red-800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
