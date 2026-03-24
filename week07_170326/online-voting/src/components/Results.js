import React from "react";

function Results({ votes }) {
  return (
    <div className="card">
      <h2>Results</h2>

      {Object.entries(votes).map(([name, count]) => (
        <p key={name}>
          {name}: {count} votes
        </p>
      ))}
    </div>
  );
}

export default Results;