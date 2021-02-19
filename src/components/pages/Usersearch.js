import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";
function Usersearch() {
  const { usersearch, user_Finded } = useContext(AuthContext);
  const [state, setState] = useState({ email:""});
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  /*const getuser = async (e) => {
    
    try {
      return 
    } catch (error) {
      console.log(error);
    }
  };*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      email: state.email
    };
    try {
      console.log("haber que onda");
      console.log(user.email);
      usersearch(user.email);
      } catch (error) {
        console.log(error);
      }
      /*if (user_Finded.data===undefined){
        usersearch(user.email);
        console.log(user_Finded.data);
        }
        console.log(JSON.stringify(user_Finded.data));*/
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
