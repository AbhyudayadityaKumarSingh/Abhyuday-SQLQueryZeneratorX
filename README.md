# SQL Query Zenerator

SQL Query Zenerator is a lightweight SQL playground built with React. It allows you to select and run predefined SQL queries, edit your queries in a syntax-highlighted CodeMirror editor with SQL auto-complete, and view the result data in a paginated table. The app also supports CSV export, saving custom queries for later use, and a global dark/light mode toggle.

## Overview

This project was designed to simplify SQL query testing and learning by providing an interactive interface where users can try out common SQL queries. It offers a modern code editor experience and clear data presentation along with theme customizations and performance optimizations.

## External Libraries & Framework

- **React:**  
  The project is built with React which handles the UI rendering and component structure.
  
- **CodeMirror:**  
  Installed as a package, CodeMirror provides syntax highlighting and SQL auto-complete functionalities to enhance the query editing experience.

- **Additional Packages:**  
  - **react-dom:** Manages rendering components into the DOM.
  - **papaparse (or similar):** Used for CSV export functionality.
  - **axios or fetch:** For any API interactions (if applicable).

*(For a full list, please refer to the dependencies in the package.json file.)*

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AbhyudayadityaKumarSingh/Abhyuday-SQLQueryZeneratorX.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Abhyuday-SQLQueryZeneratorX
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

## Live Demo

Check out the deployed version of the application at: [https://abhyuday-sql-query-zenerator-x.vercel.app/](https://abhyuday-sql-query-zenerator-x.vercel.app/)

## Performance & Optimizations

- **Page Load Time:**  
  The initial page load time is approximately **2-3 seconds** on a standard development machine. This was measured using Chrome DevTools under the Network tab.

- **Optimizations:**  
  - **Code Splitting & Lazy Loading:** Key components are split into separate bundles to reduce the initial load.
  - **Minified Production Build:** The production build uses minification to decrease bundle size.
  - **Efficient Rendering:** Use of React’s virtual DOM ensures that the UI updates are optimized.
  - **Caching & Compression:** Static assets are cached and served with compression to improve the load time.

## Dark Mode Implementation

This application implements dark mode globally. Below are the key implementation details:

1. **Dark Mode State:**  
   In `App.jsx`, a state variable (`isDarkMode`) is maintained to track whether dark mode is enabled. A toggle function (`toggleDarkMode`) updates this state.

2. **Global Styles:**  
   The top-level container in `App.jsx` is styled using inline styles based on the `isDarkMode` state, adjusting background and text colors accordingly.

3. **Header Toggle Button:**  
   The `Header.jsx` file receives `isDarkMode` and `toggleDarkMode` as props. It renders a button that toggles dark/light mode. When toggled, the button’s background and text colors update dynamically.

4. **Usage in Components:**  
   Other components can use conditional styling based on the dark mode state to ensure the entire application adheres to the selected theme.

For full code details, see the following key files:

- **App.jsx:**  
  Manages the app-level state including dark mode.
- **Header.jsx:**  
  Displays the dark/light mode toggle button.
- **QueryInput.jsx, DataTable.jsx, etc.:**  
  Can be updated to apply dark mode styles similarly if needed.

## Project Structure

```
Abhyuday-SQLQueryZeneratorX/
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
  Adjust the inline styles or add CSS classes in `App.css` to refine the dark and light modes.

- **Adding More Queries:**  
  Update `src/data/queries.js` to add or modify predefined SQL queries and sample data.

