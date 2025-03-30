import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { sql } from "@codemirror/lang-sql";

const QueryInput = ({ query, setQuery, onRunQuery }) => {
    const handleCopy = () => {
        if (query) {
            navigator.clipboard.writeText(query);
        }
    };

    const handleSave = () => {
        if (query) {
            localStorage.setItem("savedQuery", query);
            alert("Query saved for later!");
        }
    };

    // Updates query on every change in the editor
    const handleChange = (value) => {
        setQuery(value);
    };

    return (
        <div style={{ margin: "1rem 0", position: "relative" }}>
            <button 
                onClick={handleCopy}
                style={{
                    background: "green",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                   
                    fontSize: "1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    marginBottom: "0.5rem"
                }}
                title="Copy Query"
            >
                Copy Query
            </button>
            <CodeMirror
                value={query}
                height="150px"
                extensions={[sql()]}
                onChange={handleChange}
                placeholder="Enter your SQL query here..."
            />
            <br />
            <button 
                onClick={() => onRunQuery(query)}
                style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                    marginRight: "0.5rem"
                }}
            >
                Run Query
            </button>
            <button 
                onClick={handleSave}
                style={{
                    background: "red",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    marginTop: "0.5rem"
                }}
            >
                Save for Later
            </button>
        </div>
    );
};

export default QueryInput;