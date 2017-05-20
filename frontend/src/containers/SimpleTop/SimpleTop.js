import React, { Component } from 'react';

class SimpleTop extends Component {
  render() {
    return (
      <div className="app flex-row">
        {this.props.children}
      </div>
    );
  }
}

export default SimpleTop;
