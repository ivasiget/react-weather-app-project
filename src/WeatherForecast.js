import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiKey = "botb4a69e3f0fc551fbaeaad13df3ca3";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&unit=metrics`;

  function handeResponse(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(handeResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Thu</div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
            alt=""
          />{" "}
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max"> 19</span>
            <span className="WeatherForecast-temperature-min"> 10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
