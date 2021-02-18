import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";

function Userlist() {
  
  let { userlist,userList , serverError, setServerError } = useContext(AuthContext);
  
  let list = [];
  const getusers = async () => {
    try {
      return userlist();
    } catch (error) {
      console.log(error);
    }
  };
  if (userList.data===undefined){
  getusers()
  console.log(userList.data);
  }
  console.log(JSON.stringify(userList.data));
  return (
    <p>
      { JSON.stringify(userList.data)}
    </p>
  );
}

export default Userlist;
