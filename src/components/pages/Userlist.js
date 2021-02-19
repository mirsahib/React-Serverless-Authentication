import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";

function Userlist() {
  
  let { userlist,user_List , serverError, setServerError } = useContext(AuthContext);
  
  let list = [];
  const getusers = async () => {
    try {
      return userlist();
    } catch (error) {
      console.log(error);
    }
  };
  if (user_List.data===undefined){
  getusers()
  console.log(user_List.data);
  }
  console.log(JSON.stringify(user_List.data));
  return (
    <p>
      { JSON.stringify(user_List.data)}
    </p>
  );
}

export default Userlist;
