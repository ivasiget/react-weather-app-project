import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <h1>Zagreb</h1>
        <ul>
          <li className="dayTime"> Monday 12:00</li>
          <li className="description"> Partial clouds</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Partial clouds"
              />
              <span className="temperature">6</span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 2%</li>
              <li>Humidity: 79%</li>
              <li>Wind: 15 km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <a
          href="https://github.com/ivasiget/react-weather-app-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Open-sourced code
        </a>{" "}
        on GitHub by Iva Siget.
      </footer>
    </div>
  );
}
