import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import google from "../assets/google.png";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Register() {
  window.scrollTo(0, 0);
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
  const [showPswd, setShowPswd] = useState(false);
  const [showConfPswd, setShowConfPswd] = useState(false);
  const [user, setUser] = useState(null);
  const [wrongPswd, setWrongPswd] = useState(false);

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

        const res = await fetch(`${import.meta.env.VITE_API}users/sendOTP`, {
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
      setWrongPswd(true);
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
        }, 3000);
      } else {
        setError(true);
        toast.error("OTP verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during OTP verification:", error.message);
      toast.error("Error during OTP verification. Please try again later.");
    }
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      setLoading(true);
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then(async (res) => {
          console.log(res.data);
          const response = await fetch(
            `${import.meta.env.VITE_API}users/${res.data.email}`
          );
          if (response.ok) {
            console.log("User already exists");
            const data = await response.json();
            localStorage.setItem("id", data._id);
            localStorage.setItem("name", data.name);
            nav("/");
          } else {
            const result = await fetch(
              `${import.meta.env.VITE_API}users/google`,
              {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  mail: res.data.email,
                  name: res.data.name,
                }),
              }
            );
            if (result.ok) {
              const data = await result.json();
              console.log(data);
              localStorage.setItem("id", data._id);
              localStorage.setItem("name", data.name);
              nav("/");
            }
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      if (user) {
        googleLogout();
      }
    };
  }, [user]);

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
      <div className="h-100% flex justify-center items-center bg-gray-100 xs:p-3 sm:p-4 md:p-5 lg:p-12 xl:p-12 2xl:p-14">
        <div className="bg-white rounded-md shadow-lg w-[440px] xs:p-4 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-14">
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
                  type="email"
                  name="mail"
                  value={mail}
                  placeholder="Email"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                  disabled
                  required
                />
                <input
                  type="text"
                  id="otpInput"
                  name="otp"
                  placeholder="Enter OTP"
                  className="input-field border-[1px] p-2 rounded border-customGreen"
                  value={otp}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
                <hr className="" />
                <p className="text-customGreen flex justify-center">
                  OTP is sent to your above mail Id
                </p>
                <button
                  type="submit"
                  className="submit-button bg-green-700 text-white h-10 p-2 rounded"
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
                    You will be redirected to Login in 3 seconds...!!
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
                  required
                />

                <input
                  type="email"
                  name="mail"
                  value={mail}
                  onChange={handleChange}
                  placeholder="Email"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                  required
                />

                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
                  inputMode="numeric"
                  required
                />
                <div className="relative flex items-center">
                  <input
                    type={showPswd ? "text" : "password"}
                    name="pswd"
                    value={pswd}
                    onChange={handleChange}
                    placeholder="Password"
                    className="input-field border-[1px] p-2 rounded border-[#0d5b41] w-full"
                    required
                    autoComplete="off"
                  />
                  <FaEye
                    onClick={() => setShowPswd(!showPswd)}
                    className=" cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type={showConfPswd ? "text" : "password"}
                    name="confirmPswd"
                    value={confirmPswd}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={`input-field border-[1px] p-2 rounded border-[#0d5b41] w-full${
                      wrongPswd ? "border-red-800" : ""
                    }`}
                    required
                    autoComplete="off"
                  />
                  <FaEye
                    onClick={() => setShowConfPswd(!showConfPswd)}
                    className=" cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                  />
                </div>
                {wrongPswd && (
                  <p className="flex text-sm text-red-800 underline -mt-3 items-center">
                    Password doesn't match
                  </p>
                )}

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
              <button
                className="submit-button text-black p-2 border-2 my-2 rounded-full flex items-center justify-center w-full"
                onClick={login}
              >
                <img src={google} alt="google logo" className="h-6 mr-2" />
                <p className="font-semibold">Signup with Google</p>
              </button>
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
