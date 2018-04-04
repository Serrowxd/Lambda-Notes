import React from "react";

const CitiesList = props => {
  const { name, cities } = props;
  return (
    <div>
      <h2>A list of {name}</h2>
      {cities.map(city => {
        return (
          <div key={city.state}>
            <p>{city.city}</p>
            <p>{city.state}</p>
            <p>population: {city.population}</p>
            <p>land area: {city.land_area}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CitiesList;
