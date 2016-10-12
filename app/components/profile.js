import React from 'react';
import Routes from 'react-router';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import UserProfile from './github/userProfile';
import Repos from './github/repos';
import Notes from './notes/notes';

var Profile = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function(){
    return {
      //notes: ["Hello!", "Whats going on?", "TODO: This needs to be changed to db", "random text"],
      notes: [],
      bio: {
        name: "Abhishek"
      },
      repos: ['a', 'b', 'c']
    }
  },

  handleAddNote: function(newNote){
      this.ref.child(this.props.params.username).child(this.props.notes.length).set(newNote);
  },

  componentDidMount: function(){
      this.ref = new Firebase("https://github-profile-tracker.firebaseio.com/notes");
      //this.ref = new Firebase("https://github-note-tracker.firebaseio.com/");
      var childRef = this.ref.child(this.props.params.username);
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
