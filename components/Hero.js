import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-600 text-white">
      <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
      <p className="text-lg mb-6">
        Explore thousands of job listings and get personalized recommendations.
      </p>
      <div className="space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-yellow-400 transition"
        >
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
