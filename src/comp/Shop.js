//react
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

// css

// assets
import merchandise from '../json/merchandise.json';

// components
import ShopItem from './Items/ShopItem';




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

  render() {
    return(
      <div className="shop-wrapper">
        <h1>Cole's Table Tennis</h1>
        <div className="shop-sidebar">
          <h1>Shop-sidebar</h1>
        </div>
        <div className="shop">
          {
            merchandise.map(item => (
              <ShopItem
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
