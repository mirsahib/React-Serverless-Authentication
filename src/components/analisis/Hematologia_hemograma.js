
function Hematologia_hemograma() {
    //const { signup, user, serverError, setServerError } = useContext(AuthContext);
    const [state, setState] = useState({
      nro_Protocolo: "",
      fecha: "",
      prof_actuante: "",
      propietario: "",
      paciente: "",
      especie: "",
      raza: "",
      sexo:"",
      edad:"",
      fecha_toma_muestra:"",
      material_remitido:"",
      eritocitros:"",
      hemoglobina:"",
      hematocrito:"",
      vcm:"",
      hcm:"",
      chcm:"",
      reticulocitos:"",
      pplasmaticas:"",
      fibrinogeno:"",
      relp_ppFibr:"",
      plaquetas:"",
      leucocitos:"",
      mieloblastos:"",
      promielocitos:"",
      mielocitos:"",
      metamielocitos:"",
      n_baciliformes:"",
      n_segmentados:"",
      linfocitos:"",
      monocitos:"",
      eosinofilos:"",
      basofilos:"",
    });
    const handleChange = (e) => {
      let value = e.target.value;
      setState({ ...state, [e.target.name]: value });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const analisis = {
        nro_Protocolo: state.nro_Protocolo,
        fecha: state.fecha,
        prof_actuante: state.prof_actuante,
        propietario: state.propietario,
        paciente: state.paciente,
        especie: state.especie,
        raza: state.raza,
        sexo: state.sexo,
        edad:state.edad,
        fecha_toma_muestra: state.fecha_toma_muestra,
        material_remitido: state.material_remitido,
        eritocitros: state.eritocitros,
        hemoglobina: state.hemoglobina,
        hematocrito: state.hematocrito,
        vcm: state.vcm,
        hcm: state.hcm,
        chcm: state.chcm,
        reticulocitos: state.reticulocitos,
        pplasmaticas: state.pplasmaticas,
        fibrinogeno: state.fibrinogeno,
        relp_ppFibr: state.relp_ppFibr,
        plaquetas: state.plaquetas,
        leucocitos: state.leucocitos,
        mieloblastos: state.mieloblastos,
        promielocitos: state.promielocitos,
        mielocitos: state.mielocitos,
        metamielocitos: state.metamielocitos,
        n_baciliformes: state.n_baciliformes,
        n_segmentados: state.n_segmentados,
        linfocitos: state.linfocitos,
        monocitos: state.monocitos,
        eosinofilos: state.eosinofilos,
        basofilos:state.basofilos,
      };
      try {
       return  JSON.stringify(analisis)
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <>
        {user ? (
          <Redirect to="/" />
        ) : (
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
                              Carga de Resultados de Analisis Hematologia/hemograma
                          </h3>
                          </div>
                          <div className="card-body">
                            <form onSubmit={handleSubmit}>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Protocolo N</h5>
  
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
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
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Eritrocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Eritrocitos"
                                  name="eritrocitos"
                                  value={state.eritrocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Hemoglobina</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Hemoglobina"
                                  name="hemoglobina"
                                  value={state.hemoglobina || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Hematocrito</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Hematocrito"
                                  name="hematocrito"
                                  value={state.hematocrito || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">V.C.M.</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de V.C.M."
                                  name="vcm"
                                  value={state.vcm || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">H.C.M.</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de H.C.M."
                                  name="hcm"
                                  value={state.hcn || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">C.H.C.M.</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de C.H.C.M."
                                  name="chcm"
                                  value={state.chcm || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Reticulocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Reticulocitos"
                                  name="reticulocitos"
                                  value={state.reticulocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">P. plasmáticas</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de P. plasmáticas"
                                  name="pplasmaticas"
                                  value={state.pplasmaticas || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Fibrinógeno</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Fibrinógeno"
                                  name="fibrinogeno"
                                  value={state.fibrinogeno || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">*Rel. Pp/ Fibr.</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Rel. Pp/ Fibr."
                                  name="relp_ppFibr"
                                  value={state.relp_ppFibr || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Plaquetas</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Plaquetas"
                                  name="plaquetas"
                                  value={state.plaquetas || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Leucocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Leucocitos"
                                  name="leucocitos"
                                  value={state.leucocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Mieloblastos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Mieloblastos"
                                  name="mieloblastos"
                                  value={state.mieloblastos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Promielocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Promielocitos"
                                  name="promielocitos"
                                  value={state.promielocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Mielocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Mielocitos"
                                  name="mielocitos"
                                  value={state.mielocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Metamielocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Metamielocitos"
                                  name="metamielocitos"
                                  value={state.metamielocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">N. Baciliformes</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de N. Baciliformes"
                                  name="n_baciliformes"
                                  value={state.n_baciliformes || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">N. Segmentados</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de N. Segmentados"
                                  name="n_segmentados"
                                  value={state.n_segmentados || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Linfocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Linfocitos"
                                  name="linfocitos"
                                  value={state.linfocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Monocitos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Monocitos"
                                  name="monocitos"
                                  value={state.monocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Eosinófilos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Eosinófilos"
                                  name="eosinofilos"
                                  value={state.monocitos || ""}
                                  type="email"
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="form-group text-left">
                                <h5 className=" mb-1">Basófilos</h5>
                                <input
                                  className="form-control py-4"
                                  id="inputEmailAddress"
                                  placeholder="Ingrese Resultado de Basófilos"
                                  name="basofilos"
                                  value={state.basofilos || ""}
                                  type="email"
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
          )}
      </>
    );
  }
  
  