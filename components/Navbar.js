import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig"; // Import Firebase Auth

const Navbar = ({ handleLogout }) => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">
        Job Portal
      </Link>
      <div>
        {auth.currentUser ? (
          <>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white px-4">
              Login
            </Link>
            <Link to="/register" className="text-white px-4">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
