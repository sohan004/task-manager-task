import React from "react";
import TaskInput from "../TaskInput/TaskInput";

const Nav = ({
  setSearchKey,
  setStatusKey,
  searchKey,
  statusKey,
  items,
  setItems,
  addNewTask,
  setAddNewTask,
  editTask,
  setEditTask,
  handleSubmit,
}) => {
  return (
    <nav className="nav-container">
      <input
        onChange={(e) => setSearchKey(e.target.value)}
        value={searchKey}
        type="text"
        placeholder="Search your tasks..."
        className="task-input"
      />

      <div className="checkbox-group">
        <label>
          <input
            checked={statusKey === "all"}
            onChange={(e) => e.target.checked && setStatusKey("all")}
            type="checkbox"
            name="filter"
            value="all"
          />
          All
        </label>
        <label>
          <input
            type="checkbox"
            name="filter"
            value="pending"
            checked={statusKey === "pending"}
            onChange={(e) => e.target.checked && setStatusKey("pending")}
          />
          Pending
        </label>
        <label>
          <input
            type="checkbox"
            name="filter"
            value="completed"
            checked={statusKey === "completed"}
            onChange={(e) => e.target.checked && setStatusKey("completed")}
          />
          Completed
        </label>
      </div>

      <TaskInput
        items={items}
        setItems={setItems}
        addNewTask={addNewTask}
        setAddNewTask={setAddNewTask}
        editTask={editTask}
        setEditTask={setEditTask}
        handleSubmit={handleSubmit}
      />
    </nav>
  );
};

export default Nav;
