import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/auth-provider";

function Userupdate() {
  const { userupdate } = useContext(AuthContext);
  const [state, setState] = useState({ email:"", name:"",type:""});
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const query = {
      email: state.email,
      query:{
          name: state.name,
          type: state.type,
        }
    };
    try {
      /*console.log("haber que onda");
      console.log(user.email);*/
      userupdate(query);
      } catch (error) {
        console.log(error);
      }
  };
  
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL:</label>
            <input type="email" name="email" onChange={handleChange} />
            <label htmlFor="name">New name:</label>
            <input type="name" name="name" onChange={handleChange} />
            <label htmlFor="type">type:</label>
            <input type="type" name="type" onChange={handleChange} />
            <button type="submit"> Actualizar</button>
        </form>
    </div>
    
  );
}

export default Userupdate;
