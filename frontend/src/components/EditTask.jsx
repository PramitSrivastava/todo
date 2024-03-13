import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditTask = () => {
  const { id } = useParams(); // Extracting the ID from the URL
  const navigate = useNavigate();
  // Define state to store task data
  const [task, setTask] = useState({
    description: "",
    responsible: "",
    priority: "",
    completed: false,
  });

  // useEffect hook to fetch task data
  useEffect(() => {
    // Define a function to fetch task data
    const fetchTask = async () => {
      try {
        // Make a GET request to fetch task data using the ID from the URL
        const response = await axios.get(
          `http://localhost:2000/api/task/getTask/${id}`
        );
        // Update the state with the fetched task data
        setTask(response.data);
      } catch (error) {
        // Handle errors if any
        console.error("Error fetching task:", error);
      }
    };

    // Call the fetchTask function when the component mounts
    fetchTask();
  }, [id]); // Depend on id so that useEffect runs whenever id changes

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Make a PUT request to update task data
      await axios.patch(`http://localhost:2000/api/task/editTask/${id}`, task);
      // Handle success, e.g., show a success message or redirect to another page
      alert("Task updated successfully");
      navigate("/getAllTasks");
    } catch (error) {
      // Handle errors if any
      console.error("Error updating task:", error);
    }
  };

  // Function to handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <div className="border rounded-md p-5 border-slate-950 text-center w-96 mx-auto max">
      <h1 className="mb-7 text-3xl">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-5">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Task Description"
            className="border"
            value={task.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label>Responsible</label>
          <input
            type="text"
            name="responsible"
            placeholder="Who is responsible"
            className="border"
            value={task.responsible}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label>Priority</label>
          <input
            type="text"
            name="priority"
            placeholder="Priority"
            className="border"
            value={task.priority}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label>Completed</label>
          <select
            name="completed"
            className="border"
            value={task.completed}
            onChange={handleChange}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className="border rounded-md w-20 hover:bg-blue-500 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
