import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import '../css/shop.css'

import ShopItem from './ShopItem';
import ShopCustom from './ShopCustom';

=======
import router from 'react-router'
import ShopItem from './ShopItem';
>>>>>>> origin/stetdawg
import merchandise from '../json/merchandise.json';


class Shop extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    return(
      <div>
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
        <div className="custom-shop">
          <ShopCustom />
        </div>
      </div>
    );
  }
}


export default Shop;
