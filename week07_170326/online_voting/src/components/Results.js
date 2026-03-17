// PROPS: candidates (array), votes (object)
export default function Results({ candidates, votes }) {
  const total = Object.values(votes).reduce((sum, v) => sum + v, 0);

  return (
    <div>
      <div className="success-msg">
        Your vote has been recorded successfully!
      </div>

      <h2>Live results</h2>

      {/* LIST RENDERING — map over candidates to show bars */}
      {candidates.map(candidate => {
        const count = votes[candidate.id] || 0;
        const pct   = total > 0 ? Math.round((count / total) * 100) : 0;

        return (
          <div key={candidate.id} style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, marginBottom: 6 }}>
              <span>
                <strong>{candidate.name}</strong>
                <span style={{ color: "#718096", marginLeft: 8 }}>{candidate.party}</span>
              </span>
              <span style={{ fontWeight: 500 }}>
                {count} vote{count !== 1 ? "s" : ""} — {pct}%
              </span>
            </div>

            {/* Progress bar */}
            <div style={{ background: "#e2e8f0", borderRadius: 6, height: 12 }}>
              <div style={{
                width: `${pct}%`,
                background: "#3182ce",
                height: 12,
                borderRadius: 6,
                transition: "width 0.6s ease",
                minWidth: pct > 0 ? 6 : 0,
              }} />
            </div>
          </div>
        );
      })}

      <p style={{ marginTop: 24, fontSize: 13, color: "#a0aec0" }}>
        Total votes cast: {total}
      </p>
    </div>
  );
}