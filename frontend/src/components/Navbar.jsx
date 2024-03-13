import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = ({ isLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from local storage
    window.location.href = "/login"; // Redirect to login page after logout
  };

  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        {isLoggedIn && ( // Render links only when user is logged in
          <div className="flex flex-row gap-x-7">
            <li>
              <Link to="/getAllTasks">All Tasks</Link>
            </li>

            <li>
              <Link to="/addTasks">Add Tasks</Link>
            </li>
          </div>
        )}
        {!isLoggedIn && ( // Render login and register links only when user is not logged in
          <div className="flex flex-row gap-x-7">
            <li>
              <Link to="/register">Signup</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        )}
        {isLoggedIn && ( // Render logout button only when user is logged in
          <button onClick={handleLogout}>Logout</button>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
