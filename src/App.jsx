import React from 'react'
import Login from './Components/Auth/Login'
import UsereDashboard from './Components/dashboards/UsereDashboard'
import { Route, Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user' element={<UsereDashboard/>}>
        
         
        </Route>
      </Routes>
      {/* <UsereDashboard/> */}
    </>
  )
}

export default App
