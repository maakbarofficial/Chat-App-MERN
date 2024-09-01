import React from "react";

const Conversation = () => {
  const user = { name: "User 1", online: true }; // Hardcoded user data
  return (
    <div className="flex items-center p-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 cursor-pointer">
      <div className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
        {user.name.charAt(0)}
        {user.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-700 rounded-full"></span>}
      </div>
      <div className="ml-3">{user.name}</div>
    </div>
  );
};

export default Conversation;
