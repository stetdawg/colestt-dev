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

    }
  }

  render() {
    return(
      <div className="shop">
        {
          merchandise.map(item => (
            <ShopItem
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
