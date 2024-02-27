import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import apple from "../assets/apple-logo.png";

function Register() {
  const nav = useNavigate();

  // State variables
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpGenerated, setOtpGenerated] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();

    const trimmedPswd = pswd.trim();
    const trimmedConfirmPswd = confirmPswd.trim();

    if (trimmedPswd === trimmedConfirmPswd) {
      try {
        setLoading(true);

        const existsResponse = await fetch(
          `${import.meta.env.VITE_API}users/${mail}`
        );

        if (existsResponse.status === 200) {
          toast.error("User already exists");
          return;
        }

        const res = await fetch(`http://localhost:3001/users/sendOTP`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ mail }),
        });
        const data = await res.json();
        setOtpGenerated(data.otp);
        console.log(data);
        setShowOtp(true);
      } catch (error) {
        console.error("Error during registration:", error.message);
        toast.error("Error during registration. Please try again later.");
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Passwords don't match");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    try {
      if (otp === otpGenerated) {
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
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "mail":
        setMail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "pswd":
        setPswd(value);
        break;
      case "confirmPswd":
        setConfirmPswd(value);
        break;
      case "otp":
        setOtp(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-gray-100 h-screen">
      <ToastContainer />
      <div className="h-100% flex justify-center items-center bg-gray-100 p-12">
        <div className="bg-white p-8 px-16 rounded-md shadow-lg w-[440px]">
          {showOtp ? (
            <>
              <h2 className="text-[#277933] text-2xl mb-6 font-semibold">
                OTP Verification
              </h2>
              <form
                className="flex flex-col gap-6 w-full"
                onSubmit={handleOtpSubmit}
              >
                <input
                  type="text"
                  id="otpInput"
                  name="otp"
                  placeholder="Enter OTP"
                  className="input-field border-[1px] p-2 rounded border-customGreen"
                  value={otp}
                  onChange={handleChange}
                  required
                />
                <hr className="" />
                <p className="text-customGreen flex justify-center">
                  OTP is sent to your above mail Id
                </p>
                <button
                  type="submit"
                  className="submit-button bg-[#277933] text-white h-10 p-2 rounded"
                >
                  Submit
                </button>
              </form>
              {error && !verified && (
                <h2 className="text-[#277933] text-sm mb-6 font-semibold">
                  OTP Verification failed...!
                </h2>
              )}
              {verified && (
                <>
                  <h2 className="text-[#277933] text-sm mb-6 font-semibold">
                    OTP Verified!
                  </h2>
                  <p className="text-[#277933]">
                    You will be redirected to Login in 5 seconds...!!
                  </p>
                </>
              )}
            </>
          ) : (
            <>
              <h2 className="text-[#277933] text-2xl mb-6 text-center font-semibold">
                Register
              </h2>
              <form onSubmit={handleSubmission} className="flex flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Username"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                />

                <input
                  type="email"
                  name="mail"
                  value={mail}
                  onChange={handleChange}
                  placeholder="Email"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                />

                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                />

                <input
                  type="password"
                  name="pswd"
                  value={pswd}
                  onChange={handleChange}
                  placeholder="Password"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                />

                <input
                  type="password"
                  name="confirmPswd"
                  value={confirmPswd}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                />
                {loading && <p className="text-gray-600">Submitting...</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className={`submit-button bg-green-700 text-white h-10 p-2 rounded ${
                    loading && "cursor-not-allowed opacity-50"
                  }`}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
              <p className="text-start mt-4">
                By creating an account or logging in, you agree to Curelli Foods{" "}
                <Link
                  to="/policy"
                  className=" font-semibold cursor-pointer hover:text-[#2a64ba] text-[#277933]"
                >
                  Privacy Policy.
                </Link>
              </p>
              <hr className="my-3" />
              <button className="submit-button text-black p-2 border-2 my-2 rounded-full flex items-center w-full">
                <img src={google} alt="google logo" className="h-6 mr-2" />
                <p className="flex justify-center">Continue with Google</p>
              </button>
              <button className="submit-button text-black p-2 border-2 my-2 rounded-full flex items-center w-full">
                <img src={apple} alt="facebook logo" className=" h-6 mr-2" />
                <p className="flex justify-center">Continue with Apple</p>
              </button>
              <hr className="my-3" />
              <button
                className="submit-button text-black p-2 border-2 rounded-full flex items-center justify-center font-semibold hover:bg-[#277933] hover:text-white w-full"
                onClick={() => nav("/login")}
              >
                Existing Account
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
