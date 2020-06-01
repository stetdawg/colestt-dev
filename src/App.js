import React from 'react';

import {Route, Switch } from 'react-router-dom'
import Home from './comp/Home'
import NavBar from './comp/Nav'
//import ItemPanel from './comp/ItemPanel'
import ShopBasic from './comp/ShopBasic'
import ShopCustom from './comp/ComboShop'
import About from './comp/About'
import Contact from './comp/Contact'
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
      <main>
      <Switch>
        <Route exact path="/">
          <Home>
            Hi! <br/>
            <b>NOTE FOR US:</b><br/>Let's create a nice opening message for people to choose if they want to shop the regular shop or go straight to the custom shop.
          </Home>
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
      </Switch>
      </main>
      </>
    );
  }
}

export default App;
