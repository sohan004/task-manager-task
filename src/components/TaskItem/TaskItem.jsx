import React from "react";
import dayjs from "dayjs";
import { FaCheck } from "react-icons/fa";
import { MdDelete, MdModeEdit, MdOutlineCheck } from "react-icons/md";

const TaskItem = ({
  handleComplete,
  editTask,
  setEditTask,
  addNewTask,
  setAddNewTask,
  handleDelete,
  item,
}) => {
  const handleClick = () => {
    handleComplete(item.id);
  };

  const handleEdit = (item) => {
    setEditTask(item);
    setAddNewTask(true);
  };

  return (
    <div>
      <div className={`card ${item.completed ? "active-card" : ""}`}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="card-status">
          <div>
            <h4>{dayjs(item.createdAt).format("DD MMM, YYYY")}</h4>
            <p>
              Status:{" "}
              <span className="closed">
                {item.completed ? "Completed" : "Pending"}
              </span>
            </p>
          </div>
          <div className="btn-group">
            {!item.completed && (
              <button onClick={handleClick} className="open-btn">
                <MdOutlineCheck size={20} />
              </button>
            )}
            <button
              style={{ backgroundColor: "#7778A8" }}
                onClick={() => handleEdit(item)}
              className="open-btn"
            >
              <MdModeEdit size={20} />
            </button>
            <button
              style={{ backgroundColor: "#E46962" }}
                onClick={() => handleDelete(item.id)}
              className="open-btn"
            >
              <MdDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
