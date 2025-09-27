import "../styles/PlayerProgress.css";
import LifeBar from "./LifeBar";

function PlayerProgress() {
  return (
    <header className="App-header">
      <div className="container">
        <p>Player 1</p>
        <LifeBar stops={1}></LifeBar>
      </div>
      <div className="container">
        <p>Player 2</p>
        <LifeBar stops={5}></LifeBar>
      </div>
    </header>
  );
}

export default PlayerProgress;
