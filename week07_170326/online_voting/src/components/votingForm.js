import { useState } from "react";
import CandidateList from "./CandidateList";

// PROPS: candidates (array), voter (object), onVote (function)
export default function VotingForm({ candidates, voter, onVote }) {
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError]           = useState("");

  // EVENT: form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedId) {
      setError("Please select a candidate before submitting.");
      return;
    }
    onVote(selectedId);
  }

  return (
    <div>
      <h2>Cast your vote</h2>
      <p style={{ fontSize: 14, color: "#718096", marginBottom: 20 }}>
        Welcome, <strong>{voter.name}</strong>. Choose one candidate below.
      </p>

      <form onSubmit={handleSubmit}>
        {/* CandidateList is a child component — receives props */}
        <CandidateList
          candidates={candidates}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        {error && <p className="error">{error}</p>}

        <button
          type="submit"
          className="btn"
          style={{ marginTop: 20 }}
          disabled={!selectedId}
        >
          Submit vote
        </button>
      </form>
    </div>
  );
}