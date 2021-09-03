import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h2 className="float-left mt-3">{props.data.description}</h2>
          <div class="d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} />
            </div>
            <div className="float-left">
              <WeatherTemperature fahrenheit={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col">
          <h4 className="mt-4">FORECAST</h4>
        </div>
      </div>
    </div>
  );
}
