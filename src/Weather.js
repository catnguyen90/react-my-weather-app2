import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-6">
            <h1 className="mt-3">City</h1>
            <ul>
              <li>Date and Time</li>
              <li>Humidity: %</li>
              <li>Wind: m/H</li>
            </ul>
          </div>
          <div className="col-6">
            <h2 className="float-left mt-3">Description</h2>
            <h3>
              <span>
                <img src="#" alt="Clear" />
              </span>
              Temp °F
            </h3>
          </div>
        </div>
        <h4 className="mt-4">FORECAST</h4>
      </div>
    </div>
  );
}
