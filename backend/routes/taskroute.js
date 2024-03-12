const express = require("express");
const {
  addTask,
  getAllTasks,
  getTask,
  editTask,
  deleteTask,
} = require("../controllers/taskController");
const router = express.Router();

router.post("/addTask", addTask);
router.get("/getTasks", getAllTasks);
router.get("/:id", getTask);
router.patch("/:id", editTask);
router.delete("/:id", deleteTask);

module.exports = router;
