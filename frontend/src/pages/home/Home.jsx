import React from "react";
import Sidebar from "../../components/Sidebar";
import MessageContainer from "../../components/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-full w-full md:p-40">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
