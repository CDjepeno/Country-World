import React from 'react';

type Props = {
    text: string
}

export const Title: React.FC<Props> = ( { text } ) => {
    return (<>
        <h1 className="border border-dark p-2 mt-2 text-white text-center bg-primary rounded">{text}</h1>
    </>)
}