import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";
function Usersearch() {
  const { userfind, user_Finded } = useContext(AuthContext);
  const [state, setState] = useState({ email:""});
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const query = {
      email: state.email
    };
    try {
      console.log("------");
      console.log(query);
      console.log("------");
      userfind(query);
      } catch (error) {
        console.log(error);
      }
     
  };
  
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
              <label htmlFor="email">EMAIL:</label>
              <input type="email" name="email" onChange={handleChange} />
              
            <button type="submit"> Buscar</button>
            </form>
            <p>
             { JSON.stringify(user_Finded.data)}
            </p>
    </div>
    
  );
}

export default Usersearch;
