import React from "react";

const JobList = ({ jobs, fetchJobs }) => {
  const updateStatus = async (id, newStatus) => {
    await fetch(`http://localhost:5000/api/jobs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    });
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await fetch(`http://localhost:5000/api/jobs/${id}`, { method: "DELETE" });
    fetchJobs();
  };

  const containerStyle = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem", padding: "1rem", };

const cardStyle = { border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", background: "#f9f9f9", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", };

const statusColor = (status) => { switch (status) { case "Applied": return "#007bff"; case "Interview": return "#ffc107"; case "Offer": return "#28a745"; case "Rejected": return "#dc3545"; default: return "#6c757d"; } };



  return (
    <div style={containerStyle}>
      {jobs.map((job) => (
        <div key={job._id} >
          <h3>{job.company} - {job.role}</h3>
          <p><strong>Status:</strong> <span style={{ color: statusColor(job.status) }}>{job.status}</span></p>
          <p><strong>Applied:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
          <p><a href={job.link} target="_blank" rel="noreferrer">Link</a></p>
          <select value={job.status} onChange={(e) => updateStatus(job._id, e.target.value)}>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select><br/>
          <button onClick={() => deleteJob(job._id)}style={{ marginTop: "10px", backgroundColor: "#dc3545", color: "#fff", border: "none", padding: "8px 12px", borderRadius: "5px", cursor: "pointer", }}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default JobList;
