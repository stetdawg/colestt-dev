import React from 'react';
import ReactDOM from 'react-dom';

import merchandise from '../json/merchandise.json';
import ShopCustomItem from './ShopCustomItem';


class ShopCustom extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  displayCustomItem(itemName, itemPrice, itemWeight){
    return(
      <ShopCustomItem name={itemName} price={itemPrice} weight={itemWeight} />
    );
  }

  render() {
    return(
      <div className="shop-custom">
        {
          merchandise.map(item => (
            <form>
              {this.displayCustomItem(item.name, item.price, item.weight)}
            </form>
          ))
        }
      </div>
    );
  }
}


export default ShopCustom;
