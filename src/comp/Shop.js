import React from 'react';
import ReactDOM from 'react-dom';

import ShopItem from './ShopItem';

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
