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
router.get("/getTask/:id", getTask);
router.patch("/editTask/:id", editTask);
router.delete("/deleteTask/:id", deleteTask);

module.exports = router;
