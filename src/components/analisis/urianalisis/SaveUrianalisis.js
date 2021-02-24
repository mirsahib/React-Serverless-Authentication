import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../providers/auth-provider";

function SaveUrianalisis() {
  const { analisisSave, serverError } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    tipo: "",
    nro_Protocolo: "",
    fecha: "",
    prof_actuante: "",
    propietario: "",
    paciente: "",
    especie: "",
    raza: "",
    sexo: "",
    edad: "",
    fecha_toma_muestra: "",
    material_remitido: "",
    Analisis_solicitado: "",
    Metodo_recoleccion: "Puncion Vesical",
    //Examen Fisico-Quimico
    color:"",
    aspecto:"",
    densidad:"",
    ph:"",
    sedimento:"",
    proteinas:"",
    cuerpos_cetonicos:"",
    pigmentos_biliares:"",
    glucosa:"",
    urobilinogeno:"",
    sangre_oculta:"",
    nitritos:"",
    leucocitos:"",
    //Examen del sedimento
    leucocitos2:"",
    piocitos:"",
    eritrocitos:"",
    cristales:"",
    cilindros:"",
    microorganismos:"",
    cel_transicion:"",
    cel_escamosa:"",
  });
  
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const analisis = {
      email: state.email,
      tipo: "orina-urianalisis",
      flag: false,
      myid: state.email + Date.now(),
      res: {
        nro_Protocolo: state.nro_Protocolo,
        fecha: state.fecha,
        prof_actuante: state.prof_actuante,
        propietario: state.propietario,
        paciente: state.paciente,
        especie: state.especie,
        raza: state.raza,
        sexo: state.sexo,
        edad: state.edad,
        fecha_toma_muestra: state.fecha_toma_muestra,
        material_remitido: state.material_remitido,
        Analisis_solicitado: "",
        Metodo_recoleccion: state.Metodo_recoleccion,
        color:state.color,
        aspecto:state.aspecto,
        densidad:state.densidad,
        ph:state.ph,
        sedimento: state.sedimento,
        proteinas: state.proteinas,
        cuerpos_cetonicos: state.cuerpos_cetonicos,
        pigmentos_biliares: state.pigmentos_biliares,
        glucosa: state.glucosa,
        urobilinogeno: state.urobilinogeno,
        sangre_oculta: state.sangre_oculta,
        nitritos: state.nitritos,
        leucocitos: state.leucocitos,
        piocitos: state.piocitos,
        eritrocitos: state.eritrocitos,
        cristales: state.cristales,
        cilindros: state,
        microorganismos: state.microorganismos,
        cel_transicion:state.cel_transicion,
        cel_escamosa: state.cel_escamosa,
      },
    };

    try {
        console.log("por entrar a guardar analisis");
      analisisSave(analisis);
    } catch (error) {
      console.log(error);
    }
    /*<p>
      {JSON.stringify(analisis.data)}
    </p>*/
  };


  return (

    <div id="layoutAuthentication">
      <div id="layoutAuthentication_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
                {serverError ? (
                  <div className="alert alert-danger" role="alert">
                    {serverError.msg}
                  </div>
                ) : (
                    ""
                  )}

                <div className="card shadow-lg border-0 rounded-lg mt-5">
                  <div className="card-header">
                    <h3 className="text-center font-weight-light my-4">
                      Registrar Analisis
                        </h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Email</h5>

                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="email"
                          placeholder="Ingresar Email"
                          name="email"
                          value={state.email || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Protocolo N</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="number"
                          placeholder="Ingresar nro Protocolo"
                          name="nro_Protocolo"
                          value={state.nro_Protocolo || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group text-left">
                        <h5 className=" mb-1">Fecha</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="fecha"
                          placeholder="Ingresar Usuario"
                          name="fecha"
                          value={state.fecha || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Profesional actuante</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="string"
                          placeholder="Ingresar profesional actuante"
                          name="prof_actuante"
                          value={state.prof_actuante || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Propietario</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="string"
                          placeholder="Ingresar propietario"
                          name="propietario"
                          value={state.propietario || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Paciente</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          type="string"
                          placeholder="Ingrese el paciente "
                          name="paciente"
                          value={state.paciente || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Especie</h5>
                        <input
                          className="form-control py-4"
                          id="inputPassword"
                          placeholder="Ingrese su especie"
                          name="especie"
                          value={state.especie || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Raza</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Raza"
                          name="raza"
                          value={state.raza || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Sexo</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese sexo"
                          name="sexo"
                          value={state.sexo || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Edad</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Edad"
                          name="edad"
                          value={state.edad || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Fecha de toma de Muestra</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Fecha"
                          name="fecha_toma_muestra"
                          value={state.fecha_toma_muestra || ""}
                          type="fecha"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Material Remitido</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Material Remitido"
                          name="material_remitido"
                          value={state.material_remitido || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <h4 className="text-center font-weight-light my-4">
                      EXAMEN FISICO-QUÍMICO				
                        </h4>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Color</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Color"
                          name="color"
                          value={state.color || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Aspecto</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese aspecto"
                          name="aspecto"
                          value={state.aspecto || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Densidad</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese densidad"
                          name="densidad"
                          value={state.densidad || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">pH</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese pH"
                          name="ph"
                          value={state.ph || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Sedimento</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese sedimento"
                          name="sedimento"
                          value={state.sedimento || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Proteínas</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Proteinas"
                          name="proteinas"
                          value={state.proteinas || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Cuerpos Cetonicos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese cuerpos Cetonicos"
                          name="cuerpos_cetonicos"
                          value={state.cuerpos_cetonicos || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Pigmentos Biliares</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Picmentos Biliares"
                          name="pigmentos_biliares"
                          value={state.pigmentos_biliares || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Glucosa</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Glucosa"
                          name="glucosa"
                          value={state.glucosa || ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Urobilinógeno</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Urobilinógeno"
                          name="urobilinogeno"
                          value={state.urobilinogeno|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Sangre oculta</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Sangre oculta"
                          name="sangre_oculta"
                          value={state.sangre_oculta|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Nitritos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Nitritos"
                          name="nitritos"
                          value={state.nitritos|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Leucocitos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Leucocitos"
                          name="leucocitos"
                          value={state.leucocitos|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                     </div>
                     <h4 className="text-center font-weight-light my-4">
                     		EXAMEN DEL SEDIMENTO				
                        </h4>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Leucocitos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Leucocitos"
                          name="leucocitos2"
                          value={state.leucocitos2|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Piocitos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Piocitos"
                          name="piocitos"
                          value={state.piocitos|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Eritrocitos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Eritrocitos"
                          name="eritrocitos"
                          value={state.eritrocitos|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Cristales</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Cristales "
                          name="cristales"
                          value={state.cristales|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Cilindros</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Cilindros"
                          name="cilindros"
                          value={state.cilindros|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Microorganismos</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Microorganismos"
                          name="microorganismos"
                          value={state.microorganismos|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Cel. Transición</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Cel. Transición"
                          name="cel_transicion"
                          value={state.cel_transicion|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div> 
                      <div className="form-group text-left">
                        <h5 className=" mb-1">Cel. Escamosas</h5>
                        <input
                          className="form-control py-4"
                          id="inputEmailAddress"
                          placeholder="Ingrese Cel. Escamosas"
                          name="cel_escamosa"
                          value={state.cel_escamosa|| ""}
                          type="string"
                          onChange={handleChange}
                          required
                        />
                      </div>   
                      
                      <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                        <input className="btn btn-success" type="submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SaveUrianalisis;
