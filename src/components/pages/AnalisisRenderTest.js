import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/auth-provider";
function AnalisisRenderTest() {
  const { analisisFind, analisis_Finded } = useContext(AuthContext);
  const [state, setState] = useState({ myid:""});
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const query = {
      myid: state.myid
    };
    try {
      console.log("------");
      console.log(query);
      console.log("------");
      analisisFind(query);
      } catch (error) {
        console.log(error);
      }
     
  };
  
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
              <label htmlFor="email">EMAIL:</label>
              <input  name="myid" onChange={handleChange} />
              
            <button type="submit"> Buscar</button>
            </form>
            <p>
             { JSON.stringify(analisis_Finded.data)}
            </p> 
    </div>
    
  );
}

export default AnalisisRenderTest;
