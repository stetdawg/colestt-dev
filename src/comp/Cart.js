import React, {Component} from 'react'
import '../scss/cart.scss'


export default class Cart extends Component{
  render(){
    const {cartItems} = this.props;
    console.log("cartItems: ", cartItems);
    return (
      <>
        <h1>This is the cart</h1>
        {cartItems.length === 0 ? "The cart is empty" : <p>You have {cartItems.length} items in the cart</p>}
      </>
    );
  }
}
