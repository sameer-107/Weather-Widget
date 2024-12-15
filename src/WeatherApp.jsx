import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Bhagalpur",
    feelsLike: 22.65,
    humidity: 92,
    temp: 21.99,
    tempMax: 22.8,
    tempMin: 20.83,
    weather: "light intensity drizzle",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2> WeatherApp </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
