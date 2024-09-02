import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Logo_02.png";

export default function ForgotPswd() {
  const [mail, setMail] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (showOtp === true) {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API}users/verifyOTP/${mail}`,
          {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ otp }),
          }
        );

        if (res.ok) {
          setVerified(true);

          const registerResponse = await fetch(
            `${import.meta.env.VITE_API}users`,
            {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({ name, mail, phone, pswd }),
            }
          );

          if (!registerResponse.ok) {
            toast.error(`Registration failed: ${registerResponse.statusText}`);
            return;
          }

          toast.success("Registration Successful");
          setTimeout(() => {
            nav("/login");
          }, 5000);
        } else {
          setError(true);
          toast.error("OTP verification failed. Please try again.");
        }
      } catch (error) {
        console.error("Error during OTP verification:", error.message);
        toast.error("Error during OTP verification. Please try again later.");
      }
    } else {
      try {
        setLoading(true);

        const existsResponse = await fetch(
          `${import.meta.env.VITE_API}users/${mail}`
        );

        if (existsResponse.status === 200) {
          toast.error("User already exists");
          return;
        }

        const res = await fetch(`${import.meta.env.VITE_API}users/sendOTP`, {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ mail }),
        });

        if (res.ok) {
          setShowOtp(true);
        }
      } catch (error) {
        console.error("Error during registration:", error.message);
        toast.error("Error during registration. Please try again later.");
      }
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
            value={mail}
            onChange={(e) => setMail(e.target.value)}
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
            className="submit-button bg-green-700 text-white h-10 p-2 rounded"
          >
            {showOtp ? "Submit" : "Next"}
          </button>
        </form>
      </div>
    </div>
  );
}
