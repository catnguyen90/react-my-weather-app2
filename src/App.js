import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Cathy Nguyen and is{" "}
        <a
          href="https://github.com/catnguyen90/react-my-weather-app2"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}
