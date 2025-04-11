import React from "react";

const JobItem = ({ job, fetchJobs }) => {
    const deleteJob = async () => {
        await fetch(`${process.env.REACT_APP_API_URL}/api/jobs/${job._id}`, { method: "DELETE" });
        fetchJobs();
    };

    return (
        <div>
            <h3>{job.company} - {job.role}</h3>
            <p>{job.status} | {job.appliedDate}</p>
            <button onClick={deleteJob}>Delete</button>
        </div>
    );
};

export default JobItem;
