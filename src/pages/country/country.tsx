import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Country } from '../../components/country/country';
import { Title } from '../../components/title/Title';
import CountriesService from '../../services/countriesAPI';

export interface Props {
    id: string
}
 
const CountryPage: React.FC<RouteComponentProps<Props>> = ({match}) => {

    const [country, setCountry] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<boolean>(true)  

    useEffect(() => {
        setLoading(true)
        CountriesService.getCountryByName(match.params.id)
        .then(country => {
            setCountry(country)
            setLoading(false)
        })
    }, [])
        
    
    return ( 
        <div className="container">
           <Title text={`Pays : ${match.params.id}`} /> 
           {loading && <div>Chargement...</div>}

           {country && 
                <Country 
                    name={country.translations.fr} 
                    region={country.region} 
                    capital={country.capital}
                    flag={country.flag}
                    detail={detail}
                 />
           }
        </div>
     );
}
 
export default CountryPage;