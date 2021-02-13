import React from 'react';
import classes from './country.module.css'

type Props = {
    name: string
    region: string
    capital: string
    key: number
    flag: string
}

export const Country: React.FC<Props> = ({ flag ,name, key, capital, region }) => {
    return (   
        <div className="col-5 no-gutters border border-dark p-2 mr-5 mt-4" key={key}>
            <div className="row">
                <div className="col">
                    <img className={classes.img} src={flag} alt={name}/>
                </div>
                <div className="col">
                    <h3>Nom: {name}</h3>
                    <p>Capital: {capital} </p> 
                    <p>Region: {region}</p> 
                </div>
            </div>
        </div>
    )
}
