import { useState } from "react";

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
      <div className="bg-white p-12 rounded-md shadow-lg">
        <h2 className="text-[#277933] text-2xl mb-6">Register</h2>
        <form onSubmit={handleSubmission} className="flex flex-col gap-3">
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
          <button type="submit" className="submit-button border-2">
            Submit
          </button>
          <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <span className="text-[#277933] cursor-pointer">Login</span>
          </p>
        </form>
        <div className="mt-6">
          <p className="text-gray-600">Sign up using Google</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
