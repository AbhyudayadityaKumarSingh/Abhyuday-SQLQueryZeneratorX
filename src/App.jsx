import React, { useState } from 'react';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import QueryInput from "./components/QueryInput";
import QuerySelector from "./components/QuerySelector";
import DataTable from "./components/DataTable";
import { queries as predefinedQueries } from "./data/queries";

function App() {
  const [selectedQueryId, setSelectedQueryId] = useState(predefinedQueries[0].id);
  const [customQuery, setCustomQuery] = useState(predefinedQueries[0].query);
  const [displayData, setDisplayData] = useState(predefinedQueries[0].data);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSelectQuery = (queryId) => {
    setSelectedQueryId(queryId);
    const selectedQuery = predefinedQueries.find(q => q.id === queryId);
    setDisplayData(selectedQuery.data);
    setCustomQuery(selectedQuery.query);
  };

  const handleRunQuery = (query) => {
    const matched = predefinedQueries.find(q => q.query === query);
    if (matched) {
      setDisplayData(matched.data);
    } else {
      setDisplayData([{ info: 'Dummy row - no matching data found.' }]);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const appStyle = {
    background: isDarkMode ? "#222" : "#f5f5f5",
    color: isDarkMode ? "#fff" : "#000",
    minHeight: "100vh"
  };

  return (
    <div style={appStyle}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container" style={{ margin: "1rem" }}>
        <QuerySelector 
          queries={predefinedQueries}
          selectedQueryId={selectedQueryId}
          onSelectQuery={handleSelectQuery}
        />
        <QueryInput 
          query={customQuery}
          setQuery={setCustomQuery}
          onRunQuery={handleRunQuery}
        />
        <DataTable data={displayData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;