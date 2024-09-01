import React from "react";

const SearchInput = () => {
  return (
    <form className="flex mb-4">
      <input type="text" placeholder="Search..." className="w-full p-2 rounded-l-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600" />
      <button className="p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Search</button>
    </form>
  );
};

export default SearchInput;
