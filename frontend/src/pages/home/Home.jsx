import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../components/MessageContainer";

const Home = () => {
  return (
    <div className="flex h-full w-full p-40">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
