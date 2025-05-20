import { generateKey } from "@/utils/uniqKey";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineClose, AiOutlinePlusCircle } from "react-icons/ai";

const TaskInput = ({
  items,
  setItems,
  addNewTask,
  setAddNewTask,
  editTask,
  setEditTask,
  handleSubmit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title);
      setDescription(editTask.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editTask]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    const newTask = {
      id: editTask ? editTask?.id : generateKey(),
      title,
      description,
      completed: editTask ? editTask.completed : false,
      createdAt: editTask?.createdAt
        ? editTask.createdAt
        : new Date().toLocaleString(),
    };

    handleSubmit(
      title,
      description,
      newTask.id,
      newTask.createdAt,
      newTask.completed
    );

    setTitle("");
    setDescription("");
    setAddNewTask(false);
    setEditTask(null);
    toast.success(
      editTask ? "Task updated successfully!" : "Task added successfully!"
    );
  };

  return (
    <div className="task-input-container">
      <button className="add-task-btn" onClick={() => setAddNewTask(true)}>
        <AiOutlinePlusCircle size={20} style={{ marginRight: "8px" }} />
        Add Task
      </button>

      {addNewTask && (
        <div className="modal-overlay">
          <div className="add-modal">
            <div className="modal-header">
              <h3>{editTask ? "Edit" : "Add New"} Task</h3>
              <AiOutlineClose
                size={22}
                className="close-icon"
                onClick={() => setAddNewTask(false)}
              />
            </div>

            <div className="modal-body">
              <label>
                Task Title <span>*</span>
              </label>
              <form onSubmit={handleAdd} action="">
                <input
                  required
                  type="text"
                  placeholder="Enter task title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label>
                  Task Description <span>*</span>
                </label>
                <textarea
                  placeholder="Enter task description"
                  rows="4"
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <button className="save-btn">
                  {editTask ? "Update Task" : "Add Task"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskInput;
