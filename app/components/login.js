
import React from 'react';
var Router =  require('react-router');

var Login = React.createClass({
  mixins: [Router.History],

  render: function(){
    return (
      <div className="main-container" style={{marginTop: 30}}>
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="form-group">
              <label>Username:</label>
              <input type="text" className="form-control" id="usr" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
            <button type="button" className="btn btn-primary">Login</button>
            <button type="button" className="btn btn-link" onClick={this.handleNavigation}>Create an account</button>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  },
  handleNavigation: function(){
    this.history.pushState(null, '/signup');
  }
});

module.exports = Login;
