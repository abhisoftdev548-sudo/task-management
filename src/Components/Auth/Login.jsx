import React, { useState } from "react";

const Login = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("name", name, "email", email, "password", password)
    setName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="bg-black h-screen w-full flex justify-center items-center text-white px-4 overflow-hidden">
      
      {/* Card */}
      <div className="border-2 border-emerald-600 rounded-2xl 
                       max-w-sm sm:max-w-md md:max-w-lg
                      p-6 sm:p-8 md:p-10">

        <form className="flex flex-col gap-5" onSubmit={submitHandler}>

          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-base sm:text-lg md:text-xl font-bold">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-emerald-600 rounded-xl 
                         py-2 px-4 sm:px-5
                         text-sm sm:text-base md:text-lg
                         outline-none bg-transparent text-gray-300"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-base sm:text-lg md:text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-emerald-600 rounded-xl 
                         py-2 px-4 sm:px-5
                         text-sm sm:text-base md:text-lg
                         outline-none bg-transparent text-gray-300"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-base sm:text-lg md:text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-emerald-600 rounded-xl 
                         py-2 px-4 sm:px-5
                         text-sm sm:text-base md:text-lg
                         outline-none bg-transparent text-gray-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800
                       rounded-xl py-2 sm:py-3
                       text-base sm:text-lg md:text-xl font-semibold"
          >
            Log in
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
