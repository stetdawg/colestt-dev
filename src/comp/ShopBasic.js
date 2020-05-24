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
import ShopCustom from './ShopCustom';




class ShopBasic extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dialog: null,
      randomValue: "hello"
    }
  }

  myAlert = (props) => {
    this.setState({
        dialog: props
    })
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
        <h1>This is the Basic Shop</h1>
        {this.dialogBox()}
        <div className="shop">
          {
            merchandise.map(item => (
              <ShopBasicItem
                onClick={() => {this.myAlert(item.name)}}
                name={item.name}
                price={item.price}
                weight={item.weight}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


export default ShopBasic;
