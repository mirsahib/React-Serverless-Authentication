import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";
import AuthProvider from "./providers/auth-provider";
import Unauthorized from "./components/pages/Unauthorized";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/protected" component={Protected} />
            <Route path="/unauthorized" component={Unauthorized} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
