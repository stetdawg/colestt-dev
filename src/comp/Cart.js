import React, {Component} from 'react'
import Button from './Elements/Button'
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
            <tbody>
              <tr className="table-header">
                <th className="table-remove"></th>
                <th className="table-name">Name</th>
                <th className="table-unit-price">$/unit</th>
                <th className="table-quantity">Quantity</th>
                <th className="table-price">Cost</th>
              </tr>
              {
                cartItems.map(item =>
                  <tr key={item.name}>
                    <td><Button onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</Button></td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <Button onClick={(e) => this.props.handleChangeCount(e, "dec", item)}>-</Button>
                      {item.count}
                      <Button onClick={(e) => this.props.handleChangeCount(e, "inc", item)}>+</Button>
                    </td>
                    <td>${item.price * item.count}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
