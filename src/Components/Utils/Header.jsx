import React from 'react'

const Header = ({user}) => {
console.log(user)
  return (
    <div className='flex justify-between items-center p-10 '>
      <h1 className='font-semibold text-2xl'>Hello <br /> <span className='text-3xl'>{user.length > 0 ? user[user.length - 1].name : "Guest"}👋</span></h1>
      <button className='bg-red-500 rounded p-2 font-medium text-sm'>Log Out</button>
    </div>
  )
}

export default Header
