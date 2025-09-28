import LifeBar from "./LifeBar"
import "../styles/PlayerProgress.css"

export default function PlayerProgress({ p1Score, p2Score, maxBars }) {
  return (
    <header className="App-header">
      <div className="container">
        <p>Player 1</p>
        <LifeBar stops = {p1Score}></LifeBar>
      </div>
      <div className="container">
        <p>Player 2</p>
        <LifeBar stops = {p2Score}></LifeBar>
      </div>
    </header>
  );
}