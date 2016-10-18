import React from 'react';
import Routes from 'react-router';
import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';

import UserProfile from './github/userProfile';
import Repos from './github/repos';
import Notes from './notes/notes';
import helpers from '../utils/helper';

var Profile = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function(){
    return {
      //notes: ["Hello!", "Whats going on?", "TODO: This needs to be changed to db", "random text"],
      notes: [],
      bio: {},
      repos: []
    }
  },

  handleAddNote: function(newNote){
      this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },

  componentDidMount: function(){
      this.ref = new Firebase("https://github-profile-tracker.firebaseio.com/notes");
      //this.ref = new Firebase("https://github-note-tracker.firebaseio.com/");
      this.init(this.props.params.username);
  },

  componentWillUnmount: function(){
      this.unbind('notes');
  },

  componentWillReceiveProps: function(nextProps){
    this.unbind('notes');
    this.init(nextProps.params.username);
  },

  init: function(username){
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers.getGithubInfo(username).then((data) => {
      if(data){
        this.setState({
          repos: data.repos,
          bio: data.bio
        });
      }else{
        this.setState({
          repos: [],
          bio: {}
        });
      }
    }, (data) => {
      console.log("Error", data);
      this.setState({
        repos: [],
        bio: {}
      });
    });
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
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote = {this.handleAddNote} />
        </div>

      </div>
    )
  }
});

module.exports = Profile;
