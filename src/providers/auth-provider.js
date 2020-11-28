import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const localUserJson = localStorage.getItem("user");
  const localUser = localUserJson && JSON.parse(localUserJson);
  const [user, setUser] = useState(localUser);
  const [token, setToken] = useState(false); // token state currently false

  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("user saved");
  };

  const deleteUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  // set token status
  const isTokenValid = (response) => {
    setToken(response.auth);
    console.log("isvalidtoken", response.auth);
  };

  const signup = (user) => {
    sendRequest("signup", user, saveUser);
  };
  const login = (user) => {
    sendRequest("login", user, saveUser);
  };
  const logout = () => {
    sendRequest("logout", undefined, deleteUser);
  };
  const auth = () => {
    sendRequest("auth", undefined, isTokenValid);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout, auth, token }}>
      {props.children}
    </AuthContext.Provider>
  );
};

async function sendRequest(endpoint, body, successCallback) {
  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
  };

  if (body) {
    requestOptions.headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(body);
  }

  const response = await fetch(
    `/.netlify/functions/${endpoint}`,
    requestOptions
  );

  if (response.ok) {
    const responseBody = await response.json();
    successCallback(responseBody);
  }
}

export default AuthProvider;
