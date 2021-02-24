import React, { useContext, useState} from "react";
import { AuthContext } from "../../providers/auth-provider";

function Userdelete() {
  const { userdelete} = useContext(AuthContext);
  const [state, setState] = useState({ email:""});
  const handleChange = (e) => {
    let value = e.target.value;
    setState({ ...state, [e.target.name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const user = {
      email: state.email
    };
    try {
      console.log(user.email);
      userdelete(user.email);
      } catch (error) {
        console.log(error);
      }
  };
  
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">EMAIL:</label>
            <input type="email" name="email" onChange={handleChange} />
            <button type="submit"> Remover</button>
            
        </form>
    </div>
    
  );
}

export default Userdelete;
