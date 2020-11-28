import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";

function Protected() {
  const { auth, token } = useContext(AuthContext);
  useEffect(() => {
    try {
      auth();
    } catch (error) {
      console.log(error);
    }
  }, [auth, token]);
  return (
    <div>
      {token ? (
        <h1>You are in protected page</h1>
      ) : (
        <Redirect to="/unauthorized" />
      )}
    </div>
  );
}

export default Protected;
