import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",

    O1n: "CLEAR_NIGHT",
    O2d: "PARTLY_CLOUDY_DAY",
    O2n: "PARTLY_CLOUDY_NIGHT",
    O3d: "PARTLY_CLOUDY_DAY",
    O3n: "PARTLY_CLOUDY_NIGHT",
    O4d: "CLOUDY",
    O4n: "CLOUDY",
    O9d: "RAIN",
    O9n: "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <div>
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#db7093"
        size={50}
        animate={true}
      />
    </div>
  );
}
