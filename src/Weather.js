import React from "react";
import "./Weather.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontawesomeIcons.js';

export default function Weather() {
    return (
        <div className="Weather">
            <h1>
                Amsterdam
            </h1>
            <h2>
                Wednesday, 3 February 
                <br />
                20:00
            </h2>
            <div className="row">
                <div className="col-6 mainIcon">
                <FontAwesomeIcon icon="cloud" />
            </div>
            <div className="col-6">
            <ul>
                <li className="temp-major">
                27 °C
                </li>
                <li>
                  Cloudy  
                </li>
            </ul>
            </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="icons">
                <FontAwesomeIcon icon="thermometer-half" />
                </div>
                    <h3>
                        Feels like:
                    </h3>
                    <p>26°C</p>
                </div>
                <div className="col-4">
                <div className="icons">
                <FontAwesomeIcon icon="wind" />
                </div>
                <h3>
                        Wind:
                    </h3>
                    <p>2 km/h</p>
                
                </div>
                <div className="col-4">
                <div className="icons">
                <FontAwesomeIcon icon="tint" />
                </div>
                <h3>
                        Humidity:
                    </h3>
                    <p>2 %</p>
                </div>
            </div>
        </div>
    )
}