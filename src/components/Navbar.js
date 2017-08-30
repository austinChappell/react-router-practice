import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          <li className="active"><Link to="/" style={{fontFamily: 'Arizonia'}}>Majestic Thai</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/social"><i className="fa fa-facebook" aria-hidden="true"></i>
</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
