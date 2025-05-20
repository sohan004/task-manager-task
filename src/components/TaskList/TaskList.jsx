import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import img from "../../../public/planet.png";
import Image from "next/image";

const TaskList = ({
  filteredItems,
  handleComplete,
  editTask,
  setEditTask,
  addNewTask,
  setAddNewTask,
  handleDelete,
}) => {
  return (
    <div>
      <div className="task-list">
        {filteredItems?.map((item, i) => (
          <TaskItem
            key={i}
            item={item}
            handleComplete={handleComplete}
            editTask={editTask}
            setEditTask={setEditTask}
            addNewTask={addNewTask}
            setAddNewTask={setAddNewTask}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      {filteredItems?.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="empty-list"
        >
          <Image
            style={{ maxWidth: "500px", width: "100%", margin: "20px auto" }}
            src={img}
            alt="empty"
          />
        </div>
      )}
    </div>
  );
};

export default TaskList;
