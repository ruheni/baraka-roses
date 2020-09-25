import React from 'react';
import Signup from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import ResetPass from 'pages/ResetPass/ResetPass';
import Orders from 'pages/Orders/Orders';
import Customers from 'pages/Customers/Customers';
import Agents from 'pages/Agents/Agents';
import Products from 'pages/Products/Products';
import Team from 'pages/Team/Team';
import Dashboard from 'pages/Dashboard/Dashboard';
import NewProduct from 'pages/Products/ProductDetails';
import NewAgent from 'pages/Agents/AgentDetails';
import NewCustomer from 'pages/Customers/CustomerDetails'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://baraka-roses-backend.azurewebsites.net/graphql',
  cache: new InMemoryCache()
});


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
      <Route path="/orders">
        <Orders/>
      </Route>
      <Route path="/customers">
        <Customers/>
      </Route>
      <Route path="/newCustomer">
        <NewCustomer/>
      </Route>
      <Route path="/agents">
        <Agents/>
      </Route>
      <Route path="/newAgent">
        <NewAgent/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
      <Route path="/newProduct">
        <NewProduct/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/team">
        <Team/>
      </Route>
    </Switch>
  )
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
