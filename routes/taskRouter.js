const express = require("express");
const {
  getSingleTask,
  getAllTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const router = express.Router();

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getSingleTask).delete(deleteTask).patch(updateTask);

module.exports = router;
