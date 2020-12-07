import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";
function Login() {
  const { login, user, serverError, setServerError } = useContext(AuthContext);
  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: state.email,
      password: state.password,
    };
    try {
      login(user);
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
                      <div
                        className="alert alert-danger alert-dismissible fade show"
                        role="alert"
                      >
                        {serverError.msg}
                        <button
                          type="button"
                          className="close"
                          data-dismiss="alert"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    ) : (
                      ""
                    )}

                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                      <div className="card-header">
                        <h3 className="text-center font-weight-light my-4">
                          LOGIN
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
                              placeholder="Enter email or username"
                              name="email"
                              value={state.email || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group text-left">
                            <h5 className=" mb-1">Password</h5>

                            <input
                              className="form-control py-4"
                              id="inputPassword"
                              placeholder="Enter password"
                              name="password"
                              value={state.password || ""}
                              type="password"
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="form-group d-flex align-items-center  justify-content-between mt-4 mb-0">
                            <button className="btn btn-success" type="submit">
                              Login
                            </button>
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

export default Login;
