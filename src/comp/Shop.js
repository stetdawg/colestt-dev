//react
import React from 'react';
//import ReactDOM from 'react-dom';
//import Router from 'react-router';

// css

// assets
import RubbersInverted from '../json/merchandise/rubbers-inverted.json';
import RubbersPipsOut from '../json/merchandise/rubbers-pipsOut.json';
import RubbersTopsheets from '../json/merchandise/rubbers-topsheets.json';
import RubbersSponges from '../json/merchandise/rubbers-sponges.json';

import BladesWood from '../json/merchandise/blades-wood.json';
import BladesComposite from '../json/merchandise/blades-composite.json';

import Handles from '../json/merchandise/handles.json';
import Cases from '../json/merchandise/cases.json';
import Balls from '../json/merchandise/balls.json';
import Accessories from '../json/merchandise/accessories.json';

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
          <h3>Inverted</h3>
          {
            RubbersInverted.map(item => (
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
          <h3>Pips-Out</h3>
          {
            RubbersPipsOut.map(item => (
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
          <h3>Topsheets</h3>
          {
            RubbersTopsheets.map(item => (
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
          <h3>Sponges</h3>
          {
            RubbersSponges.map(item => (
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
          <h3>All-Wood</h3>
          {
            BladesWood.map(item => (
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
          <h3>Composite</h3>
          {
            BladesComposite.map(item => (
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
            Handles.map(item => (
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
            Cases.map(item => (
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
            Balls.map(item => (
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
            Accessories.map(item => (
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
