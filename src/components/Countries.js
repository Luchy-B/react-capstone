import React, { useState, useEffect } from 'react';
import '../styles/Country.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faSearch,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchAllCountries } from '../Redux/Countries/countriesSlice';
import Details from './Details';

export default function Countries() {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);
  const [query, setQuery] = useState('');
  const [selectedCountries, setselectedCountries] = useState(null);

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, [dispatch]);

  const handleSelectCountry = (countriesId) => {
    setselectedCountries(countriesId);
  };

  const handleResetSelection = () => {
    setselectedCountries(null);
  };

  return (
    <div>
      {selectedCountries ? (
        <div>
          <button type="button" onClick={handleResetSelection} aria-label="Back" className="backArrow"><FontAwesomeIcon icon={faArrowLeft} /></button>
          <Details countriesId={selectedCountries} />
        </div>
      ) : (
        <div>
          <nav>
            <h3>COVID-19 REPORT</h3>
            <form className="searchContainer">
              <input
                type="text"
                placeholder="Search Country"
                onChange={(e) => setQuery(e.target.value)}
              />
              <i className="search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </form>
          </nav>

          <h1>2020 REPORT TILL DATE</h1>

          <div className="countryList">
            {countries
              .filter((country) => country.Country_Region.toLowerCase().includes(query))
              .map((country) => (
                <div className="countryItem" key={country.Combined_Key}>
                  <p>{country.Combined_Key}</p>
                  <p>{country.Confirmed}</p>
                  <button
                    type="button"
                    key={uuidv4()}
                    onClick={() => handleSelectCountry(country.Combined_Key)}
                  >
                    <i className="rightArrow">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </i>
                  </button>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
