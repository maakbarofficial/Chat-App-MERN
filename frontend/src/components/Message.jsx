import React from "react";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../store/useConversation";
import { extractTime } from "../utils/extractTime";

const Message = ({ message }) => {
  // console.log(message);
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "right-[-8px] border-l-[8px] border-l-gray-300" : "left-[-8px] border-r-[8px] border-r-blue-500";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const chatBubble = fromMe ? "bg-gray-300 text-gray-900 rounded-tr-none" : "bg-blue-500 text-white rounded-tl-none";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className="flex flex-col space-y-4">
      <div className={`flex ${fromMe ? "justify-end" : "justify-start"} items-center space-x-2`}>
        <img src={profilePic} alt="Avatar" className="w-10 h-10 rounded-full" />
        <div className={`${chatBubble} ${shakeClass} p-3 rounded-lg  max-w-xs relative`}>
          <div className={`absolute top-[25px] ${chatClassName} w-0 h-0 border-t-[8px] border-t-transparent  border-b-[8px] border-b-transparent`}></div>
          {message.message}
        </div>
      </div>
      <div className={`text-xs text-gray-500  ${fromMe ? "self-end" : "self-start"} ml-12`}>{formattedTime}</div>
    </div>
  );
};

export default Message;
