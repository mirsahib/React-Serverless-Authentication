import React, { createContext, useState } from "react";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const localUserJson = localStorage.getItem("user");
  const localUser = localUserJson && JSON.parse(localUserJson);
  const localAnalisisJson = localStorage.getItem("analisis");
  const localAnalisis = localAnalisisJson && JSON.parse(localAnalisisJson);
  const [user, setUser] = useState(localUser);
  const [user_List, setUserList] = useState({});
  const [token, setToken] = useState(false); // token state currently false
  const [serverError, setServerError] = useState("");
  //CRUD Users table
  const [user_Updated, setUser_Updated] = useState({});
  const [analisis, setAnalisis] = useState(localAnalisis);
  const [user_Finded, setUser_Finded] = useState({});
  const [user_Delete, setUser_Delete] = useState({});
  
  const saveUser = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("user saved");
  };
  const saveAnalisis = (analisis) => {
    setAnalisis(analisis);
    localStorage.setItem("analisis", JSON.stringify(analisis));
    console.log("analisis saved");
  };
  const saveUserList = (user_List) => {
    setUserList(user_List);
    localStorage.setItem("userList", JSON.stringify(user_List));
    console.log("user list saved");
  };
  const saveUserFinded = (user_Finded) => {
    setUser_Finded(user_Finded);
    localStorage.setItem("user_Finded", JSON.stringify(user_Finded));
    console.log("user finded");
  };
  const saveUserUpdated = (user_Finded) => {
    setUser_Updated(user_Updated);
    localStorage.setItem("user_Updated", JSON.stringify(user_Finded));
    console.log("user updated");
  };
  const saveUserDelete = (user_Delete) => {
    setUser_Delete(user_Delete);
    localStorage.setItem("user_Delete", JSON.stringify(user_Delete));
    console.log("user saved for delet");
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
  const analisissaved = (analisis) => {
    sendRequest("analisissaved", analisis, saveAnalisis, handleError);
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
    sendRequest("userlist", user_List, saveUserList, handleError);
  };
  const usersearch = (user_Finded) => {
    sendRequest("usersearch", user_Finded, saveUserFinded, handleError);
  };
  const userupdate = (user_Updated) => {
    sendRequest("userupdate", user_Updated, saveUserUpdated, handleError);
  };
  const userdelete = (user_Delete) => {
    sendRequest("userdelete", user_Delete, saveUserDelete, handleError);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        serverError,
        setServerError,
        signup,
        login,
        logout,
        auth,
        analisissaved,
        analisis,
        userdelete,
        user_Delete,
        userlist,
        user_List,
        usersearch,
        user_Finded,
        userupdate,
        user_Updated
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
