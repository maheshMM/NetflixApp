import React, { useEffect, useState } from "react";
import './App.css';

const API_KEY = '8d6fc4dcf1mshc08f76c1b64d88dp1d6176jsn38ebc0e9ea8e';
const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';


const LocationSelector = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);



  const getData = async (endPoint) => {
    try {
      const response = await fetch(`${BASE_URL}/${endPoint}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
        },
      });
      const data = await response.json();
      return data.data || []; // Return only data array or an empty array if undefined
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  let lastCallTime = 0;
  
  const rateLimitedFetch = async (endpoint) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;
    const minInterval = 1000; // 1 request per second
  
    if (timeSinceLastCall < minInterval) {
      await new Promise(resolve => setTimeout(resolve, minInterval - timeSinceLastCall));
    }
    
    lastCallTime = Date.now();
    return getData(endpoint);
  };
  
  const handleCountryChange = async (countryCode) => {
         setSelectedCountry(countryCode);
         setSelectedState(null);
         setCities([]);
         const statesData = await getData(`countries/${countryCode}/regions`);
         setStates(statesData);
         console.log("Region data",statesData)
  }


  
  const handleStateChange = async (stateCode) => {
    setSelectedState(stateCode);
    setCities([]);
    const cityData = await getData(`countries/${selectedCountry}/regions/${stateCode}/cities`);
    setCities(cityData);
    console.log("city data",cityData)
}


  useEffect(() => {
    const fetchCountries = async () => {
      const countryData = await rateLimitedFetch('countries');
      setCountries(countryData);
      console.log("Countries listing from RapidAPI", countryData);
    };

    fetchCountries();
  }, []);

  return (
   
    <div className="locSel" style={{ display : "flex", flexDirection : "column", justifyContent: "left", alignItems:"left", gap: "10px", marginLeft:"100px"}}>
    
      {/* Country Dropdown */}
      <select className="locCntry"  onChange={(e) => handleCountryChange(e.target.value) }>
      <option value="" >Select Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>{country.name}</option>
        ))}
      </select>
     {/* State Dropdown */}
      <select  className="locState" onChange={(e) => handleStateChange(e.target.value) } >
      <option value="" >Select State</option>
        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>{state.name}</option>
        ))}
      </select>
     {/* City Dropdown */}
     <select className="loccity"  >
      <option value="" >Select City</option>
        {cities.map((city) => (
          <option key={city.id} value={city.id}>{city.name}</option>
        ))}
      </select>

    </div>
    
  );
};

export default LocationSelector;
