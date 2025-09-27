import "../styles/QuestionBox.css";

function QuestionBox(props) {
  return (
    <div className="Box-Container">
      <header className="Box-header">
        <p className="Question-text">Question</p>
        <p className="Question-prompt">{props.Prompt}</p>
      </header>
    </div>
  );
}

export default QuestionBox;
