import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="flex flex-col w-3/4 bg-gray-100 p-4">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-zinc-600 text-white p-2 rounded-t-lg text-center">To: Dummy User</div>
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
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Chat App</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Welcome User Name</p>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Select a chat to start messaging</p>
      </div>
    </div>
  );
};
