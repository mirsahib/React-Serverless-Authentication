import React from "react";
import { Link } from "react-router-dom";

function Authenticated() {
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
          <Link to="/logout">Log Out</Link>
        </li>
      </ul>
    </div>
  );
}

export default Authenticated;
