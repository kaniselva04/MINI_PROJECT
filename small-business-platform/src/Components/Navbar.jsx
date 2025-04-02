import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthPopup from "./AuthPopup";
import { jwtDecode } from "jwt-decode";
import { Bookmark, LogOut } from "lucide-react"; // Import Logout icon

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authType, setAuthType] = useState("login");
  const [user, setUser] = useState("");

  const openPopup = (type) => {
    setAuthType(type);
    setIsOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decode = jwtDecode(token);
        console.log(decode);
        setUser(decode.username);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(""); // Clear user state
  };

  return (
    <nav className="p-4 bg-black text-white flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
      <h1 className="text-2xl font-bold tracking-wide">EmpowerBiz</h1>
      <div className="flex items-center space-x-6 font-semibold text-sm uppercase">
        <Link to="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/business" className="hover:text-gray-400 transition">
          Businesses
        </Link>
        {user ? (
          <>
            <Link
              to="/history"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-lg transition"
            >
              <Bookmark size={20} className="mr-2" />
              Saved
            </Link>
            <span className="text-gray-300 w-10 text-lg h-10 rounded-full bg-blue-500 flex items-center justify-center">
              {user.toUpperCase().slice(0, 1)}
            </span>
            <button
              onClick={logout}
              className="flex items-center text-red-400 hover:text-red-600 transition"
            >
              <LogOut size={20} className="mr-2" />
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => openPopup("login")}
              className="bg-transparent border border-white px-4 py-1 rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => openPopup("signup")}
              className="bg-white text-black px-4 py-1 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Signup
            </button>
          </>
        )}
      </div>
      {isOpen && <AuthPopup type={authType} close={() => setIsOpen(false)} />}
    </nav>
  );
}

export default Navbar;
