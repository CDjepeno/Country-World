import React from 'react';

type Props = {
    text: any
    handle?: any
    region?: boolean
    currentPage?: boolean
    clic?: any
}

export const Button: React.FC<Props> = ( { text, clic, region, currentPage } ) => {
    return (<>
        {region || currentPage ?
            <button className="btn btn-info my-3" onClick={clic}>{text}</button>
            : 
            <button className="btn btn-info my-3" style={{opacity:0.7}} onClick={clic}>{text}</button>
        }
    </>)
}