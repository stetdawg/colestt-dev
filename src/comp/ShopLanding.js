// react
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Link } from 'react-router-dom'

// css
import '../scss/structure.scss';
import '../scss/shop-landing.scss';

// assets

// components
import ShopBasic from './ShopBasic';
import ShopCustom from './ShopCustom';

class ShopLanding extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      basicShop : null // set to null when done
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
      return(<ShopBasic />)
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
        <div className="shop-container">
          {this.chooseShop()}
        </div>
      </div>
    );
  }

}

export default ShopLanding;
