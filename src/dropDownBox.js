import {useState,useEffect} from "react"

const LocSelectorDropDown = () =>
    {
        const [countries, setCountries] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState(null);
        const [selectedState, setSelectedState] = useState(null);        
        const [selectedcity, setSelectedCity] = useState(null);
 
        
        const apiUrl = "http://localhost:3002/countries" ;
        // Function to fetch movie data from api 
            useEffect(() => {
                   const fetMovies = async() => 
                    {
                        const response = await fetch(apiUrl);
                        const fet = await response.json()
                        setCountries(fet);

                    };
                    fetMovies();
            }, []);

             const countryChange = (e) =>{
                const countryVal = (e.target.value);
                if(countryVal>0){

                     const country = countries.find((c)=> c.id === countryVal ) 
                        setSelectedCountry(country);
                        setSelectedState(null);                     
                }
             }

             const stateChange =(e)=>{
                const stateVal = (e.target.value);
                if(stateVal>0){
                     const state = selectedCountry.states.find((c)=> c.id === Number(stateVal) ) 
                        setSelectedState(state);  
                }
                console.log("state value",selectedState)
             }

        return (
            <>
                      <select defaultValue="" onChange={(e)=>countryChange(e)}>
                        <option value="">choose country</option>
                                {countries.map((cnty)=> {return (<option key={cnty.id} value={cnty.id}> {cnty.name} </option>)})}
                      </select>


                    {  selectedCountry && (<select defaultValue="" onChange={(e)=>stateChange(e)}>
                        <option value="">choose state</option>
                                {selectedCountry.states.map((state)=> {return (<option key={state.id} value={state.id}> {state.name} </option>)})}
                      </select>  )} 
                       
                      {  selectedState && (<select defaultValue="">
                        <option value="">choose city</option>
                                {selectedState.cities.map((city)=> {return (<option key={city.id} value={city.id}> {city.name} </option>)})}
                      </select> ) } 

            </>
        )
    };
export default LocSelectorDropDown
