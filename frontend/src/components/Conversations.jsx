import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../hooks/useGetConversations";
import Spinner from "./Spinner";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);

  return (
    <div className="space-y-2">
      {conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation} lastIdx={idx === conversation.length - 1} />
      ))}
      {loading ? <Spinner /> : null}
    </div>
  );
};

export default Conversations;
