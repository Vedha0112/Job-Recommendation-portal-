// src/pages/Profile.js
import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/4">
        <h2 className="text-2xl font-bold text-center mb-6">Profile</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="file"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Soft Skills"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <textarea
            placeholder="Technical Skills"
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
          <select className="w-full p-3 border border-gray-300 rounded-lg">
            <option>Job Seeker</option>
            <option>Recruiter</option>
          </select>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
