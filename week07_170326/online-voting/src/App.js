import React, { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Voting from "./components/Voting";
import Results from "./components/Results";

function App() {
  const [user, setUser] = useState("");
  const [votes, setVotes] = useState({
    Alice: 0,
    Bob: 0,
    Charlie: 0
  });
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (candidate) => {
    // validation: check if user already voted
    if (localStorage.getItem(user)) {
      alert("You have already voted!");
      setHasVoted(true);
      return;
    }

    const updatedVotes = {
      ...votes,
      [candidate]: votes[candidate] + 1
    };

    setVotes(updatedVotes);

    // store vote in localStorage
    localStorage.setItem(user, candidate);

    setHasVoted(true);
  };

  return (
    <div className="container">
      <h1>Online Voting System</h1>

      {!user ? (
        <Login setUser={setUser} />
      ) : !hasVoted ? (
        <Voting candidates={votes} onVote={handleVote} />
      ) : (
        <Results votes={votes} />
      )}
    </div>
  );
}

export default App;