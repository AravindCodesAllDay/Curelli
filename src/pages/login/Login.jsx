import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import bcrypt from "bcryptjs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../assets/google.png";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FaEye } from "react-icons/fa";
import axios from "axios";

const Login = () => {
  window.scrollTo(0, 0);
  const nav = useNavigate();
  const [mail, setMail] = useState("");
  const [pswd, setPswd] = useState("");
  const [user, setUser] = useState(null);
  const [showPswd, setShowPswd] = useState(false);
  const [wrongPswd, setWrongPswd] = useState(false);

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

        localStorage.setItem("id", user._id);
        localStorage.setItem("name", user.name);
        nav("/");
      } else {
        setWrongPswd(true);
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

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
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

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <ToastContainer />
        <div className="h-100% flex justify-center items-center bg-gray-100 xs:p-3 sm:p-4 md:p-5 lg:p-12 xl:p-12 2xl:p-14">
          <div className="bg-white rounded-md shadow-lg w-[440px] xs:p-4 sm:p-8 md:p-10 lg:p-12 xl:p-12 2xl:p-14">
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
                  className={`input-field border-[1px] p-2 rounded border-[#0d5b41] w-full ${
                    wrongPswd ? "border-red-800" : ""
                  }`}
                  required
                />
                <FaEye
                  onClick={() => setShowPswd(!showPswd)}
                  className=" cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
                />
              </div>
              {wrongPswd && (
                <p className="flex text-sm text-red-800 -mt-3 items-center">
                  Incorrect password
                </p>
              )}

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
              className="submit-button text-black p-2 border-2 my-2 rounded-full flex items-center w-full justify-center"
              onClick={login}
            >
              <img src={google} alt="google logo" className="h-6 mr-2" />
              <p className=" font-semibold">Continue with Google</p>
            </button>
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
