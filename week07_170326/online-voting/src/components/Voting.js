import React from "react";
import Candidate from "./Candidate";

function Voting({ candidates, onVote }) {
  return (
    <div className="card">
      <h2>Select a Candidate</h2>

      {Object.keys(candidates).map((name) => (
        <Candidate key={name} name={name} onVote={onVote} />
      ))}
    </div>
  );
}

export default Voting;