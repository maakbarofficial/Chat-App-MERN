import React from "react";

const Message = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Sender Message */}
      <div className="flex justify-start items-center space-x-2">
        <img src="https://via.placeholder.com/40" alt="Sender Avatar" className="w-10 h-10 rounded-full" />
        <div className="bg-blue-500 text-white p-3 rounded-lg rounded-tl-none max-w-xs relative">
          <div className="absolute top-[25px] left-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-r-[8px] border-r-blue-500 border-b-[8px] border-b-transparent"></div>
          Hello! How are you?
        </div>
      </div>
      <div className="text-xs text-gray-500 self-start ml-12">10:30 AM</div>

      {/* Receiver Message */}
      <div className="flex justify-end items-center space-x-2">
        <div className="bg-gray-300 text-gray-900 p-3 rounded-lg rounded-tr-none max-w-xs relative">
          <div className="absolute top-[25px] right-[-8px] w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-gray-300 border-b-[8px] border-b-transparent"></div>
          I'm good, thanks! How about you?
        </div>
        <img src="https://via.placeholder.com/40" alt="Receiver Avatar" className="w-10 h-10 rounded-full" />
      </div>
      <div className="text-xs text-gray-500 self-end mr-12">10:32 AM</div>
    </div>
  );
};

export default Message;
