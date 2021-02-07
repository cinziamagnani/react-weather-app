import React, { useState} from "react";

export default function Temperature(props) {
    const [unit, setUnit] = useState("celsius");
    

    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function fahrenheit() {
        return Math.round((props.celsius*9)/5+32);
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }
    if(unit === "celsius") {
        return (
            <div className="Temperature">
                <span>{props.celsius} </span> 
                <span className="unit">
                °C | <a href="/" onClick={showFahrenheit}> °F</a>
                </span>
            </div>
        )
    } else {
        return (
            <div className="Temperature">
                <span>{fahrenheit()} </span> 
                <span className="unit">
                <a href="/" onClick={showCelsius}>°C</a> | °F
                </span>
            </div>
        )
    }
    
}