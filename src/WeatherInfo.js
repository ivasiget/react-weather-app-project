import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="dayTime">
          {" "}
          <FormattedDate date={props.data.date} />
        </li>
        <li className="description"> {props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img src={props.data.icon} alt={props.data.description} />
            <span className="temperature">{props.data.temp}</span>{" "}
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
