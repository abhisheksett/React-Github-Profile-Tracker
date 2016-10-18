
import React from 'react';
var firebase = require('firebase');


var SignUp = React.createClass({
  render: function(){
    return (
      <div className="main-container" style={{marginTop: 30}}>
        <div className="row">
          <div className="col-sm-3"></div>
          <form data-toggle="validator" role="form" onSubmit={this.createUser}>
            <div className="col-sm-6">
              <div className="form-group">
                <label>Username:</label>
                <input type="email" className="form-control" id="usr" ref="username" placeholder="Email"
                  data-error="Invalid Email!!!" required/>
                  <div className="help-block with-errors"></div>
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" className="form-control" id="pwd" ref="password" required/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  },
  createUser: function(e){
    let email = this.refs.username.value;
    let password = this.refs.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
      console.log(data);
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  },

  getRef: function(ref){
    console.log(this.refs.username);
  }
});

module.exports = SignUp;
