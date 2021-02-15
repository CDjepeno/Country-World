import React from 'react'


export interface PageNotFoundProps {
    
}
 
const PageNotFound: React.FC<PageNotFoundProps> = () => {
    return ( 
        <div className="alert alert-danger mt-5 text-center">
            <h1>Votre page n'héxiste pas !!!</h1>
        </div>
     );
}
 
export default PageNotFound;