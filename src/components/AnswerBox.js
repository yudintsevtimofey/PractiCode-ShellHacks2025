import "../styles/QuestionBox.css";
import MultipleChoice from "./MultipleChoice";

function AnswerBox() {
  return (
    <div className="Box-Container">
      <header className="Box-header">
        <p className="Answer-text">Answer</p>
        <MultipleChoice></MultipleChoice>
      </header>
    </div>
  );
}

export default AnswerBox;
