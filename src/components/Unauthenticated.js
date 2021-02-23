import React from "react";
import { Link } from "react-router-dom";

function Unauthenticated() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/userlist">Lista de usuarios</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/usersearch">Buscar Usuario</Link>
        </li>
        <li>
          <Link to="/userdelete">Eliminar Usuario</Link>
        </li>
        <li>
          <Link to="/userupdate">Actualizar Usuario</Link>
        </li>
      </ul>
    </div>
  );
}

export default Unauthenticated;
