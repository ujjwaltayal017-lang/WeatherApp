import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );

            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            let newInfo = await getWeatherInfo(city);
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        }
    };
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} className="SearchBox">
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /> <br />
                <Button type="Submit" variant="contained" endIcon={<SearchIcon />}>
                    Search
                </Button>
                {error && <p className="error">No such place Exists! </p>}
            </form>
        </div>
    );
}
