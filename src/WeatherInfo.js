import React from "react";
import FormattedDate from "./FormattedDate";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontawesomeIcons.js';

export default function WeatherInfo(props) {
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
                    <FontAwesomeIcon icon="cloud" />
                </div>
                <div className="col-6">
                <ul>
                    <li className="tempMajor">
                    {props.info.temperature} °C
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
                        <p>{props.info.feelsLike} °C</p>
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