import React from 'react';

import {Route, Switch } from 'react-router-dom'
import Home from './comp/Home'
import NavBar from './comp/Nav'
//import ItemPanel from './comp/ItemPanel'
import ShopBasic from './comp/Shop'
import ShopCustom from './comp/ComboShop'
import About from './comp/About'
import Contact from './comp/Contact'

import ItemDesc from './comp/Items/ItemDesc'


import merch from './json/merchandise.json'

/* surrounding empty tags </> are called Fragments.
They are needed to return two sibling components.
Such as returning NavBar asynchronously to our Router {the Switch tag}.
*/


class App extends React.Component{
  render(){
    return(
      <><NavBar />
      <main>
      <div className="lightbox"></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Shop">
          <ShopBasic />
        </Route>
        <Route path="/Combos">
          <ShopCustom />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/ItemDesc">
          <ItemDesc version={"v1"} {...merch[2]} />
        </Route>
        <Route path="/ItemDesc2">
          <ItemDesc version={"v2"} {...merch[2]} />
        </Route>
        <Route path="/Item/Illumina">
          <ItemDesc version={"v2"} {...merch[1]} />
        </Route>
      </Switch>
      </main>
      </>
    );
  }
}

export default App;
