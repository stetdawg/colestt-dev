import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
<<<<<<< HEAD
import Home from './comp/Home'
import NavBar from './comp/Nav'
import ItemPanel from './comp/ItemPanel'
=======
import Landing from './comp/Landing'
>>>>>>> origin/aisbell
import ShopBasic from './comp/ShopBasic'
import ShopItem from './comp/ShopBasicItem'
import ShopCustom from './comp/ShopCustom'
import About from './comp/About'
import Contact from './comp/Contact'
import './css/app.css';
import './css/structure.css';

/* surrounding empty tags </> are called Fragments. 
They are needed to return two sibling components. 
Such as returning NavBar asynchronously to our Router {the Switch tag}. 
*/


class App extends React.Component{
<<<<<<< HEAD
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
=======
  render(){
    return(
      <>
      <Switch>
        <Route exact path="/">
          <Landing>
            Hi! <br/>
            <b>NOTE FOR US:</b><br/>Let's create a nice opening message for people to choose if they want to shop the regular shop or go straight to the custom shop.
          </Landing>
        </Route>
        <Route path="/Shop">
          <ShopBasic />
        </Route>
        <Route path="/Shop-Custom">
          <ShopCustom />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </Switch>
      </>
>>>>>>> origin/aisbell
    );
  }
}

export default App;
