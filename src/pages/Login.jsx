import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import google from "../assets/google.png";

const Login = () => {
  const nav = useNavigate();
  const [showPswd, setShowPswd] = useState(false);
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
      <div className="bg-gray-100 h-screen">
        <ToastContainer />
        <div className="h-100% flex justify-center items-center bg-gray-100 xs:p-3 sm:p-4 md:p-5 lg:p-12 xl:p-12 2xl:p-14">
          <div className="bg-white px-16 rounded-md shadow-lg w-[440px] xs:p-4 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-14">
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
                required
              />
              <div className="relative flex items-center">
                <input
                  type={showPswd ? "text" : "password"}
                  value={pswd}
                  onChange={(e) => setPswd(e.target.value)}
                  placeholder="Password"
                  className="input-field border-[1px] p-2 rounded border-[#0d5b41] w-full"
                  required
                />
                <FaEye
                  onClick={() => setShowPswd(!showPswd)}
                  className=" cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                />
              </div>
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
                className="submit-button bg-green-700 text-white h-10 p-2 rounded z-20"
              >
                Submit
              </button>
            </form>
            <p className="text-start mt-4">
              By continuing, you agree to Curelli Foods{" "}
              <Link
                to="/policy"
                className=" font-semibold cursor-pointer hover:text-[#2a64ba] text-[#277933]"
              >
                Privacy Policy.
              </Link>
            </p>
            <hr className="my-3" />
            <button
              className="submit-button text-black p-2 border-2 my-2
                 rounded-full flex items-center w-full"
            >
              <img src={google} alt="google logo" className="h-6 mr-2" />
              <p className="flex justify-center">Signup with Google</p>
            </button>
            <hr className="my-3" />
            <button
              className="submit-button text-black p-2 border-2
               rounded-full flex items-center justify-center font-semibold hover:bg-[#277933] hover:text-white w-full"
              onClick={() => nav("/register")}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
