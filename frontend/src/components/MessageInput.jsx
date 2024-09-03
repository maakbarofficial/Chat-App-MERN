import React, { useState } from "react";
import useSendMessage from "../hooks/useSendMessage";
import Spinner from "../components/Spinner";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form className="flex items-center py-2 border-t border-gray-300" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type a message..."
        className="flex-grow p-2 text-black rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        {loading ? <Spinner /> : "Send"}
      </button>
    </form>
  );
};

export default MessageInput;
