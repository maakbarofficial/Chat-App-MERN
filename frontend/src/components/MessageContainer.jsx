import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../store/useConversation";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function (unmount)
    return () => setSelectedConversation(null);
  }, []);

  return (
    <div className="flex flex-col w-full md:w-3/4 bg-zinc-400 p-4">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-zinc-900 text-white p-2 font-bold text-lg rounded-t-lg text-center">{selectedConversation.fullName}</div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex-grow overflow-y-auto space-y-4 p-4 bg-white rounded-b-lg">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Chat App</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Welcome User Name</p>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Select a chat to start messaging</p>
      </div>
    </div>
  );
};
