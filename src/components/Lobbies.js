import React from "react";
import { useNavigate } from "react-router-dom";



const lobbies = [
    "Lobby 1",
    "Lobby 2",
    "Lobby 3",
    "Lobby 4",
    "Lobby 5",
    "Lobby 6",
];

var Player1 = false
var Player2 = false

function Lobbies() {
    const navigate = useNavigate();

    const handleJoinClick = () => {
        if (!Player1) {
            Player1 = true;
            document.cookie = "player=1";
            navigate("/PlayerProgress");
        }
        else if (!Player2) {
            Player2 = true;
            document.cookie = "player=2";
            navigate("/PlayerProgress");
        }
        else {
            alert("Both player slots are full!");
        }
        

        
    };
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "#eaf6fb",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "40px 0",
            }}
        >
            <h2 style={{ marginBottom: "32px", color: "#333" }}>Available Lobbies</h2>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "32px",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "900px",
                }}
            >
                {lobbies.map((name) => (
                    <div
                        key={name}
                        style={{
                            background: "#ffeaea",
                            borderRadius: "16px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                            width: "220px",
                            height: "140px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "20px",
                        }}
                    >
                        <span style={{ fontSize: "1.25rem", fontWeight: 600, color: "#b23b3b" }}>
                            {name}
                        </span>
                        <button
                            style={{
                                background: "#4caf50",
                                color: "#fff",
                                border: "none",
                                borderRadius: "8px",
                                padding: "10px 28px",
                                fontSize: "1rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "background 0.2s",
                            }}
                            onClick={handleJoinClick}
                        >
                            Join
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lobbies;