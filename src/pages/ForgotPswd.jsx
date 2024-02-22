import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/Logo_02.png";

export default function ForgotPswd() {
  const [email, setEmail] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showOtp) {
      console.log("OTP submitted:", otp);
    } else {
      setShowOtp(true);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 p-12">
      <Link to="/">
        <img src={img1} alt="Company Logo" className="h-24 m-4" />
      </Link>
      <div className="bg-white p-8 px-12 rounded-md shadow-lg w-[440px] flex flex-col items-center">
        <h2 className="text-[#277933] text-2xl mb-6 font-semibold">
          Forgot Password
        </h2>
        <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="input-field border-[1px] p-2 rounded border-customGreen"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={showOtp}
            required
          />
          {showOtp && (
            <React.Fragment>
              <label htmlFor="otpInput" className="sr-only">
                Enter OTP
              </label>
              <input
                type="text"
                id="otpInput"
                placeholder="Enter OTP"
                className="input-field border-[1px] p-2 rounded border-customGreen"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <hr className="" />
              <p className="text-customGreen flex justify-center">
                OTP is sent to your above mail Id
              </p>
            </React.Fragment>
          )}

          <p className="text-start">
            <Link to="/policy" className="text-customGreen cursor-pointer">
              Curelli Privacy Policy
            </Link>
          </p>
          <button
            type="submit"
            className="submit-button bg-customGreen text-white h-10 p-2 rounded"
          >
            {showOtp ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}
