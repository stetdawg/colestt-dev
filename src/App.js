import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Home from './comp/Home'
import NavBar from './comp/Nav'
import ItemPanel from './comp/ItemPanel'
import ShopBasic from './comp/ShopBasic'
import ShopItem from './comp/ShopBasicItem'
import ShopCustom from './comp/ShopCustom'
import './css/app.css';
import './css/structure.css';

/* surrounding empty tags </> are called Fragments. 
They are needed to return two sibling components. 
Such as returning NavBar asynchronously to our Router {the Switch tag}. 
*/


class App extends React.Component{
 render(){
   return(
   <><NavBar />
    <Switch>
    <Route exact path="/">
      <ItemPanel> 
Hery
      </ItemPanel>
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
