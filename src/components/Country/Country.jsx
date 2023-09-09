import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry}) => {
    const {name,flags,population,area,cca3}=country;

    const[visited,setVisited]=useState(false);

    const handleVisited=()=>{
        setVisited(!visited);
    }

    const passWithParameters=()=>{
        handleVisitedCountry(country);
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>name:{name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>population:{population}</p>
            <p>area:{area} sq.km </p>
            <p><small>Code:{cca3} </small></p>
            <button onClick={passWithParameters}>Mark Visited</button>
            <button onClick={handleVisited}>{visited?'Visited':'Going'}</button><br/>
            {visited ? 'I have Visited this country':'i havent' }
        </div>
    );
};

export default Country;