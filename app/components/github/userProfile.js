
var React = require('react');

var UserProfile = React.createClass({
  render: function(){
    return (
      <div>
        USER: {this.props.username}
        BIO: {this.props.bio.name}
      </div>
    );
  }
});

module.exports = UserProfile;
