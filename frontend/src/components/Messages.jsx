import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import Skeleton from "../components/Skeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  // console.log(messages);

  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-grow overflow-y-auto space-y-4 p-4 bg-white rounded-b-lg">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, id) => <Skeleton key={id} />)}
      {!loading && messages.length === 0 && <p>Send a message to start the conversation</p>}
    </div>
  );
};

export default Messages;
