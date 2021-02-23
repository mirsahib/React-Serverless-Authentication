import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";



function SignUp() {
  const { signup, user, serverError, setServerError } = useContext(AuthContext);
  const [state, setState] = useState({
    email: "",
    password: "",
    retypePassword: "",
    usuario: "",
    telefono: "",
    direccion: "",
    matricula: "",
  });
  const [errMsg, setErrMsg] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const validate = () => {
    let status = true;
    if (state.password !== state.retypePassword) {
      status = false;
      setErrMsg("Password don't match");
    }
    return status;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    const user = {
      email: state.email,
      password: state.password,
    };
    try {
      signup(user);
      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("mounted");
    return () => {
      // when component unmount refresh serverError
      if (serverError) {
        setServerError("");
      }
    };
  }, [serverError, setServerError]);

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
                            Registrarse
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
                              <h5 className=" mb-1">Nombre</h5>
                              <input
                                className="form-control py-4"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Ingresar Usuario"
                                name="email"
                                value={state.usuario || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-group text-left">
                              <h5 className=" mb-1">Telefono</h5>
                              <input
                                className="form-control py-4"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Ingresar telefono"
                                name="email"
                                value={state.telefono || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-group text-left">
                              <h5 className=" mb-1">Direccion</h5>
                              <input
                                className="form-control py-4"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Ingresar dirección"
                                name="email"
                                value={state.direccion || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-group text-left">
                              <h5 className=" mb-1">Nro Matricula</h5>

                              <input
                                className="form-control py-4"
                                id="inputEmailAddress"
                                type="email"
                                placeholder="Ingrese su matricula "
                                name="email"
                                value={state.matricula || ""}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-group text-left">
                              <h5 className=" mb-1">Password</h5>
                              <input
                                className="form-control py-4"
                                id="inputPassword"
                                placeholder="Ingrese Contraseña"
                                name="password"
                                value={state.password || ""}
                                type="password"
                                onChange={handleChange}
                                required
                              />
                            </div>
                            <div className="form-group text-left">
                              <h5 className=" mb-1">Retype Password</h5>
                              <input
                                className={
                                  "form-control py-4 " +
                                  (errMsg ? "border-danger" : "")
                                }
                                id="inputPassword"
                                placeholder="repita la contraseña"
                                name="retypePassword"
                                value={state.retypePassword || ""}
                                type="password"
                                onChange={handleChange}
                                required
                              />
                              {errMsg ? (
                                <label className="small mb-1 ">{errMsg}</label>
                              ) : (
                                  ""
                                )}
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

export default SignUp;
