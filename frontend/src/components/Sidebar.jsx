import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 bg-gray-800 p-4 flex flex-col justify-between h-full">
      <div className="space-y-4">
        <SearchInput />
        <Conversations />
      </div>

      <Logout />
    </div>
  );
};

export default Sidebar;
