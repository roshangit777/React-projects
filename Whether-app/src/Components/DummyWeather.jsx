import React from "react";

const Wather = () => {
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-cloudy"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>Not Available&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">Not Available</div>
            <div className="place">Bengaluru, IN</div>
          </div>
        </div>
        <div className="date"></div>
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
