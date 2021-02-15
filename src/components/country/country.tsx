import React from 'react';
import { Link } from 'react-router-dom';
import classes from './country.module.css'

type Props = {
    name: string
    region: string
    capital: string
    key?: number
    flag: string
    match?: any
    detail?: boolean 
    money?:string
}

export const Country: React.FC<Props> = ({ flag ,name, key, capital, region, match, detail, money  }) => {
    console.log(money);
    
    return (   
        <div className="col-5 no-gutters border border-dark p-2 mr-5 mt-4" key={key}>
            {! detail &&
                 <div className="row">
                 <div className="col">
                     <img className={classes.img} src={flag} alt={name}/>
                 </div>
                 <div className="col">
                     <h3>Nom: {name}</h3>
                     <p>Capital: {capital} </p> 
                     <p>Region: {region}</p> 
                     {!detail && 
                         <Link to={`/pays/${name}`} className="nav-link">Voir la fiche du pays</Link>
                     }
                 </div>
             </div>

            ||

                <div className="row">
                    <div className="col">
                        <img className={classes.img} src={flag} alt={name}/>
                    </div>
                    <div className="col">
                        <h3>Nom: {name}</h3>
                        <p>Capital: {capital} </p> 
                        <p>Region: {region}</p> 
                        <p>Monaie: {money}</p>
                    </div>
                </div>
            }
        </div>
    )
}
