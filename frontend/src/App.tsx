import React from 'react';
import Signup from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import ResetPass from 'pages/ResetPass/ResetPass';
import SideBar from 'components/SideBar';
import Orders from 'components/Orders';
import Customers from 'components/Customers';
import Agents from 'components/Agents';
import Products from 'components/Products'
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
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/reset">
        <ResetPass />
      </Route>
      <Route path="/home">
        <SideBar/>
      </Route>
      <Route path="/orders">
        <Orders/>
      </Route>
      <Route path="/customers">
        <Customers/>
      </Route>
      <Route path="/agents">
        <Agents/>
      </Route>
      <Route path="/products">
        <Products/>
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
