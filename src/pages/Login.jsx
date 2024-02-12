import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Login = () => {
  const nav = useNavigate();
  const [mail, setMail] = useState("");
  const [pswd, setPswd] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${import.meta.env.VITE_API}users/${mail}`);
      if (!response.ok) {
        throw new Error("User not found");
      }

      const user = await response.json();
      const tablePassword = user.pswd;

      const passwordsMatch = await comparePasswords(pswd, tablePassword);

      if (passwordsMatch) {
        console.log("Login successful...");
        toast.success("Login Successful", {
          position: "top-center",
        });
        // Perform actions like storing tokens in sessionStorage, redirecting, etc.

        sessionStorage.setItem("id", user._id);
        sessionStorage.setItem("name", user.name);
        nav("/");
      } else {
        console.log("Login failed: Incorrect password");
        toast.error("Login failed: Incorrect password");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      toast.error("Error during login, try again later", {
        position: "top-center",
      });
    }
  };

  const comparePasswords = async (enteredPassword, hashedPassword) => {
    try {
      const result = await bcrypt.compare(enteredPassword, hashedPassword);
      return result;
    } catch (error) {
      console.error("Error comparing passwords:", error.message);
      return false;
    }
  };

  return (
    <>
      <div className="bg-gray-100 h-10/12">
        <ToastContainer />
        <div className="h-100% flex justify-center items-center bg-gray-100 p-12">
          <div className="bg-white p-8 px-16 rounded-md shadow-lg w-[440px]">
            <h2 className="text-[#277933] text-2xl mb-6 text-center font-semibold">
              Login
            </h2>
            <form onSubmit={handleSubmission} className="flex flex-col gap-6">
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Email"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              <input
                type="password"
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
                placeholder="Password"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              <p className="text-end">
                <Link
                  to="/forgotpswd"
                  className=" cursor-pointer hover:text-[#b65c21] text-[#2a64ba]"
                >
                  Forgot Password?
                </Link>
              </p>

              <button
                type="submit"
                className="submit-button bg-[#277933] text-white h-10 p-2 rounded"
              >
                Submit
              </button>
              <p className="mt-4 text-gray-600 text-center">
                New to Curelli Foods?
                <Link
                  to="/register"
                  className=" cursor-pointer hover:text-[#b65c21] text-[#2a64ba]"
                >
                  Register
                </Link>
              </p>
            </form>
            <hr className="my-3" />
            <p className="text-gray-700 flex justify-center">
              Sign up using Google
            </p>
            <div className="mt-3 flex items-center justify-center">
              <img src={google} alt="google logo" className="h-8 mr-2" />
              <img src={facebook} alt="facebook logo" className="h-8 mr-2" />
            </div>
          </div>
        </div>
        <div className="bottom-0 left-0 w-full bg-white border-t-2 border-[#277933] ">
          <div className="flex items-center justify-center relative min-w-[320px] min-h-[200px]">
            <p className="text-[#277933] text-[35px] text-center font-extralight tracking-[0] leading-[normal]">
              <p className="text-start">
                <Link
                  to="/policy"
                  className="text-[#2a64ba] font-semibold hover:text-[#b65c21] cursor-pointer"
                >
                  Curelli Privacy Policy
                </Link>
              </p>
              <span className="text-[14px] font-semibold">
                © Curelli Foods 2023
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
