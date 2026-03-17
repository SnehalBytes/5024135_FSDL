import CandidateCard from "./CandidateCard";

// PROPS: candidates, selectedId, onSelect
export default function CandidateList({ candidates, selectedId, onSelect }) {
  return (
    <div>
      {/* LIST RENDERING — map over candidates array */}
      {candidates.map(candidate => (
        <CandidateCard
          key={candidate.id}          // React needs a unique key
          candidate={candidate}       // pass entire candidate object as prop
          isSelected={selectedId === candidate.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}