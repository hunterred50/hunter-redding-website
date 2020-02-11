import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import { Breakpoint, BreakpointProvider } from 'react-socks';
// import shared from '@react95/core'

function App() {
  return (
    <div className="App">
      <BreakpointProvider>
        <Navbar />
      </BreakpointProvider>
    </div>
  );
}

export default App;
// sending to deployment
