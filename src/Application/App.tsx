import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Features/Home';
import './index.css';
import OrderForm from '../Features/OrderForm';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/order">
          <OrderForm />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
