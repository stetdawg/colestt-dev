import React from 'react'
import '../scss/cart.scss'


const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-container">
        <table>
          <h2>Items</h2>
          <tr>
            <th className="table-name">Name</th>
            <th className="table-type">Type</th>
            <th className="table-quantity">Quantity</th>
            <th className="table-price">Price</th>
          </tr>
          <hr/>
          <tr>
            <td>Air TigerS</td>
            <td>Red</td>
            <td>1</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Air TigerS</td>
            <td>Black</td>
            <td>1</td>
            <td>$20</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Cart;
