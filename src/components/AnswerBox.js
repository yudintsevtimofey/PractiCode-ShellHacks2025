import { useState } from "react";

const AnswerBox = ({ onSubmit, loading }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answer.trim()) return;
    onSubmit(answer.trim());   // parent decides what to do
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20 }}>
      <h3>Your Answer</h3>
      <input
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Type your answer"
        disabled={loading}
        style={{ width: "100%", padding: 8 }}
      />
      <button type="submit" disabled={loading} style={{ marginTop: 10 }}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default AnswerBox;