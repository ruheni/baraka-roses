import React from 'react';
import Signup from 'pages/SignUp/SignUp';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';


const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
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
