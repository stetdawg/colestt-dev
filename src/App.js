import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from './comp/Landing.js'
import './css/App.css';
import './css/structure.css';

import Shop from './comp/Shop';

function App() {
  return (     
    <div className="App">
    <Landing>
      <h1>lol</h1>
    </Landing>
      <main>
        <section>

         <Shop /> 
        </section>
      </main>
    </div>
  );
}

export default App;
