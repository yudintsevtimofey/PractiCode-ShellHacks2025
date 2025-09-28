const QuestionBox = ({ prompt, loading, difficulty, onChangeDifficulty }) => (
  <div style={{ padding: 20 }}>
    <h3>Question</h3>
    <p>{loading ? "Loading..." : prompt}</p>

    <label>
      Difficulty:&nbsp;
      <select value={difficulty} onChange={(e) => onChangeDifficulty(e.target.value)}>
        <option>Beginner Multiple Choice</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>
    </label>
  </div>
);
export default QuestionBox;