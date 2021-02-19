import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../providers/auth-provider";
function Usersearch() {
  const { usersearch, user_Finded } = useContext(AuthContext);
  const [state, setState] = useState({ id:""});
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.id]: value });
  };
  const getuser = async (e) => {
    
    try {
      return 
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    /*const id = {
      id: state.id
    };*/
    try {
      console.log("haber que onda");
      console.log(state.id);
      usersearch(state.id);
      } catch (error) {
        console.log(error);
      }
      /*if (user_Finded.data===undefined){
        getuser()
        console.log(user_Finded.data);
        }
        console.log(JSON.stringify(user_Finded.data));*/
  };
  
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
              <label htmlFor="id">ID:</label>
              <input type="text" id="id" onChange={handleChange} />
              
            <button type="submit"> Buscar</button>
            </form>
    </div>
  );
}

export default Usersearch;
