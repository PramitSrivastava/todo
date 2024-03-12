const Task = require("../models/Task");

const addTask = async (req, res) => {
  try {
    const { description, responsible, priority, completed } = req.body;
    const newTask = new Task({
      description,
      responsible,
      priority,
      completed,
    });
    const savedTask = await newTask.save();

    res.status(200).json({
      description: savedTask.description,
      responsible: savedTask.responsible,
      priority: savedTask.priority,
      completed: savedTask.completed,
    });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error getting all tasks:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error("Error getting  task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (task) {
      const { description, responsible, priority, completed } = req.body;
      const updatedTask = await Task.updateOne({
        description: description || task.description,
        responsible: responsible || task.responsible,
        priority: priority || task.priority,
        completed: completed || task.completed,
      });
      res.status(200).json(updatedTask);
    }
  } catch (error) {
    console.error("Error editing task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);
    if (deletedTask) {
      res.status(200).json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ error: "Task not found" });
    }
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { addTask, getAllTasks, getTask, editTask, deleteTask };
