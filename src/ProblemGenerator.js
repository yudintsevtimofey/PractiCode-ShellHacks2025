import React, { useState } from "react";

var difficultyChoice = "Beginner Multiple Choice";

var POSTProblem = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        difficulty: difficultyChoice,
    }),
}

function ProblemGenerator() {
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProblem = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/generate-problem", POSTProblem);

      const data = await response.json();
      setProblem(data.problem || "No problem received");
    } catch (err) {
      console.error("Error fetching problem:", err);
      setProblem("Failed to fetch problem");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={fetchProblem}>Generate Problem</button>
      <div style={{ marginTop: "20px" }}>
        {loading ? <p>Loading...</p> : <p>{problem}</p>}
      </div>
    </div>
  );
}

export default ProblemGenerator;