import React, { Component } from 'react';

import MenuSection from './MenuSection';

class Menu extends Component {

  constructor() {
    super();

    this.state = {
      data: {
        Appetizers: [],
        Desserts: [],
        Entrees: []
      }
    }
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu').then((response) => {
      return response.json();
    }).then((results) => {
      const data = results[0];
      this.setState({data});
    })
  }

  render() {
    return (
      <div className="menu">
        <h1 className="menu-title">Menu</h1>
        <MenuSection title="Appetizers" data={this.state.data} />
        <MenuSection title="Entrees" data={this.state.data} />
        <MenuSection title="Desserts" data={this.state.data} />
      </div>
    )
  }
}

export default Menu;
