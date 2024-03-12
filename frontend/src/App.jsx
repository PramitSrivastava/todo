import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import AllTasks from "./components/AllTasks";
import AddTasks from "./components/AddTasks";
import Home from "./components/Home";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/getAllTasks" element={<AllTasks />} />
        <Route path="/addTasks" element={<AddTasks />} />
      </Routes>
    </div>
  );
}
