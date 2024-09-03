import React from "react";
import useConversation from "../store/useConversation";
import { useSocketContext } from "../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-600 cursor-pointer ${isSelected ? "bg-zinc-500" : "bg-gray-700"}`}
      >
        <div className="relative w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <img src={conversation.profilePic} alt="Profile Pic" />
          {isOnline && <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-700 rounded-full"></span>}
        </div>
        <div className="ml-3">{conversation.fullName}</div>
      </div>
      {!lastIdx && <div className="my-0 divide-x-2 py-0 h-1" />}
    </>
  );
};

export default Conversation;
