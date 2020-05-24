import React from 'react';
import ReactDOM from 'react-dom';

import merchandise from '../json/merchandise.json';
import ShopCustomItem from './ShopCustomItem';


class ShopCustom extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      blades = ['Matrix (Flared Orange)','Martix (Straight Green)']
    }
  }

  displayCustomItem(itemName){
    return(
      <ShopCustomItem name={itemName} />
    );
  }

  render() {
    return(
      <div className="shop-custom">
        {
          merchandise.map(item => (
            <form>
              {this.displayCustomItem(item.name)}
            </form>
          ))
        }
      </div>
    );
  }
}


export default ShopCustom;
