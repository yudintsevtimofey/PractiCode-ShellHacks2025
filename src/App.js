import "./App.css";
import MainMenu from "./components/MainMenu";
import Lobbies from "./components/Lobbies";
import MainLobby from "./components/MainLobby";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Lobbies" element={<Lobbies />} />
        <Route path="/MainLobby" element={<MainLobby />} />

        
        
        
      </Routes>
    </Router>

  );
}

export default App;
