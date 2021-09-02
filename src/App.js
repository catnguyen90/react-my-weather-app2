import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="London" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://vibrant-goldberg-47672a.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Cathy Nguyen
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/catnguyen90/react-my-weather-app2"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://compassionate-dijkstra-923ddc.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
