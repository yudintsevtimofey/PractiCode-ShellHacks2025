import "./App.css";
import LifeBar from "./components/LifeBar";
import MainMenu from "./components/MainMenu";
import Lobbies from "./components/Lobbies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Lobbies stops={1}></Lobbies>
      </header>
    </div>
  );
}

export default App;