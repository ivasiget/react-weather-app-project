import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [load, setLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setLoad(true);
    setWeatherData({
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      icon: response.data.condition.icon_url,
    });
  }

  if (load) {
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
          <h1>{weatherData.city}</h1>
          <ul>
            <li className="dayTime"> Monday 12:00</li>
            <li className="description"> {weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img src={weatherData.icon} alt="Partial clouds" />
                <span className="temperature">{weatherData.temp}</span>{" "}
                <span className="unit">°C</span>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: 2%</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
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
  } else {
    let apiKey = "botb4a69e3f0fc551fbaeaad13df3ca3";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&unit=metrics`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
