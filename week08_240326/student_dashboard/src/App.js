import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

// Reusable Card
const Card = ({ children }) => (
  <div style={{
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    marginBottom: "20px"
  }}>
    {children}
  </div>
);

// Dashboard
function Dashboard() {
  return (
    <div>
      <h1 style={{ fontSize: "28px" }}>🎓 Student Dashboard</h1>
      <p style={{ color: "gray" }}>Welcome! Track your progress.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        <Card>📚 Courses: 3</Card>
        <Card>📊 Attendance: 75%</Card>
        <Card>📝 Assignments: 2 Pending</Card>
      </div>
    </div>
  );
}

// ✅ PROFILE (UPDATED)
function Profile() {
  const nameRef = useRef();
  const [name, setName] = useState("");

  const handleFocus = () => {
    nameRef.current.focus();
  };

  const handleSave = () => {
    setName(nameRef.current.value);
  };

  return (
    <Card>
      <h2>👤 Profile</h2>

      <input
        ref={nameRef}
        placeholder="Enter Name"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={handleFocus} style={btnStyle("#3498db")}>
        Focus
      </button>

      <button
        onClick={handleSave}
        style={{ ...btnStyle("#2ecc71"), marginLeft: "10px" }}
      >
        Save
      </button>

      {name && (
        <p style={{ marginTop: "15px", fontWeight: "bold" }}>
          Welcome, {name} 🎉
        </p>
      )}
    </Card>
  );
}

// Courses
function Courses() {
  const [courses, setCourses] = useState(["Math", "Science", "English"]);
  const [newCourse, setNewCourse] = useState("");

  const addCourse = () => {
    if (!newCourse) return;
    setCourses([...courses, newCourse]);
    setNewCourse("");
  };

  return (
    <Card>
      <h2>📚 Courses</h2>

      <input
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Add Course"
        style={{ padding: "10px", marginRight: "10px" }}
      />

      <button onClick={addCourse} style={btnStyle("#2ecc71")}>
        Add
      </button>

      <ul style={{ marginTop: "15px" }}>
        {courses.map((course, index) => (
          <li key={index} style={{ borderBottom: "1px solid #eee", padding: "8px" }}>
            {course}
          </li>
        ))}
      </ul>
    </Card>
  );
}

// Attendance
function Attendance() {
  const [attendance, setAttendance] = useState(75);

  return (
    <Card>
      <h2>📊 Attendance</h2>
      <h3>{attendance}%</h3>

      <button onClick={() => setAttendance(attendance + 1)} style={btnStyle("#9b59b6")}>
        Increase
      </button>
    </Card>
  );
}

// Button Style
const btnStyle = (color) => ({
  background: color,
  color: "white",
  border: "none",
  padding: "8px 14px",
  borderRadius: "8px",
  cursor: "pointer"
});

// Navbar
function Navbar() {
  return (
    <nav style={{
      background: "linear-gradient(to right, #6a11cb, #2575fc)",
      padding: "15px",
      display: "flex",
      gap: "20px",
      color: "white"
    }}>
      <Link to="/" style={linkStyle}>Dashboard</Link>
      <Link to="/profile" style={linkStyle}>Profile</Link>
      <Link to="/courses" style={linkStyle}>Courses</Link>
      <Link to="/attendance" style={linkStyle}>Attendance</Link>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

// Main App
export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dashboard Loaded");
  }, []);

  return (
    <div style={{ fontFamily: "Arial", background: "#f4f6f9", minHeight: "100vh" }}>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <button onClick={() => navigate("/profile")} style={btnStyle("#e67e22")}>
          Go to Profile
        </button>

        <div style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/attendance" element={<Attendance />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}