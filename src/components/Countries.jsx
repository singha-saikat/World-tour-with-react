import { useEffect } from "react";
import { useState } from "react";
import Country from"./Country";


const Countries = () => {
    const [countries , setCountries] = useState([]);
    const [visitedCountries,setCountriesVisited] =useState ([]);
    const [visitedFlags,setVisitedFlags] =useState([]);
    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisitedCountry = (country) =>{
        console.log('add this to your visited country');
        const newVisitedCounteries = [...visitedCountries,country];
        setCountriesVisited(newVisitedCounteries);
    }
    const handleVisitedFlags = (flag)=>{
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
            <h3>Countries:{countries.length}</h3>
            <div className="border border-red-200">
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ol>
                    {
                        visitedCountries.map( country => <li key={country.cca3}>{country?.name.common}</li>)
                        
                    }
                </ol>
            </div>
            <div className="space-y-2 p-4 border border-green-400 mt-4 flex flex-wrap gap-2 " >
                {
                    visitedFlags.map((flag,idx) => <img key={idx} className="w-20" src={flag}></img>)
                }
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry = {handleVisitedCountry}
                        handleVisitedFlags = {handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
            
        </div>
    );
};

export default Countries;