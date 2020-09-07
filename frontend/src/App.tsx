import React from 'react';
import Signup from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import ResetPass from 'pages/ResetPass/ResetPass';
import MainView from 'pages/MainView/MainView'
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
      <Route exact path="/home">
        <MainView />
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
