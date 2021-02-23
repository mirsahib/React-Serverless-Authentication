import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/auth-provider";

function Authenticated() {
  const [state, setState] = useState({ actualUser: "" });
  const { logout, user } = useContext(AuthContext);
  const handleLogout = () => {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  if (state.actualUser === "") {
    setState({ actualUser: user });
  }


  return (
    <div>
      {console.log(state.actualUser)}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/protected">User Page</Link>
        </li>
        <li>
          <Link to="/userlist">Lista de usuarios</Link>
        </li>
        {
          state.actualUser.type === "Superadmin" &&
          <li>
            <Link to="/usersearch">Buscar Usuario</Link>
          </li>
        }
        {
          state.actualUser.type === "Superadmin" &&
          <li>
            <Link to="/userdelete">Eliminar Usuario</Link>
          </li>
        }
        {state.actualUser.type === "Superadmin" &&
          <li>
            <Link to="/userupdate">Actualizar Usuario</Link>
          </li>

        }
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
