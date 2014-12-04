/** @jsx React.DOM */

var React = require('react');
var AppActions = require('../action/app-action.js');
var AddToCart =
  React.createClass({
    handleClick: function(){
      AppActions.addItem(this.props.item);
    },
    render: function(){
      return <button onClick={this.handleClick}>Add to cart</button>
    }
  });

module.exports = AddToCart;

