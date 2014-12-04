/** @jsx React.DOM */

var React = require('react');
var AppAction = require('../action/app-action.js');
var RemoveFromCart =
  React.createClass({
    handleClick: function(){
      AppAction.removeItem(this.props.index);
    },
    render: function(){
      return <button onClick={this.handleClick}> X </button>
    }
  });

module.exports = RemoveFromCart;
