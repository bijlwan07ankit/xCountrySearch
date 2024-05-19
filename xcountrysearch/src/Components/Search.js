// import {useState, useEffect} from "react"
// import axios from "axios"
// import styles from "./Xcountry.module.css"

// export default function XcountrySearch(){

// const [countries, setCountries]=useState([]);
// const [Search , setSearch]=useState("")
// const [filtered, setFilteredData]=useState();


// const handleChange = (e)=> {
//     setSearch(e.target.value);
// };

// useEffect(()=>{
// fetchCountries();
// },[])

// const fetchCountries= async()=>{

// let data= await axios.get("https://restcountries.com/v3.1/all");
// console.log(data.data);
// setCountries(data.data);
// }
// useEffect(()=>{
//     const data=countries.filter((country)=>
//     country.name.comon.toLowerCase().includes(Search.toLowerCase())
// );
// setFilteredData(data);
// },[Search,countries]);
// console.log(countries);
//     return (
//         <>
//         <div className={styles.inputbar}>        
//         <input 
//         type="text"
//         placeholder="search for countries"
//         onChange={(e)=>handleChange(e)}
//         />
//         </div>
//         <div className="App">
//         {Search === ""
//           ? countries.map((country) => {
//               return (
//                 <div className="countryCard">
//                   {country.name.common!==undefined && country.flags.png!==undefined &&
//                   <div>
//                   <img src={country.flags.png} alt={country.flag}></img>
//                   <h2>{country.name.common}</h2>
//                   </div>}
//                 </div>
//               );
//             })
//           : filtered.map((country) => {
//               return (
//                 <div className="countryCard">
//                   {country.name.common!==undefined && country.flags.png!==undefined &&
//                   <div>
//                   <img src={country.flags.png} alt={country.flag}></img>
//                   <h2>{country.name.common}</h2>
//                   </div>}
//                 </div>
//               );
//             })}
//       </div>
//       </>
//     )
// }
  

import styles from "../Components/Search.module.css"
import { useEffect, useState } from "react";

export default function Search() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const data = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(data);
  }, [search,countries]);

  console.log(countries);

  return (
    <div className={styles.main}>
      <div className={styles.inp}>
        <input
          type="text"
          placeholder="Enter a country"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={styles.App}>
        {search === ""
          ? countries.map((country) => {
              return (
                <div className={styles.countryCard}>
                  {country.name.common!==undefined && country.flags.png!==undefined &&
                  <div>
                  <img src={country.flags.png} alt={country.flag}></img>
                  <h2>{country.name.common}</h2>
                  </div>}
                </div>
              );
            })
          : filtered.map((country) => {
              return (
                <div className={styles.countryCard}>
                  {country.name.common!==undefined && country.flags.png!==undefined &&
                  <div>
                  <img src={country.flags.png} alt={country.flag}></img>
                  <h2>{country.name.common}</h2>
                  </div>}
                </div>
              );
            })}
      </div>
    </div>
  );
}