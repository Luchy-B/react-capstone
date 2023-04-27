import React from "react";
import { useSelector } from "react-redux";

function Details (countriesId) {
    const { countries } = useSelector((state) => state.countries);
    const selectedCountries = countries.find((cnty) => cnty.Combined_Key === countriesId);
    
    return (
        <div>
            <div>Last_Update:{selectedCountries.Last_Update}</div>
            <div  className="app_details">
                <div className="data">
            <p>Confirmed cases:</p>
                {selectedCountries.Confirmed}
            </div>
            <div className="data">
            <p>Deaths:</p>
            {selectedCountries.Deaths}
            </div>
            <div className="data">
            <p>Recovered:</p>
            {selectedCountries.Recovered}
            </div>
            <div className="data">
            <p>Incident_Rate:</p>
            {selectedCountries.Incident_Rate}
            </div>
            </div>
        </div>
    )
}

export default Details;