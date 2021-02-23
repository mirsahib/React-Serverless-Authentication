import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/auth-provider";

function Authenticated() {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/protected">User Page</Link>
        </li>
        
        <li>
          <Link to="/userdelete">Eliminar Usuario</Link>
        </li>
        <li>
          <Link onClick={handleLogout} to="/">
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Authenticated;
