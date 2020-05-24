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
      basicShop : false
    }
  }

  toggleShopCounter(){
    if (this.state.basicShop == true){
      this.setState({
        basicShop : false
      })
    } else if (this.state.basicShop == false){
      this.setState({
        basicShop : true
      })
    }
  }

  chooseShop(){
    if (this.state.basicShop == true){
      return(<Shop />)
    } else {
      return(<ShopCustom />)
    }
  }

  render(){
    return(
      <div>
        <button onClick={() => {this.toggleShopCounter()}}>
          Toggle Shop
        </button>
        {this.chooseShop()}
      </div>
    );
  }
}

export default App;
