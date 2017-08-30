import React, { Component } from 'react';

class MainSection extends Component {
  render() {
    return (
      <div className="MainSection">        
        {this.props.children}
      </div>
    )
  }
}

export default MainSection;
