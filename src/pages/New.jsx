import React from "react";
import { useState, useEffect } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import success from "../assets/checked.png";

export default function New() {
  const userId = sessionStorage.getItem("id");
  const [userDetails, setUserDetails] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    mail: "",
    phone: "",
  });

  const [showModal, setShowModal] = useState(false);

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
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchDetails();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/users/edit/${userId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData), // Convert formData to JSON
      });
      if (res.ok) {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

  return (
    <div className="relative w-[1332px] h-[670px] ml-24 mt-8 bg-[#f4f4f4] rounded-[10px] overflow-hidden">
      <ToastContainer />
      <div>
        <form onSubmit={handleSubmit}>
          <div className="absolute w-[186px] h-[40px] top-[11px] left-[24px]">
            <div className="absolute w-[42px] h-[40px] top-0 left-0">
              <div className="relative w-[40px] h-[40px] bg-[#8b6d50] rounded-[20px] border-[2.5px] border-solid border-white">
                <div className="absolute top-[4px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[normal]">
                  S
                </div>
              </div>
            </div>
            <div className="absolute top-[7px] left-[55px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#a0a0a0] text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
              Hello, Sree
            </div>
          </div>
          <div className="absolute top-[75px] left-[24px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[17px] tracking-[0] leading-[normal]">
            Personal Information
          </div>
          <form>
            <div className="absolute w-[470px] h-[30px] top-[115px] left-[24px]">
              {/* Sree  */}
              <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
                Name
              </div>
              <div className="absolute  top-0 left-0 bg-white">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="absolute outline-none w-[200px] px-2 h-[30px] top-[16px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
                    // placeholder="Sree"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="absolute w-[116px] h-[41px] top-[167px] left-[24px]">
            <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
              Gender
            </div>

            <div className="absolute w-[114px] h-[15px] top-[26px] left-0">
              <div className="absolute w-[46px] h-[15px] top-0 left-0">
                <div className="absolute w-[15px] h-[15px] top-0 left-0 " />
                <div className="space-x-0.5 absolute top-px left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    disabled
                    checked={userDetails.gender === "male"}
                    onChange={handleChange}
                    className="cursor-pointer"
                  />{" "}
                  <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12px] ">
                    Male
                  </span>
                </div>
              </div>

              <div className="absolute w-[57px] h-[15px] top-0 left-[59px]">
                <div className="absolute w-[15px] h-[15px] top-0 left-0" />
                <div className="absolute top-px left-[20px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    disabled
                    className="cursor-pointer"
                  />{" "}
                  <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[#3f3f3f] text-[12px] ">
                    Female
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[204px] h-[56px] top-[224px] left-[24px]">
            {/* Email  */}
            <div className="absolute w-[200px] h-[30px] top-[26px] -left-5">
              <div className="absolute top-[8px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[9px] tracking-[0] leading-[normal]">
                <input
                  className=" outline-none absolute top-[0px] px-2 w-[200px] h-[28px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
                  type="text"
                  name="mail"
                  placeholder="ds04aranganthan@gmail.com"
                  value={formData.mail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
              Email Address
            </div>
          </div>
          <div className="absolute w-[204px] h-[56px] top-[298px] left-[24px]">
            {/* Num  */}
            <div className="absolute w-[200px] h-[30px] top-[26px] -left-5">
              <div className="absolute top-[8px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[9px] tracking-[0] leading-[normal]">
                <input
                  className=" outline-none absolute top-[0px] px-2 w-[200px] h-[28px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#c0c0c0] text-[12px] tracking-[0] leading-[normal]"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="63692 XXXX6"
                />
              </div>
            </div>

            <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
              Mobile Number
            </div>
          </div>
          <div className="absolute top-0 left-0 z-auto bg-[#40773B]">
            <div>
              <button
                type="submit"
                className="absolute w-[95px] h-[56px] top-[350px] left-[1px]  text-[#40773b] font-medium"
                style={{ backgroundColor: "#40773B !important" }}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {showModal && ( // Render modal if showModal is true
          <div
            className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50"
            onClick={closeModal}
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
                onClick={() => setShowModal(false)}
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
      </div>
      <div className="absolute w-[339px] h-[216px] top-[396px] left-[24px]">
        <div className="absolute top-0 left-0 [font-family:'Inter-Medium',Helvetica] font-medium text-[#40773b] text-[12px] tracking-[0] leading-[normal]">
          Manage Address
        </div>
        <div className="absolute top-0 cursor-pointer left-[117px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#8b6d50] text-[12px] tracking-[0] leading-[normal]">
          Add
        </div>
        <div className="absolute w-[335px] h-[167px] top-[49px] left-0">
          <div className="w-[335px] h-[71px] top-0 left-0 absolute bg-white">
            <div className="absolute top-[9px] left-[10px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#616161] text-[13px] tracking-[0] leading-[normal]">
              Aravindhan U D
            </div>
            <p className="absolute top-[29px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Plot No. 11, Senthamil 3rd Street, Villapuram
            </p>
            <p className="absolute top-[44px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Madurai, Tamil Nadu - 625012
            </p>
            <img
              className="absolute w-[20px] h-[20px] top-[26px] left-[291px]"
              alt="Edit"
              src="edit-3-1.svg"
            />
          </div>
          <div className="w-[335px] h-[71px] top-[96px] left-0 absolute bg-white">
            <div className="absolute top-[9px] left-[10px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#616161] text-[13px] tracking-[0] leading-[normal]">
              Aravindhan U D
            </div>
            <p className="absolute top-[29px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Plot No. 11, Senthamil 3rd Street, Villapuram
            </p>
            <p className="absolute top-[44px] left-[10px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#616161] text-[9px] tracking-[0] leading-[normal]">
              Madurai, Tamil Nadu - 625012
            </p>
            <img
              className="absolute w-[20px] h-[20px] top-[26px] left-[291px]"
              alt="Edit"
              src="image.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
