import React, { Component } from 'react';

class Header extends Component {
  render() {
    const headerStyle = {
      background: '#204060',
      color: '#f5f5f5',
      height: '4em',
      lineHeight: '4em',
      padding: '0 2em',
      fontFamily: 'Verdana,Geneva,Tahoma,sans-serif',
    };

    const h1Style = {
      paddingLeft: '20px',
    };

    return (
      <header className="Header" style={headerStyle}>
        <h1 style={h1Style}>RESTy</h1>
      </header>
    );
  }
}

export default Header;
