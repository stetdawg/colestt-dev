import React from 'react'
import {connect} from 'react-redux'
import '../scss/cart.scss'


const Cart = ({cartProps}) => {
  let currentCart = cartProps.products;
  console.log("currentCart", currentCart);
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
          {
            currentCart.map(item =>
              <tr>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
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

const mapStateToProps = state => ({
  cartProps: state.cartState
});

export default connect(mapStateToProps) (Cart);
