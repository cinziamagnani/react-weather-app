import React from "react";

export default function FormattedDate(props) {
    let date = props.moment.getDate();
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
    let day = days[props.moment.getDay()];
    let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    let month = months[props.moment.getMonth()];
    let hours = props.moment.getHours();
    if(hours<10) {
        hours = `0${hours}`;
    }
    let minutes = props.moment.getMinutes();
    if(minutes<10) {
        minutes = `0${minutes}`;
    }

    
    return <h2>
       {day}, {date} {month} {hours}:{minutes}
    </h2>
}