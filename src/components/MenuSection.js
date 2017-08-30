import React, { Component }  from 'react';

import MenuItem from './MenuItem';

class MenuSection extends Component {
  render() {
    return (
      <div className="menu-section">
        <h2>{this.props.title}</h2>
        <div className="section-headers">
          <div className="dish">
            <h3>Dish</h3>
          </div>
          <div className="description">
            <h3>Description</h3>
          </div>
          <div className="price">
            <h3>Price</h3>
          </div>
        </div>
        {this.props.data[this.props.title].map((item, index) => {
          return <MenuItem key={index} item={item} />
        })}
      </div>
    )
  }
}

export default MenuSection;
