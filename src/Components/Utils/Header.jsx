import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center p-10 '>
      <h1 className='font-semibold text-2xl'>Hello <br /> <span className='text-3xl'>Abhishek👋</span></h1>
      <button className='bg-red-500 rounded p-2 font-medium text-sm'>Log Out</button>
    </div>
  )
}

export default Header
