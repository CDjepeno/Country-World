import React, { useState, useEffect } from 'react';
import { Button } from '../../components/button/button';
import { Title } from '../../components/title/Title';
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
    const [currentpage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 20;


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

    const handlePageChange = (value: any) => {
        setCurrentPage(value)

    }
        
    const length = countries.length;
    const pagesCount = Math.ceil(length / itemsPerPage);
    const pages = []
    for(let i = 1; i <= pagesCount ; i++) {
        pages.push(
            <Button text={i} key={i} currentPage={currentpage === i} clic={() => handlePageChange(i)}/>
        );
    }
        
    const start = currentpage * itemsPerPage - itemsPerPage;
    const paginated = countries.slice(start, start + itemsPerPage);

    return (<>
        <div className="container">
            <Title text="Liste des pays du monde"/>
            <div className="row">
                <Button 
                    clic={() => handleRegion('all')} 
                    text="tous" region={region==='all'}
                />
                <Button 
                    clic={() => handleRegion('europe')} 
                    text="Europe" region={region==='europe'}
                />
                <Button 
                    clic={() => handleRegion('africa')} 
                    text="Afrique" region={region==='africa'}
                /> 
                <Button 
                    clic={() => handleRegion('asia')} 
                    text="Asie" region={region==='asia'}
                />
                <Button 
                    clic={() => handleRegion('americas')} 
                    text="Amerique" region={region==='americas'}
                />
                <Button 
                    clic={() => handleRegion('oceania')} 
                    text="Oceanie" region={region==='oceania'}
                /> 
                <p>Nombre de pays: <span className="badge badge-success">{countries.length}</span></p>
            </div>
            {loading ? <div>Chargement...</div> : 
                <div className="row no-gutters">
                    {paginated.map((country: any, index:any) => {
                        return (
                            <Country 
                                key={index} 
                                name={country.translations.fr} 
                                region={country.region} 
                                capital={country.capital} 
                                flag={country.flag} 
                                money={country.currencies[0].name}
                            />
                        )
                    })}
                </div>
            } 
            {pages}
        </div>
    </>)
}