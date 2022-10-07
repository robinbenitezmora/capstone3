import React, { useState } from 'react';
import Form from './form';
import Board from './board';

const WeatherPanel = () => {
  let apiWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';
  const apiCity = '&q=';

  let apiForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';

  const [climate, setClimate] = useState({});
  const [card, setCard] = useState({});
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);

  const place = async (city) => {
    setLoading(true);
    const response = await fetch(apiWeather + apiCity + city);
    const data = await response.json();
    const responseForecast = await fetch(apiForecast + apiCity + city);
    const dataForecast = await responseForecast.json();
    const forecast = dataForecast.list.filter((item) => item.dt_txt.includes('12:00:00'));
    setClimate({
      title: data.name,
      subtitle: data.sys.country,
    });
    setCard({
      the_temp: data.main.temp - 273.15,
      weather_state_name: data.weather[0].description,
      weather_state_abbr: data.weather[0].icon,
    });
    setForecast(forecast);
    setLoading(false);
  };

  return (
    <div className="panel">
      <Form place={place} />
      <Board card={card} loading={loading} climate={climate} forecast={forecast} />
    </div>
  );
};

export default WeatherPanel;
