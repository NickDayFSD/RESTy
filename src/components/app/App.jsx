import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Resty from '../../containers/Resty';

export default function App() {
  const baseline = {
    margin: '0',
    padding: '0',
    border: '0',
  };

  return (
    <div className="App" style={baseline}>
      <Router>
        <Header />
        <main>
          <Resty />
        </main>
      </Router>
    </div>
  );
}
