import "./App.css";
import LifeBar from "./components/LifeBar";
import MainMenu from "./components/MainMenu";
import Lobbies from "./components/Lobbies";
import PlayerProgress from "./components/PlayerProgress";
import QuestionBox from "./components/QuestionBox";
import AnswerBox from "./components/AnswerBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AnswerBox></AnswerBox>
      </header>
    </div>
  );
}

export default App;
