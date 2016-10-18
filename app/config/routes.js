var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var Home = require('../components/home');
var Main = require('../components/main');
var Profile = require('../components/profile');
var Login = require('../components/login');
var SignUp = require('../components/signup');

module.exports = (
  <Router>
    <Route path="/" component={Login} />
    <Route path="signup" component={SignUp} />
    <Route path="/" component={Main}>
      <Route path="profile/:username" component={Profile} />
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
