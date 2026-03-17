import { useState } from "react";

// PROPS: onLogin (function passed from App.js)
export default function VoterLogin({ onLogin }) {
  // STATE: controlled form inputs
  const [voterId, setVoterId] = useState("");
  const [name, setName]       = useState("");
  const [error, setError]     = useState("");

  // EVENT: form submit handler
  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    if (!voterId.trim() || !name.trim()) {
      setError("Both fields are required.");
      return;
    }
    setError("");
    onLogin({ id: voterId.trim(), name: name.trim() });
  }

  return (
    <div>
      <h2>Voter login</h2>
      <form onSubmit={handleSubmit}>

        <div className="field">
          <label>Voter ID</label>
          <input
            type="text"
            placeholder="e.g. V001"
            value={voterId}
            onChange={e => setVoterId(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Full name</label>
          <input
            type="text"
            placeholder="e.g. Snehal Patil"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="btn" style={{ marginTop: 8 }}>
          Login and vote
        </button>
      </form>
    </div>
  );
}