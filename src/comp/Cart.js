import React, {Component} from 'react'
import '../scss/cart.scss'


export default class Cart extends Component{
  render(){
    const {cartItems} = this.props;
    // console.log("cartItems: ", cartItems);
    return (
      <>
      <h1>This is the cart</h1>
      {cartItems.length === 0 ? "The cart is empty" : <p>You have {cartItems.length} items in the cart</p>}
        <div className="cart-container">
          <table>
            <h2>Items</h2>
            <tr>
              <th className="table-remove"></th>
              <th className="table-name">Name</th>
              <th className="table-unit-price">$/unit</th>
              <th className="table-quantity">Quantity</th>
              <th className="table-price">Cost</th>
            </tr>
            <hr/>
            {
              cartItems.map(item =>
                <tr>
                  <td><button onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td><button>-</button> {item.count} <button>+</button></td>
                  <td>${item.price * item.count}</td>
                </tr>
              )
            }
            {
              // <tr>
              //   <td>Air TigerS</td>
              //   <td>Red</td>
              //   <td>1</td>
              //   <td>$20</td>
              // </tr>
              // <tr>
              //   <td>Air TigerS</td>
              //   <td>Black</td>
              //   <td>1</td>
              //   <td>$20</td>
              // </tr>
            }
          </table>
        </div>
      </>
    );
  }
}
