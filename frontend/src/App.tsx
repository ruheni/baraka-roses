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
import ResetPass from 'pages/ResetPass/ResetPass';
import Signup from 'pages/SignUp/SignUp';
import Team from 'pages/Team/Team';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const client = new ApolloClient({
  uri: process.env.REACT_APP_URI,
  cache: new InMemoryCache()
});


const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={LogIn} />
      <Route path="/reset" component={ResetPass} />
      <Route exact path="/orders" component={Orders} />
      <Route path="/orders/:id" component={Orderdetails} />
      <Route exact path="/orders/new" component={Orderdetails} />
      <Route exact path="/customers" component={Customers} />
      <Route path="/customers/:id" component={Customerdetails} />
      <Route exact path="/customers/new" component={Customerdetails} />
      <Route exact path="/agents" component={Agents} />
      <Route exact path="/agents/:id" component={Agentdetails} />
      <Route exact path="/agents/new" component={Agentdetails} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/:id" component={Productdetails} />
      <Route path="/products/new" component={Productdetails} />
      <Route path="/team" component={Team} />
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
