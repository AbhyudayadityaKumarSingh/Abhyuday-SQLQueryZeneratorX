# SQL Query Zenerator

SQL Query Zenerator is a lightweight SQL playground built with React. It allows you to select and run predefined SQL queries, edit your queries in a syntax-highlighted CodeMirror editor with auto-complete for SQL, and view/result the data in a paginated table. The app also supports CSV export, saving custom queries for later use, and a global dark/light mode toggle.

## Features

- **Predefined SQL Queries:** Choose from a list of predefined queries.
- **Enhanced SQL Editor:** Powered by CodeMirror with built-in SQL syntax highlighting and auto-complete.
- **Run & View Query:** Execute a query and view results in a stylish, paginated data table.
- **CSV Export:** Easily export the displayed data as a CSV file.
- **Save for Later:** Save your custom queries in local storage for later use.
- **Dark/Light Mode:** Switch between dark and light themes throughout the entire application.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Abhyuday-SQLPlaygroundX
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

4. **Run the development server:**

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

   The application will start at [http://localhost:3000](http://localhost:3000).

## Dark Mode Implementation

This application implements dark mode globally. Below are the key implementation details:

1. **Dark Mode State:**  
   In `App.jsx`, a state variable (`isDarkMode`) is maintained to track whether dark mode is enabled. A toggle function (`toggleDarkMode`) updates this state.

2. **Global Styles:**  
   The top-level container in `App.jsx` is styled using inline styles based on the `isDarkMode` state. Background and text colors are adjusted accordingly.

3. **Header Toggle Button:**  
   The `Header.jsx` file receives `isDarkMode` and `toggleDarkMode` as props. It renders a button that toggles the dark/light mode. When toggled, the button’s background and text colors update dynamically.

4. **Usage in Components:**  
   Other components can also use conditional styling based on the dark mode state to ensure the entire application adheres to the selected theme.

For full code details, see the following key files:

- **App.jsx:**  
  Manages the app-level state including dark mode.
- **Header.jsx:**  
  Displays the dark/light mode toggle button.
- **QueryInput.jsx, DataTable.jsx, etc.:**  
  Can be updated to apply dark mode styles similarly if needed.

## Project Structure

```
Abhyuday-SQLPlaygroundX/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx         // Contains the header and dark/light mode toggle
│   │   ├── Footer.jsx
│   │   ├── QueryInput.jsx     // Contains the CodeMirror editor and query buttons
│   │   ├── QuerySelector.jsx  // For selection of predefined queries
│   │   └── DataTable.jsx      // Displays query results with CSV export and pagination
│   ├── data/
│   │   └── queries.js         // Contains predefined SQL queries and sample data
│   ├── App.jsx                // Application entry point; manages dark mode and global state
│   └── App.css
├── package.json
└── README.md
```

## Customization

- **Theme Customization:**  
  Adjust the inline styles or add CSS classes in `App.css` to further refine the appearance of dark and light modes.

- **Adding More Queries:**  
  Update `src/data/queries.js` to add or modify predefined SQL queries and sample data.

## License

This project is licensed under the MIT License.