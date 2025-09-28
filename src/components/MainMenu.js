import { useNavigate } from "react-router-dom";

export default function MainMenu() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: 24 }}>
      <h1>Main Menu</h1>
      <button onClick={() => navigate("/MainLobby")}>Play</button>
    </div>
  );
}