import React from 'react';

import {Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Home from './comp/Home'
import NavBar from './comp/Nav'
import './scss/app.scss'

//import ItemPanel from './comp/ItemPanel'
import Shop from './comp/Shop'
import ComboShop from './comp/ComboShop'
import About from './comp/About'
import Contact from './comp/Contact'
import Cart from './comp/Cart'

import ItemDesc from './comp/Items/ItemDesc'

import Merch from './json/merchandise.json'

/* surrounding empty tags </> are called Fragments.
They are needed to return two sibling components.
Such as returning NavBar asynchronously to our Router {the Switch tag}.
*/


class App extends React.Component{
  render(){

    const navLinks = [
      {
        "text": "Home",
        "path": "/",
        "icon": "ion-ios-megaphone"
      },
      {
        "text": "Shop",
        "path": "/Shop",
        "icon": "ion-ios-megaphone"
      },
      {
        "text": "Combos",
        "path": "/Combos",
        "icon": "ion-ios-megaphone"
      },
      {
        "text": "About",
        "path": "/About",
        "icon": "ion-ios-megaphone"
      },
      {
        "text": "Contact",
        "path": "/Contact",
        "icon": "ion-ios-megaphone"
      },
      {
        "text": "ItemDesc",
        "path": "/ItemDesc",
        "icon": "ion-ios-megaphone"
      },
      {
        "text": "Item: Illumina",
        "path": "/Item/Illumina",
        "icon": "ion-ios-megaphone"
      }
    ];

    return(
      <>
        <Provider store={store}>
          <div className="background"></div>
          <NavBar
            navLinks={ navLinks }
          />
          <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Shop">
              <Shop />
            </Route>
            <Route path="/Combos">
              <ComboShop />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Cart">
              <Cart />
            </Route>
            {/*
              <Route path="/ItemDesc">
                <ItemDesc {...Merch.rubbers[36]} />
              </Route>
              <Route path="/Item/Illumina">
                <ItemDesc {...Merch.rubbers[2]} />
              </Route>
            */}
          </Switch>
          </main>
        </Provider>
      </>
    );
  }
}

export default App;
