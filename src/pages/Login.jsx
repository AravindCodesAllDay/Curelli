import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs"; // Import bcryptjs library

const Login = () => {
  const [mail, setMail] = useState("");
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmission = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://aravindsiva1509.vercel.app/${mail}`
      );
      if (!response.ok) {
        throw new Error("User not found");
      }

      const user = await response.json();

      // Assuming your backend sends hashedPassword as 'pswd'
      const tablePassword = user.pswd;

      // Now you need to compare the hashed password with the entered password
      const passwordsMatch = await comparePasswords(passWord, tablePassword);

      if (passwordsMatch) {
        console.log("Login successful...");
        // Perform actions like storing tokens in sessionStorage, redirecting, etc.
        navigate("/");
      } else {
        console.log("Login failed: Incorrect password");
        alert("Login failed: Incorrect password");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("User not found");
    }
  };

  // Function to compare hashed passwords using bcryptjs
  const comparePasswords = async (enteredPassword, hashedPassword) => {
    try {
      // Use bcryptjs to compare passwords
      const result = await bcrypt.compare(enteredPassword, hashedPassword);
      return result;
    } catch (error) {
      console.error("Error comparing passwords:", error.message);
      return false;
    }
  };

  return (
    <>
      <div className="flex mt-60 justify-center">
        <form onSubmit={handleSubmission}>
          <div className="w-full p-8 shadow-xl max-w-prose ">
            <div className=" p-8">
              <label>Mail Id</label>
              <input
                type="text"
                className="w-full shadow-md rounded py-2 px-3 mt-1 mb-4 bg-gray-50 font-admin  focus:outline-none"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                className="w-full shadow-md rounded py-2 px-3 mt-1 mb-4 bg-gray-50 font-admin  focus:outline-none"
                value={passWord}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-1/2 shadow-md rounded py-2 px-3 mt-1 bg-gray-50 font-admin  focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
