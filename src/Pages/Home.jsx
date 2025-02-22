import React, { useState, useEffect, useContext } from "react";
import UserContext from "../Context/AuthContext";
import { useNavigate } from "react-router";
import ThemeContext from "../Context/ThemeProvider";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import io from "socket.io-client";
import axios from "axios";
import { toast } from "sonner";
const socket = io(`${import.meta.env.VITE_API}`);

const initialColumns = {
  "To-Do": [],
  "In Progress": [],
  Done: [],
};


const Home = () => {
const {theme} = useContext(ThemeContext)
const navigate = useNavigate()
const {user} = useContext(UserContext)
const [columns, setColumns] = useState(initialColumns);
const [newTask, setNewTask] = useState({
  title: "",
  description: "",
  category: "To-Do",
});

// Fetch tasks and distribute them into columns
const fetchTasks = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API}/tasks`);
    const newColumns = { "To-Do": [], "In Progress": [], Done: [] };
    res.data.forEach((task) => {
      newColumns[task.category].push(task);
    });
    setColumns(newColumns);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {
  fetchTasks();
  socket.on("update", () => {
    fetchTasks();
  });
  return () => socket.off("update");
}, []);


  // Professional Add Task Form
  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) {
      toast.error("Task title is required");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_API}/tasks`, newTask);
      toast.success("Task added successfully");
      setNewTask({ title: "", description: "", category: "To-Do" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to add task");
    }
  };


  if (!user) return navigate("/login");

  return (
    <div
      className={`${theme === "dark" ? "bg-gray-100 text-gray-900" : ""} p-3 container mx-auto  dark:bg-gray-900 min-h-screen  dark:text-gray-100`}
    >

      <h1 className="text-3xl font-bold text-center my-4 ">Professional Task Manager</h1>
      
      {/* Add task */}
      <form
          onSubmit={handleAddTask}
          className="mb-4 flex flex-col md:flex-row md:items-center bg-blue-200 dark:bg-gray-800 p-4 rounded shadow"
        >
          <div className="flex-1 mb-2 md:mb-0 md:mr-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              required
              maxLength={50}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex-1 mb-2 md:mb-0 md:mr-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description
            </label>
            <input
              type="text"
              placeholder="Enter description (optional)"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              maxLength={200}
              className="w-full border border-gray-300 dark:border-gray-600 rounded p-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2 mt-6 dark:bg-metal-700"
          >
            Add Task
          </button>
        </form>


    </div>
  );
};

export default Home;
