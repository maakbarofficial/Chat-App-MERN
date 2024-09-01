import React from "react";
import Message from "./Message";

const Messages = () => {
  return (
    <div className="flex-grow overflow-y-auto space-y-4 p-4 bg-white rounded-b-lg">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
