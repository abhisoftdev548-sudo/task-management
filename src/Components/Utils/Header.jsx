import React from 'react'

const Header = ({user, logOut}) => {

  if (!user) return null 
  return (
    <div className='flex justify-between items-center p-10 '>
      <h1 className='font-semibold text-2xl'>Hello <br /> <span className='text-3xl'>{user.name}👋</span></h1>
      <button className='bg-red-500 rounded p-2 font-medium text-sm' onClick={()=>{logOut()}}>Log Out</button>
    </div>
  )
}

export default Header
