import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "4478640f7decd6828b731d49c9055132";

  let getWeatherInfo = async () => {
    try {
      let responce = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponce = await responce.json();
      let result = {
        city: city,
        temp: jsonResponce.main.temp,
        tempMin: jsonResponce.main.temp_min,
        tempMax: jsonResponce.main.temp_max,
        humidity: jsonResponce.main.humidity,
        feelsLike: jsonResponce.main.feels_Like,
        weather: jsonResponce.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
    console.log(city);
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }catch (err) {
      setError(true);
    }
    
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          SEARCH
        </Button>
        {error && <p style={ { color: "red"}}>NO suchh place exists!</p>}
      </form>
    </div>
  );
}




