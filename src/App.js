import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Landing from './comp/Landing'
import NavBar from './comp/Nav'
import ShopBasic from './comp/ShopBasic'
import ShopCustom from './comp/ShopCustom'
import About from './comp/About'
import Contact from './comp/Contact'
import './css/app.css';
import './css/structure.css';


class App extends React.Component{
  render(){
    return(
      <><NavBar />
        <Switch className="switch">
          <main>
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
          </main>
        </Switch>
      </>
    );
  }
}

export default App;
