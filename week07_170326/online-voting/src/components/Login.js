import React, { useState } from "react";

function Login({ setUser }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    setUser(name);
  };

  return (
    <div className="card">
      <h2>Enter Name</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <button type="submit">Start Voting</button>
      </form>
    </div>
  );
}

export default Login;