import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
