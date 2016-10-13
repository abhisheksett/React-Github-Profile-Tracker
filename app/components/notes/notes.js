
import React from 'react';
import NotesList from './notesList';
import AddNote from './addNote';

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function(){
    return (
      <div>
        <h3>Notes for {this.props.username} </h3>
        <AddNote username={this.props.username} addNote={this.props.addNote} /><br/>
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});

module.exports = Notes;
