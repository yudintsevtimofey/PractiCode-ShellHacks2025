import "../styles/QuestionBox.css";
import MultipleChoice from "./MultipleChoice";

function AnswerBox(props) {
  return (
    <div className="Box-Container">
      <header className="Box-header">
        <p className="Answer-text">Answer</p>
        <MultipleChoice
          ChoiceA={props.ChoiceA}
          ChoiceB={props.ChoiceB}
          ChoiceC={props.ChoiceC}
          ChoiceD={props.ChoiceD}
        ></MultipleChoice>
      </header>
    </div>
  );
}

export default AnswerBox;
