// src/pages/Dashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { FaUser, FaBriefcase, FaFileAlt } from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="w-1/4 bg-blue-600 p-6 text-white h-full shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul>
          <li className="mb-4 flex items-center">
            <FaUser className="mr-2" />
            <Link to="/profile" className="hover:underline">Profile</Link>
          </li>
          <li className="mb-4 flex items-center">
            <FaBriefcase className="mr-2" />
            <Link to="/jobs" className="hover:underline">Jobs</Link>
          </li>
          <li className="mb-4 flex items-center">
            <FaFileAlt className="mr-2" />
            <Link to="/applications" className="hover:underline">Applications</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="p-6 w-3/4">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Past Applied Jobs</h2>
        <ul className="bg-white p-6 rounded-lg shadow-lg w-auto max-w-md">
          <li className="border-b p-2">Frontend Developer - Pending</li>
          <li className="border-b p-2">Backend Developer - Accepted</li>
          <li className="p-2">UI/UX Designer - Rejected</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-700 mt-6 mb-4">Profile Impressions</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg w-auto max-w-md">
          <p className="text-xl">Your profile has been viewed 120 times this month.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
