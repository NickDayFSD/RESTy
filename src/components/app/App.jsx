import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Resty from '../../containers/Resty';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Resty />
        </main>
      </Router>
    </div>
  );
}
