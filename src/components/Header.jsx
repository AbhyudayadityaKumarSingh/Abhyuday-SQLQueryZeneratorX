import React from "react";

const Header = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header style={{
            width: "75vw",
            padding: "2rem",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
            position: "relative",
            left: 0
        }}>
            <h1 style={{
                margin: 0,
                fontSize: "2.5rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem"
            }}>
                SQL Query Zenerator X
            </h1>
            <button
                onClick={toggleDarkMode}
                style={{
                    background: isDarkMode ? "#444" : "#ddd",
                    color: isDarkMode ? "#fff" : "#000",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer"
                }}
            >
                Switch to {isDarkMode ? "Light" : "Dark"} Mode
            </button>
        </header>
    );
};

export default Header;