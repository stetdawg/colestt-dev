import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from './comp/Landing.js'
import './css/app.css';
import './css/structure.css';

import ShopLanding from './comp/ShopLanding';

class App extends React.Component{

  render(){
    return(
      <ShopLanding />
    );
  }

}

export default App;
