import React, { Component } from 'react';

class Header extends Component {
  render() {
    const headerStyle = {
      padding: '5px',
      margin: '0px',
      background: 'rgba(224, 224, 224)',
      display: 'flex',
      justifyContent: 'center',
    };

    return (
      <header className="Header" style={headerStyle}>
        <h1>RESTy</h1>
      </header>
    );
  }
}

export default Header;
