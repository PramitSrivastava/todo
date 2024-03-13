import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import AllTasks from "./components/AllTasks";
import AddTasks from "./components/AddTasks";
import Home from "./components/Home";
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setLoggedIn={setLoggedIn} />} 
        />
        <Route path="/register" element={<Signup />} />
        <Route path="/getAllTasks" element={<AllTasks />} />
        <Route path="/addTasks" element={<AddTasks />} />
        <Route path="/editTask/:id" element={<EditTask />} />
        <Route path="/deleteTask/:id" element={<DeleteTask />} />

      </Routes>
    </div>
  );
}
