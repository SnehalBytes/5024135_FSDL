import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    course: "",
    income: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Valid Email is required";
    }

    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.dob) {
      newErrors.dob = "Date of Birth is required";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    if (formData.income <= 0) {
      newErrors.income = "Enter valid income";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="success-container">
        <h1>🎉 Registration Successful!</h1>
        <p>Your scholarship application has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="main-card">   {/* 🔥 IMPORTANT WRAPPER */}

        <div className="left-section">
          <h1>Scholarship Portal</h1>
          <p>📌 Basic Rules:</p>
          <ul>
            <li>Applicant must be currently enrolled in a course.</li>
            <li>Annual family income should be below ₹5,00,000.</li>
            <li>All fields are mandatory.</li>
            <li>Provide valid contact details.</li>
          </ul>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <h2>Registration Form</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
            />
            <span className="error">{errors.name}</span>

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <span className="error">{errors.email}</span>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />
            <span className="error">{errors.phone}</span>

            <input
              type="date"
              name="dob"
              onChange={handleChange}
            />
            <span className="error">{errors.dob}</span>

            <select name="course" onChange={handleChange}>
              <option value="">Select Course</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="BTech">BTech</option>
              <option value="MBA">MBA</option>
            </select>
            <span className="error">{errors.course}</span>

            <input
              type="number"
              name="income"
              placeholder="Annual Family Income"
              onChange={handleChange}
            />
            <span className="error">{errors.income}</span>

            <button type="submit">Register</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;