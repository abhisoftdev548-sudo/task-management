import React, { useContext, useEffect, useState } from "react";
import Header from "../Utils/Header";
import AddTask from "../Tasks/AddTask";
import { AuthContext } from "../../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../Contexts/TaskContext";
import TaskCard from "../Utils/TaskCard";

const UsereDashboard = () => {
  const [open, setOpen] = useState(false)
    const { tasks, setCurrentTask } = useContext(TaskContext);
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate("/")
    localStorage.clear()
   
  }
    useEffect(() => {
    if (!currentUser) {
      navigate("/")
    }
  }, [currentUser, navigate])
  return (
    <div className="min-h-screen bg-[#1c1c1c] text-white relative">
      
      <div className={`${open?"opacity-5":""}`}>
        <Header user={currentUser} logOut={handleLogout} />
        <div className="p-10 px-15 flex justify-center md:justify-between items-center">
          <p className="text-3xl hidden md:flex">👍</p>
          <button onClick={()=>{
              setOpen(true)
            }} className="font-medium text-xl bg-emerald-800 p-2 rounded">
            Share Your Study Problem
          </button>
        </div>
        <div className="py-10 px-15  ">
          <h1 className="text-2xl font-bold">Today's Problems</h1>
          <div className="py-10">
            {/* <p className="text-gray-300 text-center text-xl md:mt-10">
              No Problems Found
            </p> */}
             <div className="flex flex-wrap gap-6">
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onClick={() => setCurrentTask(task)}
        />
      ))}
    </div>
          </div>
        </div>
      </div>
              {open?<AddTask setOpen={setOpen} />:""}
    </div>
  );
};

export default UsereDashboard;
