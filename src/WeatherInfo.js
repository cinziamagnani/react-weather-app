import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontawesomeIcons.js';

export default function WeatherInfo(props) {
    const codeMapping = {
        "01d": "circle",
        "01n": "moon",
        "02d": "cloud-sun",
        "02n": "cloud-mood",
        "03d": "cloud",
        "03n": "cloud",
        "04d": "cloud",
        "04n": "cloud",
        "09d": "cloud-showers-heavy",
        "09n": "cloud-showers-heavy",
        "10d": "cloud-rain",
        "10n": "cloud-rain",
        "11d": "bolt",
        "11n": "bolt",
        "13d": "snowflake",
        "13n": "snowflake",
        "50d": "stream",
        "50n": "stream"
     }
    return (
        <div className="WeatherInfo">
            <h1>
                    {props.info.city}
                </h1>
                <h2>
                <FormattedDate moment={props.info.date} />
                </h2>
                <div className="row">
                    <div className="col-6 mainIcon">
                    <FontAwesomeIcon icon={codeMapping[props.info.icon]} />
                </div>
                <div className="col-6">
                <ul>
                    <li className="tempMajor">
                    {props.info.temperature} <span className="unit">°C</span>
                    </li>
                    <li className="mainCondition">
                      {props.info.description}  
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
                        <p>{props.info.feelsLike} <span className="smallUnit">°C</span></p>
                    </div>
                    <div className="col-4 specifications">
                    <div className="icons">
                    <FontAwesomeIcon icon="wind" />
                    </div>
                    <h3>
                            Wind:
                        </h3>
                        <p>{props.info.wind} km/h</p>
                    
                    </div>
                    <div className="col-4 specifications">
                    <div className="icons">
                    <FontAwesomeIcon icon="tint" />
                    </div>
                    <h3>
                            Humidity:
                        </h3>
                        <p>{props.info.humidity} %</p>
                    </div>
                </div>
        </div>
        )
}