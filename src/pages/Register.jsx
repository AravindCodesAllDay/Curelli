import { useState } from "react";
import google from "../assets/google.svg";

function Register() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [pswd, setPswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");

  const handleSubmission = async (e) => {
    e.preventDefault();

    if (pswd === confirmPswd) {
      try {
        const res = await fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, mail, phone, pswd }),
        });
        const resp = await res.json();
        console.log(resp);

        setName("");
        setMail("");
        setPhone("");
        setPswd("");
        setConfirmPswd("");
      } catch (error) {
        console.error(error.message);
      }
    } else {
      console.error("Password doesn't match");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-lg w-96">
        <h2 className="text-[#277933] text-2xl mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmission} className="flex flex-col gap-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            className="input-field border-b-2"
          />
          <input
            type="email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            placeholder="Email"
            className="input-field border-b-2"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="input-field border-b-2"
          />
          <input
            type="password"
            value={pswd}
            onChange={(e) => setPswd(e.target.value)}
            placeholder="Password"
            className="input-field border-b-2"
          />
          <input
            type="password"
            value={confirmPswd}
            onChange={(e) => setConfirmPswd(e.target.value)}
            placeholder="Confirm Password"
            className="input-field border-b-2"
          />
          <button
            type="submit"
            className="submit-button bg-[#277933] text-white h-8"
          >
            Submit
          </button>
          <p className="mt-4 text-gray-600 text-center">
            Already have an account?{" "}
            <span className="text-[#277933] cursor-pointer">Login</span>
          </p>
        </form>
        <hr className="my-3" />
        <div className="mt-3 border-2 rounded-full flex items-center justify-center">
          <img src={google} alt="google logo" className="w-6 h-8 mr-2" />
          <p className="text-gray-700">Sign up using Google</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
