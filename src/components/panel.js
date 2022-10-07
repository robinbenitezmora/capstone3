import React, { useState } from 'react';
import Form from './form';
import Board from './board';

const Panel = () => {
  let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';
  const urlCity = '&q=';

  let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=56cdd6a9ec3b0492107abe99f711937a&lang=EN';

const [climate, setClimate] = useState({});
const [forecast, setForecast] = useState({});
const [loading, setLoading] = useState(false);
const [card, setCard] = useState(false);
const [location, setLocation] = useState('');

const getLocation = async (city) => {
  setLoading(true);
  setLocation(city);
  
  urlWeather += urlCity + city;

  await fetch(urlWeather)
    .then((response) => {
      if (!response.ok) {
        throw Error('Could not fetch the data for that resource');
      }
      return response.json();
    })
    .then((weatherData) => {
      setClimate(weatherData);
      setLoading(false);
      setCard(false);
    });

  urlForecast += urlCity + city;

  await fetch(urlForecast)
    .then((response) => {
      if (!response.ok) {
        throw Error('Could not fetch the data for that resource');
      }
      return response.json();
    })
    .then((forecastData) => {
      setForecast(forecastData);
      setLoading(false);
      setCard(true);
    });
};

  return (
    <div className="panel">
      <Form newLocation={getLocation} />
      <Board card={card} loading={loading} climate={climate} forecast={forecast} />
    </div>
  );
};

export default Panel;
