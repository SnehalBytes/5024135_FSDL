import { useState } from "react";
import VoterLogin from "./components/VoterLogin";
import VotingForm from "./components/VotingForm";
import Results from "./components/Results";

// Our candidate data — lives here and flows down as props
const candidates = [
  { id: 1, name: "Alice Johnson",  party: "Progress Party"  },
  { id: 2, name: "Bob Kumar",      party: "Unity Alliance"  },
  { id: 3, name: "Clara Mendes",   party: "Green Future"    },
];

export default function App() {
  // STATE: which screen to show
  const [screen, setScreen] = useState("login");
  // STATE: who is logged in
  const [voter, setVoter] = useState(null);
  // STATE: vote counts { candidateId: number }
  const [votes, setVotes] = useState({});
  // STATE: list of voter IDs who have already voted
  const [votedIds, setVotedIds] = useState([]);

  // EVENT: called by VoterLogin when form is submitted
  function handleLogin(voterInfo) {
    setVoter(voterInfo);
    setScreen("vote");
  }

  // EVENT: called by VotingForm when a vote is submitted
  function handleVote(candidateId) {
    if (votedIds.includes(voter.id)) return; // prevent double vote
    setVotes(prev => ({
      ...prev,
      [candidateId]: (prev[candidateId] || 0) + 1,
    }));
    setVotedIds(prev => [...prev, voter.id]);
    setScreen("results");
  }

  return (
    <div className="app-container">
      <h1>Online Voting System</h1>
      <p className="subtitle">Secure · Simple · Transparent</p>

      {screen === "login" && (
        <VoterLogin onLogin={handleLogin} />
      )}

      {screen === "vote" && (
        <VotingForm
          candidates={candidates}
          voter={voter}
          onVote={handleVote}
        />
      )}

      {screen === "results" && (
        <Results candidates={candidates} votes={votes} />
      )}
    </div>
  );
}