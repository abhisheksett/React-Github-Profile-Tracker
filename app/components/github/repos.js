
var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        REPOS: {this.props.repos}
      </div>
    );
  }
});

module.exports = Repos;
