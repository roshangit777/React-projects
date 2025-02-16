import React from "react";
import { useState } from "react";

const Wather = ({ data }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-cloudy"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{Math.floor(data.main.temp)}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">
              {data.weather[0].description}
            </div>
            <div className="place">
              {data.name}, {data.sys.country}
            </div>
          </div>
        </div>
        <div className="date">
          {currentDate.getDate()}/{monthNames[currentDate.getMonth()]}
        </div>
      </article>

      <p>
        <a href="https://codepen.io/nerios/full/jWjmby/">
          Inspired by: https://codepen.io/nerios/full/jWjmby/. Implemented using
          FlexBox.
        </a>
      </p>
    </div>
  );
};

export default Wather;
