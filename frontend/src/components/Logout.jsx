import React from "react";
import useLogout from "../hooks/useLogout";
import Spinner from "../components/Spinner";

const Logout = () => {
  const { loading, logout } = useLogout();
  return (
    <>
      {!loading ? (
        <button onClick={logout} className="mt-4 p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
          Logout
        </button>
      ) : (
        <Spinner />
      )}
      ;
    </>
  );
};

export default Logout;
