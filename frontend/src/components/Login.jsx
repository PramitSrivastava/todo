import React from "react";

const Login = () => {
  return (
    <div className="border rounded-md  p-5  border-slate-950 text-center w-96  mx-auto max ">
      <h1 className="mb-7 text-3xl">Login</h1>

      <form className="flex flex-col mb-5 ">
        <div className=" flex flex-col  mb-5">
          <label>Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="border bg-gray-800"
          />
        </div>
        <div className=" flex flex-col mb-5">
          <label>Password</label>
          <input
            type="password"
            placeholder="Your password"
            className="border bg-gray-800"
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
