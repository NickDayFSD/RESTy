import React from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Header from './Header';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          
        </main>
      </Router>
    </div>
  
  );
}
