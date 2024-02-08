import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../assets/google.svg";

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
              <button
                type="submit"
                className="submit-button bg-[#277933] text-white h-10 p-2 rounded"
              >
                Submit
              </button>
              <p className="mt-4 text-gray-600 text-center">
                New here?
                <Link to="/register" className="text-[#277933] cursor-pointer">
                  Register
                </Link>
              </p>
            </form>
            <hr className="my-3" />
            <div className="mt-3 border-2 rounded-full flex items-center justify-center">
              <img src={google} alt="google logo" className="w-6 h-8 mr-2" />
              <p className="text-gray-700">Sign up using Google</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
