import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./Weather.css";
import { useState } from "react";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feels_like: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weatherContainer">
      <h2> 🌤 Live Weather Forecast </h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
