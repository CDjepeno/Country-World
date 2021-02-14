import React from 'react';

type Props = {
    text: string
    handle: any
    region: boolean
}

export const Button: React.FC<Props> = ( { text, handle, region, } ) => {
    return (<>
        {region ?
            <button className="btn btn-info" onClick={handle}>{text}</button>
            : 
            <button className="btn btn-info opacity-5" style={{opacity:0.7}} onClick={handle}>{text}</button>
        }
    </>)
}