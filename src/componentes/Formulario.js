import React, {useState} from 'react';

const Formulario = ({consultaApiLetra}) => {

    //state hook
   const [consulta, guardaConsulta] = useState({
       artista: '',
       cancion:''
   });

   const actualizaState = e =>{
       guardaConsulta({
           ...consulta,
           [e.target.name] : e.target.value
       });
   }

   const enviaForm =e=>{
    e.preventDefault();
    consultaApiLetra(consulta)
   }



    return ( 
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form
                    onSubmit={enviaForm}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        required
                                        onChange={actualizaState}
                                        
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        required
                                        onChange={actualizaState}
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>

     );
}
 
export default Formulario;