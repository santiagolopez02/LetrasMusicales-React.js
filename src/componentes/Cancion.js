import React from 'react';

const Cancion = ({letra, cancion}) => {
    
//conidicion para prevenir el h2
    if (letra.length ===0) {
        return null;
    }
    return ( 
        <div className="letra">
            <h2>{cancion}</h2>
            <p>{letra}</p>
        </div>
     );
}
 
export default Cancion;