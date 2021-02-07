import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontawesomeIcons.js';
import "./WeatherForecast.css";

export default function SingleForecast(props) {
        let dateTime = new Date(props.info.dt*1000);
    let hours = dateTime.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    
    return (
        <div className="SingleForecast">
            <p className="time">{hours}:00</p>
                <FontAwesomeIcon icon={props.mapped[props.info.weather[0].icon]} className="icon" />
                <p className="temperatures">{Math.round(props.info.main.temp)} °C</p>
        </div>
    )
}