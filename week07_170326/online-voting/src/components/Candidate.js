import React from "react";

function Candidate({ name, onVote }) {
  return (
    <div className="candidate">
      <span>{name}</span>
      <button onClick={() => onVote(name)}>Vote</button>
    </div>
  );
}

export default Candidate;