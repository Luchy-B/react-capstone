import React from 'react';
import '../styles/Details.css';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Details({ countriesId }) {
  const { countries } = useSelector((state) => state.countries);
  const country = countries.find((country) => country.Combined_Key === countriesId);

  return (
    <div>
      <div className="countryName">
        {country.Combined_Key}
      </div>

      <div className="detailsContents">
        <div className="detailsData">
          <span>Confirmed cases: </span>
          {country.Confirmed}
        </div>
        <div className="detailsData">
          <span>Deaths: </span>
          {country.Deaths}
        </div>
        <div className="detailsData">
          <span>Incident Rate: </span>
          {country.Incident_Rate}
        </div>
        <div className="detailsData">
          <span>Last Update: </span>
          {country.Last_Update}
        </div>
      </div>
    </div>
  );
}

export default Details;

Details.propTypes = {
  countriesId: PropTypes.string.isRequired,
};
