import React from 'react';
import Spinner from './spinner';

const Board = ({ card, loading, climate, forecast }) => {
  const time = new Date();
  const day = time.getDay();
  const month = time.getMonth() + 1;
  const year = time.getFullYear();
  const date = `${day}/${month}`;

  let URL = '';
  let iconURL = '';

  if (loading) {
    return <Spinner />;
  }

  if (card) {
    URL = 'https:openweathermap.org/img/w/';
    iconURL = 'URL + card.weather[0].icon + .png';

    iconURL = `${URL + forecast.list[1].weather[0].icon}.png`;
    iconURL = `${URL + forecast.list[2].weather[0].icon}.png`;
    iconURL = `${URL + forecast.list[3].weather[0].icon}.png`;
  }

  return (
    <div className="board">
      {card === true ? (
        <div className="board__card">
          <div className="board__card--header">
            <div className="board__card--header__city">
              <div className="board__card--header__city__name">
                <h3 className="board__card--header__city__name__title">
                  {weather.name}
                </h3>
                <p className="board__card--header__city__name__date">
                  {date} {year}
                </p>
                <h1 className="board__card--header__city__name__temp">
                  {(weather.main.temp - 273.15).toFixed(1)}°C
                </h1>
                <p className="board__card--header__city__name__desc">
                  <img src={iconURL} alt="weather icon" />
                  {weather.weather[0].description}
                </p>
                <img
                  src="https://img.icons8.com/ios/50/000000/temperature.png"
                  className="board__card--header__city__name__icon"
                  alt="temperature icon"
                />

                <div className="board__card--header__city__name__temp__minmax">
                  <div className="board__card--header__city__name__temp__minmax__min">
                    <p className="board__card--header__city__name__temp__minmax__min__title">
                      Max Temperature:
                      {(weather.main.temp_max - 273.15).toFixed(1)}°C
                    </p>
                    <p className="board__card--header__city__name__temp__minmax__min__title">
                      Min Temperature:
                      {(weather.main.temp_min - 273.15).toFixed(1)}°C
                    </p>
                    <p className="board__card--header__city__name__temp__minmax__min__title">
                      Humidity: {weather.main.humidity}%
                    </p>
                    <p className="board__card--header__city__name__temp__minmax__min__title">
                      Wind Speed: {weather.wind.speed}m/s
                    </p>
                  </div>
                  <hr />

                  <div className="board__card--header__city__name__temp__minmax__max">
                    <div className="board__card--header__city__name__temp__minmax__max__day">
                      <p className="description">
                        Next 3 hours:
                        <img src={iconURL} alt="weather icon" />
                        {forecast.list[1].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[1].main.temp - 273.15).toFixed(1)}°C
                      </p>
                    </div>
                    <div className="board__card--header__city__name__temp__minmax__max__day">
                      <p className="description">
                        Next 6 hours:
                        <img src={iconURL} alt="weather icon" />
                        {forecast.list[2].weather[0].description}
                      </p>
                      <p className="temp">
                        {(forecast.list[2].main.temp - 273.15).toFixed(1)}°C
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="board__card--header__city__name__title">
          Please enter a city name
        </h2>
      )}
    </div>
  );
};

export default Board;
