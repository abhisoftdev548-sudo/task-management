import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {

  // 🔹 load from localStorage
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [currentTask, setCurrentTask] = useState(null);

  // 🔹 save to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, currentTask, setCurrentTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
