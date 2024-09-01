import React from "react";

const MessageInput = () => {
  return (
    <form className="flex items-center p-2 border-t border-gray-300">
      <input type="text" placeholder="Type a message..." className="flex-grow p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600" />
      <button className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Message</button>
    </form>
  );
};

export default MessageInput;
