import React from 'react';
import ReactDOM from 'react-dom';

import '../css/shop.css'

import ShopItem from './ShopItem';
import ShopCustom from './ShopCustom';


import Router from 'react-router';

import merchandise from '../json/merchandise.json';


class Shop extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dialog: "dialog box",
      randomValue: "hello"
    }
  }

  myAlert = (props) => {
    this.setState({
        dialog: props
    })
  }

  render() {
    return(
      <div className="shop">
        <h1>This is the Basic Shop</h1>
        <p className="dialog">{this.state.dialog} was just clicked</p>
        {
          merchandise.map(item => (
            <ShopItem
              onClick={() => {this.myAlert(item.name)}}
              name={item.name}
              price={item.price}
              weight={item.weight}
            />
          ))
        }
      </div>
    );
  }
}


export default Shop;
