import React, { useState } from "react";
import "./Weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontawesomeIcons.js';
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
    let [weather, setWeather] = useState({ready:false});
    let apiKey = "0eb6de8e155714745cc3ba77875938d2";
    

    function showTemperature(response) {
        setWeather(
            {
                ready: true,
                temperature: Math.round(response.data.main.temp),
                city: response.data.name,
                description: response.data.weather[0].description,
                feelsLike: Math.round(response.data.main.feels_like),
                wind: Math.round(response.data.wind.speed),
                humidity: Math.round(response.data.main.humidity),
                date: new Date(response.data.dt * 1000)
            }
        )
    }

    if (weather.ready === true) {
        return (
            <div className="Weather">
                <h1>
                    {weather.city}
                </h1>
                <h2>
                    <FormattedDate moment={weather.date} />
                </h2>
                <div className="row">
                    <div className="col-6 mainIcon">
                    <FontAwesomeIcon icon="cloud" />
                </div>
                <div className="col-6">
                <ul>
                    <li className="tempMajor">
                    {weather.temperature} °C
                    </li>
                    <li className="mainCondition">
                      {weather.description}  
                    </li>
                </ul>
                </div>
                </div>
                <div className="row moreInfo">
                    <div className="col-4 specifications">
                        <div className="icons">
                    <FontAwesomeIcon icon="thermometer-half" />
                    </div>
                        <h3>
                            Feels like:
                        </h3>
                        <p>{weather.feelsLike} °C</p>
                    </div>
                    <div className="col-4 specifications">
                    <div className="icons">
                    <FontAwesomeIcon icon="wind" />
                    </div>
                    <h3>
                            Wind:
                        </h3>
                        <p>{weather.wind} km/h</p>
                    
                    </div>
                    <div className="col-4 specifications">
                    <div className="icons">
                    <FontAwesomeIcon icon="tint" />
                    </div>
                    <h3>
                            Humidity:
                        </h3>
                        <p>{weather.humidity} %</p>
                    </div>
                </div>
            </div>
        )
    } else {
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
        return (
            <h1>
                Loading...
            </h1>
        )
    }
    
    
}