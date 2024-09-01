import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/singup/SignUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
