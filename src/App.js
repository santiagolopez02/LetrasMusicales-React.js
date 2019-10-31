import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './componentes/Formulario'
import Cancion from './componentes/Cancion'
import Info from './componentes/Info'
import axios from 'axios'

function App() {
//state hook
  const [artista, guardaArtista] = useState('');
  const [letra, guardaLetra ] = useState([]);
  const [info, guardaInfo ] = useState({});

  const consultaApiLetra =async datos=>{
    const {artista, cancion} = datos;
    const url =`https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    //consulta la api
    const resultado = await axios (url);

    guardaArtista(artista);
    guardaLetra(resultado.data.lyrics);
    
  }

  const consultarApiInfo = async() =>{
   if (artista) {
    const urlI = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
    //consulta api
    const resultadoI = await axios(urlI);

    guardaInfo(resultadoI.data.artists[0]);
   }
  }


  useEffect(
    ()=>{
      consultarApiInfo();
      console.log(info);
    },[artista]
  )

  return (
    <Fragment>
      <Formulario
        consultaApiLetra={consultaApiLetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion
              cancion = "Letra de Canción"
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
