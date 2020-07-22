import React from 'react';
import Signup from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import ResetPass from 'pages/ResetPass/ResetPass';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <LogIn />
      </Route>
      <Route exact path="/reset">
        <ResetPass />
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
