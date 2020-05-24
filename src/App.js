import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Landing from './comp/Landing.js'
import './css/App.css';
import './css/structure.css';


import Shop from './comp/Shop';
import ShopCustom from './comp/ShopCustom';
import ShopLanding from './comp/ShopLanding';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      basicShop : null
    }
  }

  toggleShopCounter(bool){

    if (bool == true){
      this.setState({
        basicShop : true
      })
    } else if (bool == false){
      this.setState({
        basicShop : false
      })
    }
  }

  chooseShop(){
    if (this.state.basicShop == true){
      return(<Shop />)
    } else if (this.state.basicShop == false) {
      return(<ShopCustom />)
    } else {
      return(<p>Welcome to Cole's Table Tennis! Select an option to get started.</p>)
    }
  }

  render(){
    return(
      <div>
        <button onClick={() => {this.toggleShopCounter(true)}}>
          Basic Shop
        </button>
        <button onClick={() => {this.toggleShopCounter(false)}}>
          Custom Shop
        </button>
        {this.chooseShop()}
      </div>
    );
  }
}

export default App;
