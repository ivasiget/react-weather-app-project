import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Weather defaultCity="London" />
      </div>
    </div>
  );
}

export default App;
