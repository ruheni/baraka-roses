import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Auth0Provider } from "@auth0/auth0-react";
import Agentdetails from 'pages/Agents/AgentDetails';
import Agents from 'pages/Agents/Agents';
import Customerdetails from 'pages/Customers/CustomerDetails';
import Customers from 'pages/Customers/Customers';
import LogIn from 'pages/LogIn/LogIn';
import Orderdetails from 'pages/Orders/OrderDetails';
import Orders from 'pages/Orders/Orders';
import Productdetails from 'pages/Products/ProductDetails';
import Products from 'pages/Products/Products';
import ResetPass from 'pages/ResetPass/ResetPass';
import Signup from 'pages/SignUp/SignUp';
import Team from 'pages/Team/Team';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache()
});


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
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
      <Route exact path="/orders">
        <Orders/>
      </Route>
      <Route path="/orders/:id">
        <Orderdetails/>
      </Route>
      <Route exact path="/orders/new">
        <Orderdetails/>
      </Route>
      <Route exact path="/customers">
        <Customers/>
      </Route>
      <Route path="/customers/:id">
        <Customerdetails/>
      </Route>
      <Route exact path="/customers/new">
        <Customerdetails/>
      </Route>
      <Route exact path="/agents">
        <Agents/>
      </Route>
      <Route exact path="/agents/:id">
        <Agentdetails/>
      </Route>
      <Route exact path="/agents/new">
        <Agentdetails/>
      </Route>
      <Route exact path="/products">
        <Products/>
      </Route>
      <Route exact path="/products/:id">
        <Productdetails/>
      </Route>
      <Route path="/products/new">
        <Productdetails/>
      </Route>
      <Route path="/team">
        <Team/>
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <Auth0Provider
    domain={`${process.env.REACT_APP_DOMAIN}`}
    clientId={`${process.env.REACT_APP_CLIENTID}`}
    redirectUri={window.location.origin}
    >
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;
