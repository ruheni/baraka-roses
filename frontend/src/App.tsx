import React from 'react';
import Signup from 'pages/SignUp/SignUp';
import LogIn from 'pages/LogIn/LogIn';
import ResetPass from 'pages/ResetPass/ResetPass';
import Orders from 'components/Orders/Orders';
import Customers from 'components/Customers/Customers';
import Agents from 'components/Agents/Agents';
import Products from 'components/Products/Products';
import Team from 'components/Team/Team';
import Dashboard from 'pages/Dashboard/Dashboard';
import NewProduct from 'pages/newProduct/newProduct';
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
      <Route path="/agents">
        <Agents/>
      </Route>
      <Route path="/products">
        <Products/>
      </Route>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/team">
        <Team/>
      </Route>
      <Route path="/new">
        <NewProduct/>
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
