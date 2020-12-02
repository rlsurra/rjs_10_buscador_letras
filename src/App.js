import React, {Fragment,useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';


function App() {

  const [busquedaActiva,setBusquedaActiva] = useState({});
  const [letra, setLetra] = useState('');

  useEffect(() => {

    const consultarApiLetra = async () => {
      if(Object.keys(busquedaActiva).length === 0) return; //la primera vez que carga
  
      const { artista, cancion } = busquedaActiva;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const respuesta = await fetch(url);
      const resultadoLetra = await respuesta.json();
      console.log(resultadoLetra.lyrics);
      setLetra(resultadoLetra.lyrics);
    }

    consultarApiLetra();

  }, [busquedaActiva]);

  return (
    <Fragment>
      <Formulario setBusquedaActiva={setBusquedaActiva}/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">

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
