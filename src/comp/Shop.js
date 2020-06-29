//react
import React from 'react';
//import ReactDOM from 'react-dom';
//import Router from 'react-router';

// css

// assets
// jsons
import Merch from '../json/merchandise.json';


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
          <h2>Shop-sidebar</h2>
        </div>
        <div className="shop">
          <h2>Rubbers</h2>
          {
            Merch.rubbers.map(item => (
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
          <h2>Blades</h2>
          {
            Merch.blades.map(item => (
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
          <h2>Handles</h2>
          {
            Merch.handles.map(item => (
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
          <h2>Cases</h2>
          {
            Merch.cases.map(item => (
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
          <h2>Balls</h2>
          {
            Merch.balls.map(item => (
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
          <h2>Accessories</h2>
          {
            Merch.accessories.map(item => (
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
