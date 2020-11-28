import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";
import Protected from "./components/pages/Protected";
import AuthProvider from "./providers/auth-provider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/protected" component={Protected} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
