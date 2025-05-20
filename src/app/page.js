"use client";
import Nav from "@/components/Nav/Nav";
import TaskItem from "@/components/TaskItem/TaskItem";
import TaskList from "@/components/TaskList/TaskList";
import useFilteredItems from "@/Hooks/useFilteredItems";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [items, setItems] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [statusKey, setStatusKey] = useState("all"); // all, pending, completed
  const filteredItems = useFilteredItems(items, statusKey, searchKey);
  const [addNewTask, setAddNewTask] = useState(false);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const storedItems = localStorage.getItem("items");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  console.log("items", filteredItems);

  const handleSubmit = (title, desc, id, createdAt, completed) => {
    const newItem = {
      title,
      description: desc,
      id,
      createdAt,
      completed,
    };
    const findMatchItem = items.find((item) => item.id == id);
    if (findMatchItem) {
      setItems((prevItems) =>
        prevItems.map((item) => (item.id == id ? newItem : item))
      );
    } else {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("Task deleted successfully!");
  };

  const handleComplete = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
    toast.success("Task completed successfully!");
  };

  return (
    <div>
      <Nav
        items={items}
        setItems={setItems}
        addNewTask={addNewTask}
        setAddNewTask={setAddNewTask}
        editTask={editTask}
        setEditTask={setEditTask}
        handleSubmit={handleSubmit}
        setSearchKey={setSearchKey}
        setStatusKey={setStatusKey}
        searchKey={searchKey}
        statusKey={statusKey}
      />

      <TaskList
        editTask={editTask}
        setEditTask={setEditTask}
        addNewTask={addNewTask}
        setAddNewTask={setAddNewTask}
        handleComplete={handleComplete}
        filteredItems={filteredItems}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Page;
