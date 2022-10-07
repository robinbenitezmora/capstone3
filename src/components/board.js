import React from 'react';
import Spinner from './spinner';

const Board = ({ card, loading, climate, forecast }) => {
  const time = new Date();
  const hour = time.getHours();
  const day = time.getDay();
  const month = time.getMonth() + 1;
  const date = `${day}/${month}`;

  let URL = '';
  let icon = '';

  if (loading) {
    return <Spinner />;
  }

  if (card) {
    URL = `https://www.metaweather.com/static/img/weather/${card.weather_state_abbr}.svg`;
    icon = <img src={URL} alt="weather icon" />;
  }

  icon = <img src={URL} alt="weather icon" />;
  return (
    <div className="board">
      <div className="board__header">
        <h1 className="board__title">Weather App</h1>
        <p className="board__date">{date}</p>
      </div>
      <div className="board__content">
        <div className="board__content__left">
          <div className="board__content__left__top">
            <h2 className="board__content__left__top__title">
              {climate.title}
            </h2>
            <p className="board__content__left__top__subtitle">
              {climate.subtitle}
            </p>
          </div>
          <div className="board__content__left__bottom">
            <div className="board__content__left__bottom__temp">
              <p className="board__content__left__bottom__temp__title">
                {card.the_temp.toFixed(0)}
                <sup>o</sup>
              </p>
              <p className="board__content__left__bottom__temp__subtitle">
                {card.weather_state_name}
              </p>
            </div>
            <div className="board__content__left__bottom__icon">{icon}</div>
          </div>
        </div>
        <div className="board__content__right">
          <div className="board__content__right__top">
            <p className="board__content__right__top__title">Today</p>
            <p className="board__content__right__top__subtitle">
              {forecast[0].weather_state_name}
            </p>
          </div>
          <div className="board__content__right__bottom">
            <div className="board__content__right__bottom__temp">
              <p className="board__content__right__bottom__temp__title">
                {forecast[0].the_temp.toFixed(0)}
                <sup>o</sup>
              </p>
              <p className="board__content__right__bottom__temp__subtitle">
                {forecast[0].weather_state_name}
              </p>
            </div>
            <div className="board__content__right__bottom__icon">
              <img src={URL} alt="weather icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
