
var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
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
