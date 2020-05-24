import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Landing from './comp/Landing'
import NavBar from './comp/Nav'
import ShopBasic from './comp/ShopBasic'
import ShopCustom from './comp/ShopCustom'
import './css/app.css';
import './css/structure.css';


class App extends React.Component{
 render(){
   return(
   <><NavBar />
    <Switch>
    <Route exact path="/">
      <Landing> 
        Hi!
      </Landing>
    </Route>
    <Route path="/Shop">
      <ShopBasic />
    </Route>
    <Route path="/ShopCustom">
      <ShopCustom />
    </Route>
    </Switch></>
    );
  }
}

export default App;
