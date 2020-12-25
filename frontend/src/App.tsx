import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Auth0Provider } from "@auth0/auth0-react";
import Agentedit from 'pages/Agents/AgentEdit'
import Agentdetails from 'pages/Agents/AgentDetails';
import Agents from 'pages/Agents/Agents';
import Customeredit from 'pages/Customers/CustomerEdit'
import Customerdetails from 'pages/Customers/CustomerDetails';
import Customers from 'pages/Customers/Customers';
import LogIn from 'pages/LogIn/LogIn';
import Orderedit from 'pages/Orders/OrderEdit'
import Orderdetails from 'pages/Orders/OrderDetails';
import Orders from 'pages/Orders/Orders';
import Productedit from 'pages/Products/ProductEdit'
import Productdetails from 'pages/Products/ProductDetails';
import Products from 'pages/Products/Products';
import Signup from 'pages/SignUp/SignUp';
import Team from 'pages/Team/Team';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from 'util/PrivateRoute'
import PageNotFound from 'pages/PageNotFound/PageNotFound';

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache()
});


const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={LogIn} />
      <PrivateRoute exact path="/orders" comp={Orders} />
      <PrivateRoute path="/orders/:id" comp={Orderedit} />
      <PrivateRoute exact path="/orders/new" comp={Orderdetails} />
      <PrivateRoute exact path="/customers" comp={Customers} />
      <PrivateRoute path="/customers/:id" comp={Customeredit} />
      <PrivateRoute exact path="/customers/new" comp={Customerdetails} />
      <PrivateRoute exact path="/agents" comp={Agents} />
      <PrivateRoute exact path="/agents/:id" comp={Agentedit} />
      <PrivateRoute exact path="/agents/new" comp={Agentdetails} />
      <PrivateRoute exact path="/products" comp={Products} />
      <PrivateRoute exact path="/products/:id" comp={Productedit} />
      <PrivateRoute path="/products/new" comp={Productdetails} />
      <Route path="/team" component={Team} />
      <PrivateRoute path="/" exact component={Products} />
      <Route path="*" component={PageNotFound} />
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
          <AppRoutes />
        </Router>
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;
