import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: "Wednesday",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-6">
            <h1 className="mt-3">{weatherData.city}</h1>
            <ul>
              <li>{weatherData.date}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/H</li>
            </ul>
          </div>
          <div className="col-6">
            <h2 className="float-left mt-3">{weatherData.description}</h2>
            <h3>
              <span>
                <img src="#" alt="Clear" />
              </span>
              {Math.round(weatherData.temperature)}°F
            </h3>
          </div>
        </div>
        <h4 className="mt-4">FORECAST</h4>
      </div>
    );
  } else {
    const apiKey = "841f4173fd81916cf9b0019ffbaf6e87";
    let city = "London";
    let unit = "imperial";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
