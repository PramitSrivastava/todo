import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoggedIn }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to login");
      }
      setLoggedIn(true); // Set isLoggedIn state to true upon successful login
      setData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // Render the login form
  return (
    <div className="border rounded-md p-5 border-slate-950 text-center w-96 mx-auto max">
      <h1 className="mb-7 text-3xl">Login</h1>
      <form className="flex flex-col mb-5" onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Your email"
            className="border"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            value={data.password}
            onChange={handleChange}
            className="border"
          />
        </div>
        <div>
          <button className="border rounded-md w-20 hover:bg-blue-500 hover:text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
