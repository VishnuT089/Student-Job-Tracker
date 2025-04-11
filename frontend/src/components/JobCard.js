import React from "react";

const JobCard = ({ job }) => {
  const statusColors = {
    applied: "bg-yellow-300",
    interviewing: "bg-blue-300",
    rejected: "bg-red-300",
    accepted: "bg-green-300",
  };

  return (
    <div
      className={`p-4 rounded shadow-md ${
        statusColors[job.status.toLowerCase()] || "bg-gray-200"
      }`}
    >
      <h2 className="text-xl font-semibold mb-1">
        {job.role} at {job.company}
      </h2>
      <p className="text-sm text-gray-700 mb-2">Applied on: {new Date(job.appliedDate).toDateString()}</p>
      <span className="text-sm font-medium capitalize">Status: {job.status}</span>
      {job.link && (
        <div className="mt-2">
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            View Job Posting
          </a>
        </div>
      )}
    </div>
  );
};

export default JobCard;