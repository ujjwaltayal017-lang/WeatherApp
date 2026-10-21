import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1669990950563-8b31d8ed237b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhaW58ZW58MHx8MHx8fDA%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title={info.weather}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="weatherTitle"
            >
              📍{info.city}
            </Typography>

            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component="div"
              className="weatherDetails"
            >
              <p>🌡 Temperature = {info.temp}&deg;C</p>
              <p>💧 Humadity = {info.humidity}%</p>
              <p>⬇ Min Temp = {info.tempMin}&deg;C</p>
              <p>⬆ Max Temp = {info.tempMax}&deg;C</p>

              <p>
                🌥 Weather:
                <span className="weatherType"> {info.weather}</span>
              </p>
              <p>🤗 Feels Like: {info.feels_like}°C</p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
