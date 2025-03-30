import React, { useState, useMemo } from "react";

const DataTable = ({ data, rowsPerPage = 5 }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortConfig, setSortConfig] = useState(null);

    // Sorting :
    const sortedData = useMemo(() => {
        let sortableData = [...data];
        if (sortConfig !== null) {
            sortableData.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableData;
    }, [data, sortConfig]);

    // Pagination :
    const totalPages = Math.ceil(sortedData.length / rowsPerPage);
    const currentData = useMemo(() => {
        const start = (currentPage - 1) * rowsPerPage;
        return sortedData.slice(start, start + rowsPerPage);
    }, [sortedData, currentPage, rowsPerPage]);

    const requestSort = (key) => {
        let direction = "ascending";
        if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    // Export CSV :
    const handleExport = () => {
        if (data.length > 0) {
            const csvRows = [];
            csvRows.push(headers.join(","));
            data.forEach((row) => {
                const values = headers.map(header => `"${row[header]}"`);
                csvRows.push(values.join(","));
            });
            const csvData = csvRows.join("\n");
            const blob = new Blob([csvData], { type: "text/csv" });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.setAttribute("hidden", "");
            a.href = url;
            a.download = "data.csv";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };

    return (
        <div>
            <div style={{ marginBottom: "1rem", textAlign: "right" }}>
                <button
                    onClick={handleExport}
                    style={{
                        background: "blue",
                        color: "#fff",
                        border: "none",
                        padding: "0.5rem 1rem",
                        fontSize: "1rem",
                        borderRadius: "0.25rem",
                        cursor: "pointer"
                    }}
                >
                    Export CSV
                </button>
            </div>
            <table border="1" cellPadding="5" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead style={{ background: "#f0f0f0" }}>
                    <tr>
                        {headers.map((header) => (
                            <th
                                key={header}
                                onClick={() => requestSort(header)}
                                style={{ cursor: "pointer", userSelect: "none" }}
                            >
                                {header}{" "}
                                {sortConfig && sortConfig.key === header ? (
                                    sortConfig.direction === "ascending" ? "🔼" : "🔽"
                                ) : null}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, index) => (
                        <tr key={index}>
                            {headers.map((header) => (
                                <td key={header}>{row[header]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div style={{ marginTop: "1rem", textAlign: "center" }}>
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    style={{ marginRight: "1rem" }}
                >
                    Prev
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    style={{ marginLeft: "1rem" }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default DataTable;