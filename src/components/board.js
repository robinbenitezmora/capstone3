/* eslint-disable react/prop-types */
import React from 'react';
import Spinner from './spinner';

const Board = ({
  showData, loading, weather, forecast,
}) => {
  const time = new Date();
  const minutes = time.getMinutes();
  const hour = time.getHours();
  const day = time.getDate();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const date = `${day}/${month}/${year}      
  ${hour}:${minutes}`;

  let URL = '';
  let iconURL = '';

  if (loading) {
    return <Spinner />;
  }

  if (showData) {
    URL = 'https:openweathermap.org/img/w/';
    iconURL = 'URL + weather.weather[0].icon + .png';

    iconURL = `${URL + forecast.list[1].weather[0].icon}.png`;
    iconURL = `${URL + forecast.list[2].weather[0].icon}.png`;
    iconURL = `${URL + forecast.list[3].weather[0].icon}.png`;
  }

  return (
    <div className="board">
      {showData === true ? (
        <div className="board__card">
          <div className="board__card--header">
            <div className="board__card--header__city">
              <div className="board__card--header__city__name">
                <h3 className="board__card--header__city__name__title">
                  {weather.name}
                </h3>
                <p className="board__card--header__city__name__date">
                  {date}
                </p>
                <h1 className="board__card--header__city__name__temp">
                  {(weather.main.temp - 273.15).toFixed(1)}
                  °C
                </h1>
                <p className="board__card--header__city__name__desc">
                  <img src={iconURL} alt="weather icon" />
                  {weather.weather[0].description}
                </p>
                <img
                  src="https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/09d.png"
                  className="board__card--header__city__name__img"
                  alt="city"
                />
              </div>

              <div className="board__card--header__city__forecast">
                <div className="board__card--header__city__forecast__day">
                  <p className="board__card--header__city__forecast__day__date">
                    Max Temperature:
                    {'  '}
                    {(weather.main.temp_max - 273.15).toFixed(1)}
                    °C
                  </p>
                  <p className="board__card--header__city__forecast__day__date">
                    Min Temperature:
                    {'  '}
                    {(weather.main.temp_min - 273.15).toFixed(1)}
                    °C
                  </p>
                  <p className="board__card--header__city__forecast__day__date">
                    Thermal Sensation:
                    {'  '}
                    {(weather.main.feels_like - 273.15).toFixed(1)}
                    °C
                  </p>
                  <p className="board__card--header__city__forecast__day__date">
                    Humidity:
                    {'  '}
                    {weather.main.humidity}
                    %
                  </p>
                  <p className="board__card--header__city__forecast__day__date">
                    Wind Speed:
                    {'  '}
                    {weather.wind.speed}
                    m/s
                  </p>
                </div>
                <hr />

                <div className="board__card--header__city__forecast__day">
                  <div className="board__card--header__city__forecast__day__date">
                    <p className="description">
                      Next 3 hours:
                      <img src={iconURL} alt="weather icon" />
                      {forecast.list[1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[1].main.temp - 273.15).toFixed(1)}
                      °C
                    </p>
                  </div>
                  <div className="board__card--header__city__forecast__day__date">
                    <p className="description">
                      Next 6 hours:
                      <img src={iconURL} alt="weather icon" />
                      {forecast.list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(forecast.list[2].main.temp - 273.15).toFixed(1)}
                      °C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="board__title">Search for a city</h2>
      )}
    </div>
  );
};

export default Board;
