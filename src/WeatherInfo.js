import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1 className="mt-3">{props.data.city}</h1>
          <ul>
            <li>
              <strong>
                <FormattedDate date={props.data.date} />
              </strong>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/H</li>
          </ul>
        </div>
        <div className="col-6">
          <h2 className="float-left mt-3">{props.data.description}</h2>
          <h3>
            <span>
              <img src="#" alt="Clear" />
            </span>
            {Math.round(props.data.temperature)}°F
          </h3>
        </div>
      </div>
      <h4 className="mt-4">FORECAST</h4>
    </div>
  );
}
