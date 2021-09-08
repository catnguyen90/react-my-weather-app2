import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <h3 className="WeatherTemperature">
      <span className="temperature">{Math.round(props.fahrenheit)}</span>
      <span className="unit">°F</span>
    </h3>
  );
}
