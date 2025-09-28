import "../styles/PlayerProgress.css";
import LifeBar from "./LifeBar";

function PlayerProgress({ p1 = 0, p2 = 0, maxBars = 5 }) {
  console.log("PlayerProgress render", { p1, p2, maxBars });
  return (
    <header className="App-header">
      <div className="container">
        <p>Player 1</p>
        <LifeBar stops={p1} max={maxBars} />
      </div>
      <div className="container">
        <p>Player 2</p>
        <LifeBar stops={p2} max={maxBars} />
      </div>
    </header>
  );
}
export default PlayerProgress;