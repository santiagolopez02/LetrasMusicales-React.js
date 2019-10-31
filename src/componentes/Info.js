import React from 'react';

const Info = ({info}) => {
    //prevee la visializacion en null

    if(Object.keys(info).length === 0){
        return null;
    }

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion del Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Imagen del artista"/>
                <p className="card-text">
                    Genero: {info.strGenre}
                </p>
                <h2 className="card-text text-center">Biogradia:</h2>
                <p className="card-text">{info.strBiographyES}</p>
                <p className="card-text">
                    <a href={`http://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`http://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${info.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}
 
export default Info;