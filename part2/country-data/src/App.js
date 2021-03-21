import React, { useState, useEffect } from 'react'
import axios from "axios";
function App() {
    const [countries, setCountries] = useState([])
    const [show, setShow] = useState('')
    useEffect(() => {
        axios
            .get("https://restcountries.eu/rest/v2/all")
            .then(response => {
                setCountries(response.data)
            })
    }, [])
    const handleFilterChange = (event) => {
        setShow(event.target.value)
    }
    const countriesToShow = () => {
        if(countries.filter(country => country.name.includes(show)).length < 10){
            if (countries.filter(country => country.name.includes(show)).length === 1){
                return countries.filter(country => country.name.includes(show)).map(country =>
                    <div>
                        <h1>{country.name}</h1>
                        <br/>
                        capital {country.capital}<br/>
                        population {country.population}<br/>
                        <h2>languages</h2>
                        <ul>
                            {country.languages.map(language => <li>{language.name}</li>)}
                        </ul>
                        <img alt={"$flag of {country.name}"} src={country.flag} width="150" border="1px black solid"/>
                    </div>)
            }else{
                return countries.filter(country => country.name.includes(show)).map(country => <p>{country.name}</p>)
            }
        } else {
                return "Too many countries"
        }
    }
    return (
        <div>
            <div>filter shown with <input onChange={handleFilterChange}/></div>
            {countriesToShow()}
        </div>
    );
}

export default App;
