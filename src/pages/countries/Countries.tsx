import React, { useState, useEffect } from 'react';
import { Button } from '../../components/button/button';
import { Title } from '../../components/title/Title';
import { Pagination } from '../../services/Pagination';
import CountriesService from '../../services/countriesAPI';
import { Country } from '../../components/country/country';


interface Countries {
    region: string;
    capital: string;
    flag: string
    translations: {
        fr: string
    }
}

export const Countries: React.FC = ( ) => {
    const [countries, setCountries] = useState<Countries[]| any>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [region, setRegion] = useState<any>(null)


    useEffect(() => {
        handleRegion('all')
    }, [])

    const handleRegion = (region: string) => {
        if(region === 'all') {
            CountriesService.getCountries()
            .then(countries => {
                setCountries(countries);
                setLoading(false);
                setRegion(region)
            }
            )}else {
                CountriesService.getCountriesRegion(region)
                .then(c => {
                    setCountries(c)      
                    setRegion(region)
            })
        }
    }
    
    // console.log(countries.region);
    
    
    return (<>
        <div className="container">
            <Title text="Liste des pays du monde"/>
            <div className="row">
                <Button 
                    handle={() => handleRegion('all')} 
                    text="tous" region={region==='all'}
                />
                <Button 
                    handle={() => handleRegion('europe')} 
                    text="Europe" region={region==='europe'}/>
                <Button handle={() => handleRegion('africa')} text="Afrique" region={region==='africa'}/> 
                <Button handle={() => handleRegion('asia')} text="Asie" region={region==='asia'}/>
                <Button handle={() => handleRegion('americas')} text="Amerique" region={region==='americas'}/>
                <Button handle={() => handleRegion('oceania')} text="Oceanie" region={region==='oceania'}/> 
                <p>Nombre de pays: <span className="badge badge-success">{countries.length}</span></p>
            </div>
            {loading ? <div>Chargement...</div> : 
                <div className="row no-gutters">
                    {countries.map((country: any, index:any) => {
                        return (
                            <Country 
                                key={index} 
                                name={country.translations.fr} 
                                region={country.region} 
                                capital={country.capital} 
                                flag={country.flag} 
                            />
                        )
                    })}
                </div>
            } 
            <Pagination />
        </div>
    </>)
}