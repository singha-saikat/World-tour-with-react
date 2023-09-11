import { useState } from "react";
import CountryDetails from "./CountryDetails";

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  console.log(country);
  const { name, flags, population, area } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  const handleAllActions = () => {
    handleVisited();
    handleVisitedCountry(country);
    handleVisitedFlags(country.flags.png);
  };
  //   return (

  //     <div className="border-4 border-sky-300 m-4 p-4 flex gap-4 items-center">
  //       <div>
  //         <img className="" src={flags?.png} alt="" />
  //       </div>
  //       <div className=" p-4 rounded-md">
  //         <h3 className="font-bold">Name:{name?.common}</h3>
  //         <p>Population: {population}</p>
  //         <p>Area:{area}</p>
  //         <hr className="mb-2" />
  //         <button
  //           type="button"
  //           className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
  //           onClick={handleVisited}
  //         >
  //           Make Visited
  //         </button>
  //         <br />
  //         {visited ? `I visited this country ` : `I want to go there`}
  //         <button
  //           onClick={() => handleVisitedCountry(country)}
  //           type="button"
  //           className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
  //         >
  //           Visited or Not!
  //         </button>
  //         <button onClick={()=> handleAllActions}
  //          className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  //           <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  //             Add as Visited
  //           </span>
  //         </button>

  //       </div>
  //     </div>
  //   );

  return (
    <div className="border-4 border-sky-300 m-4 p-4 flex gap-4 items-center">
      <div>
        <img className="" src={flags?.png} alt="" />
      </div>
      <div className=" p-4 rounded-md">
        <h3 className="font-bold">Name:{name?.common}</h3>
        <p>Population: {population}</p>
        <p>Area:{area}</p>
        <hr className="mb-2" />
        
        <button onClick={handleAllActions} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Visited or Not
          </span>
          
        </button>
        <br />
        {visited ? `I visited this country ` : `I want to go there`}
        <hr />
        <CountryDetails
            country ={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
        ></CountryDetails>
        {/* <CountryDetails {...country}></CountryDetails> */}
      </div>
      
      
    </div>
   
  );
};

export default Country;
