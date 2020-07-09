//react
import React from 'react'
import { connect } from 'react-redux'
import { addCart } from '../actions/addAction'

// assets
// jsons
import Merch from '../json/merchandise.json';

// components
import ShopItem from './Items/ShopItem';


class Shop extends React.Component {

  constructor(props){
    super(props);
    // this.handleClick = this.handleClick.bind(this); // not needed unless troubleshooting
    this.state = {

    }
  }

  // handleClick (itemName, itemPrice, itemCat){ // not needed unless troubleshooting
  //   this.props.addCart(itemName, itemPrice, itemCat); // sends the info to the cart
  // }

  render(props){
    return(
      <div className="shop-wrapper">
        <h1>Cole's Table Tennis</h1>
        <div className="shop-sidebar">
          <h2>Shop-sidebar</h2>
        </div>
        <div className="shop">
          <h2>Rubbers</h2>
          {
            Merch.rubbers.map(item => (
              <ShopItem
                itemType="rubbers"
                onClick={this.props.addCart}
                {...item /* name, price, thumb, desc */}
              />
            ))
          }
          <h2>Blades</h2>
          {
            Merch.blades.map(item => (
              <ShopItem
                onClick={this.handleClick}
                {...item}
              />
            ))
          }
          <h2>Handles</h2>
          {
            Merch.handles.map(item => (
              <ShopItem
                onClick={this.handleClick}
                {...item}
              />
            ))
          }
          <h2>Cases</h2>
          {
            Merch.cases.map(item => (
              <ShopItem
                onClick={this.handleClick}
                {...item}
              />
            ))
          }
          <h2>Balls</h2>
          {
            Merch.balls.map(item => (
              <ShopItem
                onClick={this.handleClick}
                {...item}
              />
            ))
          }
          <h2>Accessories</h2>
          {
            Merch.accessories.map(item => (
              <ShopItem
                onClick={this.handleClick}
                {...item}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


export default connect(null, { addCart })(Shop);
