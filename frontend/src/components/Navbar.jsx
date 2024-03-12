import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <li>
            <Link to="/">Home</Link>
          </li>
        </div>
        <div className="flex flex-row gap-x-7">
          <li>
            <Link to="/getAllTasks">All Tasks</Link>
          </li>

          <li>
            <Link to="/addTasks">Add Tasks</Link>
          </li>

          <li>
            <Link to="/register">Signup</Link> 
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
