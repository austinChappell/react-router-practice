import React, { Component } from 'react';

class MenuItem extends Component {
  render() {

    const item = this.props.item;

    return (
      <div className="section-row">
        <div className="dish">
          <p>{item.dish}</p>
        </div>
        <div className="description">
          <p>{item.description}</p>
        </div>
        <div className="price">
          <p>${item.price}</p>
        </div>
      </div>
    )
  }
}

export default MenuItem;
