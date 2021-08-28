import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h4 className="text-center">Current Date and Time</h4>
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
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1 className="text-center">City</h1>
      <h4 className="text-center">Description</h4>
      <div className="row">
        <div className="col-6 text-center">
          <h4>Humidity: </h4>
        </div>
        <div className="col-6 text-center">
          <h4>Wind: </h4>
        </div>
      </div>

      <h2 className="text-center">
        <img clasName="float-left" src="#" alt="Icon" />
        Temp
      </h2>
    </div>
  );
}
