import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);

  const getWeather = async () => {
    const apiKey = "35c21836c6ceddc6f9c6f80670f01eaa"; 
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setTemp(`${res.data.main.temp}°C`);
    } catch {
      setTemp("City not found");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
      <h4>Weather</h4>
      <input
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ width: "100%" }}
      />
      <button onClick={getWeather} style={{ marginTop: "5px", width: "100%" }}>
        Show
      </button>
      {temp && <p>{temp}</p>}
    </div>
  );
};

export default Weather;
