// react
import React from 'react';
import ReactDOM from 'react-dom';

// css

// assets
import merchandise from '../json/merchandise.json';

// components
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
      <div>
        <h1>This is the Custom Shop</h1>
        <div className="shop-custom">
          {
            merchandise.map(item => (
              <form>
                {this.displayCustomItem(item.name, item.price, item.weight)}
              </form>
            ))
          }
        </div>
      </div>
    );
  }
}


export default ShopCustom;
