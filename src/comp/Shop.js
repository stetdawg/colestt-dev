//react
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// css

// assets
import merchandise from '../json/merchandise.json';

// components
import ShopBasicItem from './Items/ShopItem';




class ShopBasic extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dialog : null,
      shop : []
    }
  }

  componentDidMount(){

  }

  btnClick = (props) => {
    // this.setState({
    //     dialog: props
    // })
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
      <div className="shop-wrapper">
        <h1>Cole's Table Tennis</h1>
        {this.dialogBox()}
        <div className="shop-sidebar">
          <h1>Shop-sidebar</h1>
        </div>
        <div className="shop">
          {
            merchandise.map(item => (
              <ShopBasicItem
                //onClick={() => {this.btnClick(item.name)}}
                name={item.name}
                price={item.price}
                weight={item.weight}
                thumb={item.thumb}
                {...item /* name, price, thumb, desc*/}
              />
            ))
          }
        </div>
      </div>
    );
  }
}


export default ShopBasic;
