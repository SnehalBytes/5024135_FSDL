// PROPS: candidate, isSelected, onSelect
export default function CandidateCard({ candidate, isSelected, onSelect }) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "14px 16px",
        marginBottom: 10,
        border: `2px solid ${isSelected ? "#3182ce" : "#e2e8f0"}`,
        borderRadius: 10,
        background: isSelected ? "#ebf8ff" : "#fafafa",
        cursor: "pointer",
        transition: "all 0.15s",
      }}
    >
      {/* EVENT: onChange fires when user selects this card */}
      <input
        type="radio"
        name="candidate"
        value={candidate.id}
        checked={isSelected}
        onChange={() => onSelect(candidate.id)}
        style={{ accentColor: "#3182ce", width: 18, height: 18 }}
      />
      <div>
        <div style={{ fontWeight: 500, fontSize: 15, color: "#2d3748" }}>
          {candidate.name}
        </div>
        <div style={{ fontSize: 13, color: "#718096", marginTop: 2 }}>
          {candidate.party}
        </div>
      </div>
    </label>
  );
}