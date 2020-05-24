// react
import React from 'react';
import ReactDOM from 'react-dom';

// css
import '../css/shop-basic-item.css';

// assets

// components


class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <a className="shop-item" onClick={this.props.onClick}>
        <h2 className="item-name">{this.props.name}</h2>
        <p className="item-price">${this.props.price}</p>
        <p className="item-weight">{this.props.weight} kg</p>
      </a>
    );
  }
}


export default ShopItem;
