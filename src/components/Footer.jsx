import React from "react";

const Footer = () => {
    return (
        <footer style={{ 
            width: "80vw",  
           marginLeft: "0em",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            marginTop: "2rem", 
            paddingBottom: "2rem",
            bottom: 0, 
            left: 0, 
            textAlign: "center",
            color: "#fff"
        }}>
            <p>&copy; 2025 Dummy SQL App</p>
            <p>Created by <a href="https://www.example.com" style={{ color: "#fff" }}>Abhyudayaditya Kumar Singh</a></p>
        </footer>
    );
};


export default Footer;