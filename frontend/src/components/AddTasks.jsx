import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddTasks = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    description: "",
    responsible: "",
    priority: "",
    completed: "",
  });
  const handleChange = async (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2000/api/task/addTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      setData({
        description: "",
        responsible: "",
        priority: "",
        completed: "",
      });

      alert("Task added successfully");
      navigate("/getAllTasks");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Failed to add task");
    }
  };

  return (
    <div className="border rounded-md p-5  border-slate-950 text-center w-96  mx-auto max  ">
      <h1 className="mb-7 text-3xl">Add tasks</h1>

      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col mb-5">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Task Description"
            className="border"
          />
        </div>
        <div className=" flex flex-col   mb-5">
          <label>Responsible</label>
          <input
            type="text"
            name="responsible"
            value={data.responsible}
            onChange={handleChange}
            placeholder="who is responsible"
            className="border "
          />
        </div>
        <div className=" flex flex-col mb-5">
          <label>Priority</label>
          <input
            type="text"
            name="priority"
            value={data.priority}
            onChange={handleChange}
            placeholder="Priority"
            className="border "
          />
        </div>
        <div className=" flex flex-col mb-5">
          <label>Completed</label>
          <input
            type="boolean"
            name="completed"
            value={data.completed}
            onChange={handleChange}
            placeholder="Status"
            className="border "
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

export default AddTasks;
