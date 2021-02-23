import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";
import {Hematologia_hemograma} from "../analisis/Hematologia_hemograma";


function  AnalisisSave() {
  const { analisisSave, analisis, serverError, setServerError } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    tipo:"",
    res:{},
  });
  //const [errMsg, setErrMsg] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (state.tipo === "hematologia-hemograma"){
        //Llamar al componente
    }
    const analisis = {
      email: state.email,
      tipo: state.tipo,
      res: state.res,
    };

    try {
      analisisSave(analisis);
      //setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
    <p>
    { JSON.stringify(analisis.data)}
   </p> 
  };
  /*const validate = () => {
    let status = true;
    if (state.password !== state.retypePassword) {
      status = false;
      setErrMsg("Password don't match");
    }
    return status;
  };*/
 
  /*useEffect(() => {
    console.log("mounted");
    return () => {
      // when component unmount refresh serverError
      if (serverError) {
        setServerError("");
      }
    };
  }, [serverError, setServerError]);*/

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
                              <h5 className=" mb-1">Tipo Analisis</h5>
                              <input
                                className="form-control py-4"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Ingresar el analisis"
                                name="tipo"
                                value={state.tipo || ""}
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

export default AnalisisSave;
