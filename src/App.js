import "./App.css";
import BackDrop from "./components/Backdrop.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Type racer</div>
        <BackDrop></BackDrop>
        <div>WPM</div>
      </header>
    </div>
  );
}

export default App;
