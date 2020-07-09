import React from 'react'
import '../scss/cart.scss'


const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <div className="cart-container">
        <table>
          <tr>
            <th className="table-name">Name</th>
            <th className="table-type">Type</th>
            <th className="table-">Price</th>
          </tr>
          <hr/>
          <tr>
            <td>Air TigerS</td>
            <td>Red</td>
            <td>$20</td>
          </tr>
          <tr>
            <td>Air TigerS</td>
            <td>Black</td>
            <td>$20</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Cart;
