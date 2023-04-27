import React, { useState } from "react"
import '../styles/Country.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, 
        faSearch,
        faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCountries } from "../Redux/Countries/countriesSlice";
import Details from "./Details";

export function Countries() {
    const dispatch = useDispatch();
    const { countries } = useSelector((state) => state.countries);    
    const [ query, setQuery ] = useState("");
    const [ selectedCountries, setselectedCountries ] = useState(null);

    useEffect(() => {
        dispatch(fetchAllCountries());
    }, [dispatch]);

    const handleSelectAlbum = (countriesId) => {
        setselectedCountries(countriesId)
    }

    const handleResetSelection = () => {
        setselectedCountries(null);
      };
      
    return(
        <div>
            {selectedCountries ? (
          <div>
            <button onClick={handleResetSelection}><FontAwesomeIcon icon={faArrowLeft} /></button>
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
                onChange={(e) => setQuery(e.target.value)}/>
                <i className="search-icon">
                    <FontAwesomeIcon icon={faSearch} />
                </i>
            </form>                    
            </nav>

            <h1>2020 REPORT TILL DATE</h1>

            <div className="countryList">
                {countries.filter((country) =>
                    country.Country_Region.toLowerCase().includes(query)
                    ).map((country) => (
                    <div className="countryItem">                   
                            <p>{country.Combined_Key}</p>
                            <p>{country.Confirmed}</p>
                            <button
                                key={country.Combined_Key}
                                onClick={() => handleSelectAlbum(country.Combined_Key)}
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