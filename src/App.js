import "./App.css";
import LifeBar from "./components/LifeBar";
import MainMenu from "./components/MainMenu";
import Lobbies from "./components/Lobbies";
import PlayerProgress from "./components/PlayerProgress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Lobbies" element={<Lobbies />} />
        <Route path="/PlayerProgress" element={<PlayerProgress />} />

        
        
        
      </Routes>
    </Router>
  );
}

export default App;