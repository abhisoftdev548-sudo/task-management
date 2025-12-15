import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Contexts/AuthContext.jsx'
import { BrowserRouter } from "react-router-dom";
import TaskProvider from './Contexts/TaskContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <TaskProvider>

    <App/>
    </TaskProvider>
  </AuthProvider>
  </BrowserRouter>
   
 
)
