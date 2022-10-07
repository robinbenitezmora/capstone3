/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Form from './form';
import Board from './board';

const Panel = () => {
  let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';
  const urlCity = '&q=';

  let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState('');

  const getLocation = async (city) => {
    setLoading(true);
    setLocation(city);

    urlWeather += urlCity + city;

    await fetch(urlWeather)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        setLoading(false);
        setShow(false);
      });

    urlForecast += urlCity + city;

    await fetch(urlForecast)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((forecastData) => {
        setForecast(forecastData);
        setLoading(false);
        setShow(true);
      });
  };

  return (
    <div className="container">
      <Form newLocation={getLocation} />
      <Board
        weather={weather}
        forecast={forecast}
        loading={loading}
        showData={show}
        location={location}
      />
    </div>
  );
};

export default Panel;
