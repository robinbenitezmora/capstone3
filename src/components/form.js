/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Form = ({ newLocation }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city === '' || !city) return;
    newLocation(city);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="btn btn-primary"
            id="search-btn"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
