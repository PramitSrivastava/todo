import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:2000/api/task/getTasks");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data); // Assuming your API returns an array of tasks
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const handleEdit = (id) => {
    // Redirect to EditTask component with the task ID as a parameter
    navigate(`/editTask/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to your API endpoint
      await axios.delete(`http://localhost:2000/api/task/deleteTask/${id}`);
      console.log("Task deleted successfully");
      // Refresh tasks list after deletion
      const updatedTasks = tasks.filter((task) => task._id !== id);
      setTasks(updatedTasks);
    } catch (error) {
      // Handle errors if any
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-center mb-4">All Tasks</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tasks.map((task) => (
          <div key={task._id} className="border rounded-md p-4 ">
            <p>
              <strong>Description:</strong> {task.description}
            </p>
            <p>
              <strong>Responsible:</strong> {task.responsible}
            </p>
            <p>
              <strong>Priority:</strong> {task.priority}
            </p>
            <p>
              <strong>Completed:</strong> {task.completed ? "Yes" : "No"}
            </p>
            <div className="flex">
              <div className="mt-2 flex-row">
                <button
                  className="border rounded-md px-3 py-1 bg-blue-500 text-white hover:bg-blue-600"
                  onClick={() => handleEdit(task._id)}
                >
                  Edit
                </button>
              </div>
              <div className=" mt-2 flex text-right ml-52">
                <button
                  className="border rounded-md px-3 py-1 bg-red-500 text-white hover:bg-blue-600"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
