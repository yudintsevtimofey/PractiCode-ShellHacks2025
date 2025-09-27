import "../styles/QuestionBox.css";

function AnswerBox(props) {
  return (
    <div className="Box-Container">
      <header className="Box-header">
        <p className="Answer-text">Question</p>
        <p className="Answer-prompt">{props.Prompt}</p>
      </header>
    </div>
  );
}

export default AnswerBox;
