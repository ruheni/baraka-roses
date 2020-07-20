import React from 'react';
import Signup from 'components/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';


const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        <Signup />
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