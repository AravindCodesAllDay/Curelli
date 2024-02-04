import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import img1 from "../assets/curelli_logo.webp";
import google from "../assets/google.svg";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (pswd === confirmPswd) {
      try {
        setLoading(true);
        const existsResponse = await fetch(
          `${import.meta.env.VITE_API}users/${mail}`
        );

        if (existsResponse.status === 200) {
          toast.error("User already exists");
        } else {
          const registerResponse = await fetch(
            `${import.meta.env.VITE_API}register`,
            {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ name, mail, phone, pswd }),
            }
          );

          if (!registerResponse.ok) {
            toast.error(`Registration failed: ${registerResponse.statusText}`);
            console.error(
              `Registration failed: ${registerResponse.statusText}`
            );
            return;
          }

          toast.success("Registration Successful");
          const resp = await registerResponse.json();
          console.log(resp);
          // Reset form fields
          setName("");
          setMail("");
          setPhone("");
          setPswd("");
          setConfirmPswd("");
          nav("/");
        }
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

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <ToastContainer />
        <div className="flex flex-row bg-gray-100 justify-center">
          <Link to="/home">
            <img
              className="relative h-[100px] object-cover"
              alt="Image"
              src={img1}
            />
          </Link>
        </div>
        <div className="h-100% flex justify-center items-center bg-gray-100 p-12">
          <div className="bg-white p-8 px-16 rounded-md shadow-lg w-[440px]">
            <h2 className="text-[#277933] text-2xl mb-6 text-center font-semibold">
              Register
            </h2>
            <form onSubmit={handleSubmission} className="flex flex-col gap-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              <input
                type="email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                placeholder="Email"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              <input
                type="password"
                value={pswd}
                onChange={(e) => setPswd(e.target.value)}
                placeholder="Password"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              <input
                type="password"
                value={confirmPswd}
                onChange={(e) => setConfirmPswd(e.target.value)}
                placeholder="Confirm Password"
                className="input-field border-[1px] p-2 rounded border-[#0d5b41]"
              />
              {loading && <p className="text-gray-600">Submitting...</p>}
              <button
                type="submit"
                disabled={loading}
                className={`submit-button bg-[#277933] text-white h-10 p-2 rounded ${
                  loading && "cursor-not-allowed opacity-50"
                }`}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
              <p className="mt-4 text-gray-600 text-center">
                Already have an account?
                <Link to="/" className="text-[#277933] cursor-pointer">
                  Login
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
}

export default Register;
