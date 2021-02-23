import React, { useContext } from "react";
import Authenticated from "./Authenticated";
import Unauthenticated from "./Unauthenticated";
import { AuthContext } from "../providers/auth-provider";

function Navbar() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <>{user ? <Authenticated /> : <Unauthenticated />}</>;
}

export default Navbar;
