import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './FontawesomeIcons.js';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    let [weather, setWeather] = useState({ready:false});
    const [city, setCity] = useState(props.defaultCity);
    let apiKey = "0eb6de8e155714745cc3ba77875938d2";
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
                date: new Date(response.data.dt * 1000),
                icon: response.data.weather[0].icon,
            }
        )
    }
    function search() {
        let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(showTemperature);
    }
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }

    function searchCity(event) {
        event.preventDefault();
        setCity(event.target.value);
    }
    function showPosition(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let apiU = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiU).then(showTemperature);
    }
    function handleLocation(event) {
        event.preventDefault();
         navigator.geolocation.getCurrentPosition(showPosition);
    }

    if (weather.ready === true) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row gx-2 search w-85 p-2">
                        <div className="col-10">
                            <input type="text"
                                    placeholder="Search for a city"
                                    className="form-control" 
                                    onChange={searchCity} />
                        </div>
                        <div className="col-1">
                        <a class="btn" href="/" role="button" onClick={handleSubmit}>
                        <FontAwesomeIcon icon="search" className="iconsForm" />
                        </a>
                        </div>
                        <div className="col-1">
                        <a class="btn secondBtn" href="/" role="button" onClick={handleLocation}>
                        <FontAwesomeIcon icon="location-arrow" className="iconsForm" />
                        </a>
                        </div>
                    </div>
                </form>
                <WeatherInfo info={weather} map={codeMapping}/>
                <WeatherForecast city={weather.city} map={codeMapping} />
            </div>
        )
    } else {
        search(city);
        return (
            <h1>
                Loading...
            </h1>
        )
    }
    
    
}