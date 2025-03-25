import React from "react";

const categories = ["Technology", "Finance", "Healthcare", "Marketing", "Education"];

const JobCategories = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Job Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition">
              <h3 className="text-lg font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategories;
