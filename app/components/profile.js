var React = require('react');
var Routes = require('react-router');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var UserProfile = require('./github/userProfile');
var Repos = require('./github/repos');
var Notes = require('./notes/notes');

var Profile = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function(){
    return {
      notes: [1,2,3],
      bio: {
        name: "Abhishek"
      },
      repos: ['a', 'b', 'c']
    }
  },

  componentDidMount: function(){
      //this.ref = new Firebase("https://github-profile-tracker.firebaseio.com/");
      this.ref = new Firebase("https://github-note-tracker.firebaseio.com/");
      var childRef = this.ref.child(this.props.params.username);
      this.ref.on('value', function(data){
        console.log(data);
      }, function(){
        console.log(data);
      });
      this.bindAsArray(childRef, 'notes');
  },

  componentWillUnmount: function(){
      this.unbind('notes');
  },

  render: function(){
    return (
      <div className="row">

        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>

        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>

        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>

      </div>
    )
  }
});

module.exports = Profile;
