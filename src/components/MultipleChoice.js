function MultipleChoice(props) {
  return (
    <div>
      <input
        type="radio"
        id={props.ChoiceA}
        name="fav_language"
        value="HTML"
      ></input>
      <label for={props.ChoiceA}>{props.ChoiceA}</label>
      <input
        type="radio"
        id={props.ChoiceB}
        name="fav_language"
        value="HTML"
      ></input>
      <label for={props.ChoiceB}>{props.ChoiceB}</label>
      <input
        type="radio"
        id={props.ChoiceC}
        name="fav_language"
        value="HTML"
      ></input>
      <label for={props.ChoiceC}>{props.ChoiceC}</label>
      <input
        type="radio"
        id={props.ChoiceD}
        name="fav_language"
        value="HTML"
      ></input>
      <label for={props.ChoiceD}>{props.ChoiceD}</label>
      <button></button>
    </div>
  );
}
export default MultipleChoice;
