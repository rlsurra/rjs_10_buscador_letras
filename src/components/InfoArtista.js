import React from 'react';

const InfoArtista = ({infoArtista}) => {

    if(Object.keys(infoArtista).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES } = infoArtista;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía</h2>
                <p className="card-text">{strBiographyES}</p>
                <a href={`https://${infoArtista.strFacebook}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href={`https://${infoArtista.strTwitter}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href={`${infoArtista.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-lastfm"></i>
                </a>
            </div>
        </div>
     );
}
 export default InfoArtista;