/** @jsx React.DOM */

'use strict';

var Routes = require('react-router').Routes,
    Route = require('react-router').Route,
    DefaultRoute = require('react-router').DefaultRoute,
    App = require('./App'),
    HomePage = require('./pages/Index.jsx'),
    SessionsNew = require('./pages/sessions/New.jsx'),
    CardsView = require('./pages/cards/View.jsx'),
    CardsBalance = require('./pages/cards/Balance.jsx');

module.exports = (
  <Routes location="hash">
    <Route name="app" path="/" handler={App}>
      <Route name="sessions/new" handler={SessionsNew}/>
      <Route name="card" path="cards/:id" handler={CardsView}/>
      <Route name="card/balance" path="cards/:id/balance" handler={CardsBalance}/>
      <DefaultRoute handler={HomePage}/>
    </Route>
  </Routes>
);