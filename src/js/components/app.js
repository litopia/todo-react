/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog.js');
var Cart = require('../components/app-cart.js');

var APP =
  React.createClass({
    render: function(){
      return (
        <div>
          <h1>My Flux App</h1>
          <h2>Lets Shop</h2>
          <Catalog />
          <h2>Cart </h2>
          <Cart />
        </div>
      )
    }
  });

  module.exports = APP;
