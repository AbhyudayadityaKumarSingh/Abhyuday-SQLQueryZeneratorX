import React from "react";

const QuerySelector = ({ queries, selectedQueryId, onSelectQuery }) => {
    return (
        <div style={{ margin: "1rem 0" }}>
            <label htmlFor="querySelector">Select a predefined query: </label>
            <select 
                id="querySelector" 
                value={selectedQueryId} 
                onChange={(e) => onSelectQuery(e.target.value)}
            >
                {queries.map((query) => (
                    <option key={query.id} value={query.id}>
                        {query.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default QuerySelector;