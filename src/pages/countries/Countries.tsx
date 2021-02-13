import React, { useState, useEffect } from 'react';
import { Button } from '../../components/button/button';
import { Title } from '../../components/title/Title';
import { Pagination } from '../../services/Pagination';
import CountriesService from '../../services/countriesAPI';
import { Country } from '../../components/country/country';


interface Countries {
    name: string;
    region: string;
    capital: string;
    flag: string
}

export const Countries: React.FC = ( ) => {
    const [countries, setCountries] = useState<Countries[]>([])

    useEffect(() => {
        CountriesService.getCountries()
        .then(countries => setCountries(countries))
        
    },[])
    // console.log(countries);
  
    
    return (<>
        <div className="container">
            <Title text="Liste des pays du monde"/>
            <div className="row">
                <Button text="Tous"/>
                <Button text="Europe"/>
                <Button text="Afrique"/>
                <Button text="Asie"/>
                <Button text="Amérique"/>
                <Button text="Océanie"/>
            </div>
            <div className="row">
                {countries.map((country, index) => {
                    return (
                        <Country 
                            key={index} 
                            name={country.name} 
                            region={country.region} 
                            capital={country.capital} 
                            flag={country.flag} 
                        />
                    )
                })}
            </div>
            <Pagination />
        </div>
    </>)
}