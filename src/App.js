import React from 'react';

import {Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'
import { addCart } from './actions/addAction'
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

// import ItemDesc from './comp/Items/ItemDesc'

import Merch from './json/merchandise.json'

/* surrounding empty tags </> are called Fragments.
They are needed to return two sibling components.
Such as returning NavBar asynchronously to our Router {the Switch tag}.
*/


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      products: [Merch],
      filteredProducts: [Merch],
      cartItems: []
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentDidMount(){
    if (localStorage.getItem("cartItems")){
      this.setState({cartItems: JSON.parse(localStorage.getItem("cartItems"))});
    }
  }

  handleAddToCart = (e, product) => {
    console.log("Adding " + product.name + " to cart.");
    this.setState(state =>{
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item =>{
        if (item.id === product.id){
          console.log("This product is already in the cart. Count++");
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart){
        console.log("It's not in the cart");
        cartItems.push({...product, count: 1});
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }

  OLDhandleAddToCart = (e, product) => {
    console.log("Adding " + product.name + " to cart.");
    this.setState(state =>{
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach(item =>{
        if (item.id === product.id){
          console.log("This product is already in the cart. Count++");
          productAlreadyInCart = true;
          item.count++;
        }
      });
      if (!productAlreadyInCart){
        console.log("It's not in the cart");
        cartItems.push({...product, count: 1});
      }
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }

  handleRemoveFromCart = (e, item) => {
    console.log("Removing " + item.name + " from cart");
    this.setState(state =>{
      const cartItems = state.cartItems.filter(elm => elm.id !== item.id);
      localStorage.setItem("cartItems", cartItems);
      return {cartItems};
    })
  }

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
            navLinks={navLinks}
            cartItems={this.state.cartItems}
          />
          <main>
          <Switch>
            <Route exact path="/" >
              <Home handleAddToCart={this.handleAddToCart} />
            </Route>
            <Route path="/Shop">
              <Shop products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
            </Route>
            <Route path="/Combos" component={ComboShop} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Cart">
              <Cart cartItems={this.state.cartItems} handleRemoveFromCart={this.handleRemoveFromCart} />
            </Route>
          </Switch>
          </main>
        </Provider>
      </>
    );
  }
}

export default App;
