import React from 'react';
import { Switch, Route } from 'react-router-dom';



const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="*" component={Error} />
  </Switch>
)

export default Main;