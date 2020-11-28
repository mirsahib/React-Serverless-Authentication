import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";
function Login() {
  const { login, user } = useContext(AuthContext);
  const [state, setState] = useState({ email: "", password: "" });
  const [errMsg, setErrMsg] = useState("");
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  const validate = () => {
    let status = true;
    if (!state.email && !state.password) {
      status = false;
      setErrMsg("Field Missing");
    } else {
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
      if (!pattern.test(String(state.email).toLowerCase())) {
        status = false;
        setErrMsg("Invalid email");
      }
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
      login(user);
      setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h3>Login Page</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="email"
              value={state.email || ""}
              type="text"
              placeholder="email..."
              onChange={handleChange}
            />
            <input
              name="password"
              value={state.password || ""}
              type="password"
              onChange={handleChange}
            />
            <input type="submit" />
          </form>
          {errMsg ? <h6>{errMsg}</h6> : ""}
        </div>
      )}
    </>
  );
}

export default Login;
