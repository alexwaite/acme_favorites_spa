import React from 'react';
import Nav from './Nav';
import Things from './Things';
import Users from './Users';
import { HashRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Acme Favorites</h1>
          <Nav />

          <Route path="/users" component={Users} />
          <Route path="/things" component={Things} />
        </div>
      </HashRouter>
    );
  }
}
