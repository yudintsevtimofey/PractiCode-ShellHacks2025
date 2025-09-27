import "../styles/PlayerProgress.css";
import LifeBar from "./LifeBar";

function PlayerProgress() {
  return (
    <div className="App">
      <header className="App-header">
        <LifeBar stops={1}></LifeBar>
        <LifeBar stops={5}></LifeBar>
      </header>
    </div>
  );
}

export default PlayerProgress;
