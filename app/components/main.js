
import React from 'react';
import SearchGithub from './searchGithub';

var Main = React.createClass({
  render: function(){
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
          <div className="col-sm-2" style={{marginTop: 15}}>
            <button type="button" className="btn btn-primary">Logout</button>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
