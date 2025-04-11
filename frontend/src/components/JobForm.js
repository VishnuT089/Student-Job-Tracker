import React, { useState } from "react";

const JobForm = ({ fetchJobs }) => {
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ company: "", role: "", status: "Applied", appliedDate: "", link: "" });
    fetchJobs();
  };

  const styles = { form: { display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px", margin: "2rem auto", padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", }, input: { padding: "0.75rem", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem", }, select: { padding: "0.75rem", border: "1px solid #ccc", borderRadius: "8px", fontSize: "1rem", }, button: { padding: "0.75rem", backgroundColor: "#007bff", color: "#fff", fontSize: "1rem", fontWeight: "bold", border: "none", borderRadius: "8px", cursor: "pointer", }, };
  return (
    <form style={styles.form}onSubmit={handleSubmit}>
      <input style={styles.input}name="company" placeholder="Company" value={formData.company} onChange={handleChange} required />
      <input style={styles.input}name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
      <select style={styles.select} name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input  style={styles.input}name="appliedDate" type="date" value={formData.appliedDate} onChange={handleChange} required />
      <input style={styles.input} name="link" placeholder="Link" value={formData.link} onChange={handleChange} />
      <button  style={styles.button}type="submit">Add</button>
    </form>
  );
};

export default JobForm;
