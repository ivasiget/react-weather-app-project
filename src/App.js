import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="London" />
        <footer>
          <a
            href="https://github.com/ivasiget/react-weather-app-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open-sourced code
          </a>{" "}
          on GitHub by Iva Siget
        </footer>
      </div>
    </div>
  );
}

export default App;
