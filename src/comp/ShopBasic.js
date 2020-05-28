//react
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// css
import '../css/shop-basic.css'

// assets
import merchandise from '../json/merchandise.json';

// components
import ShopBasicItem from './ShopBasicItem';




class ShopBasic extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dialog : null,
      randomValue : "hello",
      shop : []
    }
  }

  componentDidMount(){

  }

  btnClick = (props) => {
    this.setState({
        dialog: props
    })
    // open the #cart element
    // pass info into shop.array
  }

  handleShop = () => {
    // call the shop.array
    // calculate the cost of the cart
    // display the cost in the #buy-now
  }

  dialogBox = (props) => {
    if (this.state.dialog == null){
      return(<p className="dialog">This is the Dialog Box</p>)
    } else {
      return(<p className="dialog">{this.state.dialog} was clicked</p>)
    }
  }

  render() {
    return(
      <div>
        <h1>Cole's Table Tennis</h1>
        {this.dialogBox()}
        <div className="shop">
          {
            merchandise.map(item => (
              <ShopBasicItem
                onClick={() => {this.btnClick(item.name)}}
                name={item.name}
                price={item.price}
                weight={item.weight}
                thumb={item.thumb}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


export default ShopBasic;
