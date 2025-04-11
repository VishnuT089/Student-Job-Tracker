import React, { useState, useEffect } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/jobs");
      const data = await res.json();
      setJobs(data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <h1><center>Student Job Tracker</center></h1>
      <JobForm fetchJobs={fetchJobs} />
      <JobList jobs={jobs} fetchJobs={fetchJobs} />
    </div>
  );
};

export default Home;