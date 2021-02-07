import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import './FontawesomeIcons.js';
import SingleForecast from "./SingleForecast";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

   
        

    let apiKey = "0eb6de8e155714745cc3ba77875938d2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    function handleForecast(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        return (
            <div className="WeatherForecast row">
                <div className="individualF col-2">
                    <SingleForecast info={forecast.list[0]} mapped={props.map} />
                </div>
                <div className="individualF col-2">
                    <SingleForecast info={forecast.list[1]} mapped={props.map} />
                </div>
                <div className="individualF col-2">
                    <SingleForecast info={forecast.list[2]} mapped={props.map} />
                </div>
                <div className="individualF col-2">
                    <SingleForecast info={forecast.list[3]} mapped={props.map} />
                </div>
                <div className="individualF col-2">
                    <SingleForecast info={forecast.list[4]} mapped={props.map} />
                </div>
            </div>
        )
    } else {
        axios.get(apiUrl).then(handleForecast);
        return (
            <div className="WeatherForecast">
            Loading
        </div>
        )
        
    }
    
    
}