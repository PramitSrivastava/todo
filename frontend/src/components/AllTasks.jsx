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

  const handleEdit = (index) => {
    // Redirect to EditTask component with the index as a parameter
    navigate(`/editTask/${index}`);
  };

  return (
    <div>
      <h1 className="text-3xl text-center">All Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <div className="flex flex-col border text-center mx-auto w-96 h-32">
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
            <div className="mt-2">
              <button
                className="border rounded-md px-3 py-1 bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => handleEdit(task._id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default AllTasks;
