import React from "react";

const Applications = () => {
  const applications = [
    { jobTitle: "Frontend Developer", status: "Pending" },
    { jobTitle: "Backend Developer", status: "Accepted" },
    { jobTitle: "UI/UX Designer", status: "Rejected" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Applications</h1>
      {applications.map((app, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-auto max-w-md  mt-4">
          <h3 className="text-lg font-semibold">{app.jobTitle}</h3>
          <p className="text-gray-600">Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Applications;