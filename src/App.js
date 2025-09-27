import "./App.css";
import LifeBar from "./components/LifeBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LifeBar stops={1}></LifeBar>
      </header>
    </div>
  );
}

export default App;
