import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";
import AuthProvider from "./providers/auth-provider";
import Unauthorized from "./components/pages/Unauthorized";
import Userlist from "./components/pages/Userlist"
import Usersearch from "./components/pages/Usersearch"
import Userdelete from "./components/pages/Userdelete"
import Navbar from "./components/Navbar";
import Userupdate from "./components/pages/Userupdate"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route  path="/userlist" component={Userlist}/>
            <Route  path="/usersearch" component={Usersearch}/>
            <Route  path="/userdelete" component={Userdelete}/>
            <Route  path="/signup" component={SignUp} />
            <Route  path="/login" component={Login} />
            <Route  path="/protected" component={Protected} />
            <Route  path="/unauthorized" component={Unauthorized} />
            <Route  path="/userupdate" component={Userupdate} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
