import React from "react";

const TaskCard = ({ task, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-neutral-900 border border-emerald-800 rounded-xl p-4 w-full sm:w-[300px] hover:border-emerald-500 transition cursor-pointer"
    >
      {/* Image */}
      <div className="w-full h-40 bg-neutral-800 rounded-lg overflow-hidden">
        <img
          src={task.image}
          alt={task.subject}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-3">
        <h2 className="text-emerald-500 text-lg font-semibold truncate">
          {task.subject}
        </h2>

        {task.tag && (
          <span className="inline-block mt-1 text-xs bg-emerald-900 text-emerald-300 px-2 py-1 rounded">
            #{task.tag}
          </span>
        )}

        <p className="text-gray-400 text-sm mt-2 line-clamp-3">
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
