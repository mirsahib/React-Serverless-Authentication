import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const localUserJson = localStorage.getItem("user");
  const localUser = localUserJson && JSON.parse(localUserJson);
  const [user, setUser] = useState(localUser);
  const [userList, setUserList] = useState({});
  const [token, setToken] = useState(false); // token state currently false
  const [serverError, setServerError] = useState("");

  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("user saved");
  };
  const saveUserList = (userList) => {
    setUserList(userList);
    localStorage.setItem("userList", JSON.stringify(userList));
    console.log("user list saved");
  };

  const deleteUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  // set token status
  const isTokenValid = (response) => {
    console.log("server response", response.auth);
    setToken(response.auth);
    console.log("context variable", token);
    //console.log("isvalidtoken", response.auth);
  };
  // handle error message
  const handleError = (response) => {
    setServerError(response);
    //console.log("response save", response);
  };
  const signup = (user) => {
    sendRequest("signup", user, saveUser, handleError);
  };
  const login = (user) => {
    sendRequest("login", user, saveUser, handleError);
  };
  const logout = () => {
    sendRequest("logout", undefined, deleteUser, handleError);
  };
  const auth = () => {
    sendRequest("auth", undefined, isTokenValid, handleError);
  };
  const userlist = () => {
    sendRequest("userlist", userList, saveUserList, handleError);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        userList,
        token,
        serverError,
        setServerError,
        signup,
        login,
        logout,
        auth,
        userlist,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

async function sendRequest(endpoint, body, successCallback, errorCallback) {
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
  } else {
    const responseBody = await response.json();
    errorCallback(responseBody);
  }
}

export default AuthProvider;
