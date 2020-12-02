import React, {Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import InfoArtista from './components/InfoArtista';
import axios from 'axios';


function App() {

  const [busquedaActiva,setBusquedaActiva] = useState({});
  const [letra, setLetra] = useState('');
  const [infoArtista, setInfoArtista] = useState('');

  useEffect(() => {

    const consultarApis = async () => {
      if(Object.keys(busquedaActiva).length === 0) return; //la primera vez que carga
  
      const { artista, cancion } = busquedaActiva;
      const urlApiLetra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const urlApiArtista = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      //Ejecución paralela de las APIs
      const [letraRespuesta, informacionRespueta] = await Promise.all([
        axios(urlApiLetra),
        axios(urlApiArtista)
      ]);

      setLetra(letraRespuesta.data.lyrics);
      setInfoArtista(informacionRespueta.data.artists[0]);
    }

    consultarApis();

  }, [busquedaActiva]);

  return (
    <Fragment>
      <Formulario setBusquedaActiva={setBusquedaActiva}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <InfoArtista infoArtista={infoArtista}/>
          </div>
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
