import { useState } from "react";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:2000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }
        setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Handle successful signup, such as redirecting to login page
    } catch (error) {
      console.error("Signup Error:", error);
      // Handle error, such as displaying error message to user
    }
  };
  return (
    <div className="border rounded-md p-5  border-slate-950 text-center w-96  mx-auto max  ">
      <h1 className="mb-7 text-3xl">Signup</h1>

      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col mb-5">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="border bg-gray-800"
          />
        </div>
        <div className=" flex flex-col   mb-5">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className="border bg-gray-800"
          />
        </div>
        <div className=" flex flex-col mb-5">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
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

export default Signup;
