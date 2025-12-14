import React, { useState } from "react";

const AddTask = (props) => {
  const [subject, setSubject] = useState("");
  const [tag, setTag] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setSubject("");
    setTag("");
    setImage("");
    setDescription("");
  };

  return (
<div
  className="
    absolute
    inset-x-0 top-4
    mx-auto
    bg-neutral-950 text-white rounded-xl
    w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%]
    max-h-[95vh]
    p-4 sm:p-6 md:p-10
    flex flex-col
    overflow-hidden
    sm:top-1/2 sm:left-1/2
    sm:-translate-x-1/2 sm:-translate-y-1/2
  "
>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-500">
          Your Problem
        </h1>
        <button onClick={()=>{
          props.setOpen(false)
        }} className="h-9 w-9 sm:h-10 sm:w-10 text-gray-500 border-2 border-gray-500 rounded-full flex justify-center items-center ">
          X
        </button>
      </div>

      {/* Form */}
      <form
        id="addTask"
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-4 sm:gap-5 mt-5 h-[calc(100%-60px)] overflow-y-scroll pr-1"
      >
        {/* Subject */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <label
            className="text-emerald-500 text-base sm:text-lg font-semibold"
            htmlFor="subject"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Enter Subject"
            required
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="text-gray-300 bg-transparent outline-none border-2 border-emerald-800 rounded py-2 px-4 text-base sm:text-lg"
          />
        </div>

        {/* Tag */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <label
            className="text-emerald-500 text-base sm:text-lg font-semibold"
            htmlFor="tag"
          >
            Tag {"(optional)"}:
          </label>
          <input
            type="text"
            id="tag"
            placeholder="Enter Tag"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
            className="text-gray-300 bg-transparent outline-none border-2 border-emerald-800 rounded py-2 px-4 text-base sm:text-lg"
          />
        </div>

        {/* Image */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <label
            className="text-emerald-500 text-base sm:text-lg font-semibold"
            htmlFor="image"
          >
            Upload Image of Problem:
          </label>
          <input
            type="file"
            id="image"
            required
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            className="text-gray-300 outline-none border-2 border-emerald-800 rounded py-2 px-4 text-sm sm:text-base"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <label
            className="text-emerald-500 text-base sm:text-lg font-semibold"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            id="description"
            required
            placeholder="Enter Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows="4"
            className="text-gray-300 bg-transparent outline-none border-2 border-emerald-800 rounded py-2 px-4 text-base sm:text-lg resize-none"
          ></textarea>
        </div>

        {/* Note */}
        <div className="bg-red-600 rounded p-3 text-xs sm:text-sm">
          <h2 className="font-semibold">Note:</h2>
          <p>
            Remember that the problem you add on this website will be
            automatically removed after 36 hours.
          </p>
        </div>

        {/* Button */}
        <div className="w-full flex justify-end">
          <button
            type="submit"
            className="bg-emerald-900 hover:bg-emerald-800 transition rounded py-2 sm:py-3 px-4 sm:px-6 text-base sm:text-xl font-medium"
          >
            Add Problem
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
