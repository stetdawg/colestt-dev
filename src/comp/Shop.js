//react
import React,{Fragment, useState, useEffect} from 'react'
//import ReactDOM from 'react-dom'
//import Router from 'react-router'
import Filter from './Items/SearchFilter'
import inventory from '../json/merchandise.json'
import { connect } from 'react-redux'
import { addCart } from '../actions/addAction'
import Button from './Elements/Button'
import Select from './Elements/Select'
import '../scss/shop-item.scss'
import '../scss/shop.scss'




//component to render a single item
const Item = (props) => {
  // console.log("Item props", props);
  return(
    <div className="shop-item">
      <div className="item-media">
        <img src={props.item.thumb} alt="thumbnail"/>
      </div>
      <p className="item-name">{props.item.name}</p>
      <div className="item-var">
        <Select itemType="Color" defaultValue="red" onChange={null}>
          <option value="red">Red</option>
          <option value="black">Black</option>
        </Select>
      </div>
      <Button onClick={(e) => props.onClick(e, props.item)} classN="item-btn"><span className="item-price">${props.item.price}</span> | Add to Cart</Button>
    </div>
  );
}

//create a component to render item list

const ItemList = (props) => {
  // console.log("ItemList props", props);
  return(
    props.products[0].map(item => (
      <Item key={item.id} item={item} onClick={props.onClick}/>
    ))
  )
}

class Shop extends React.Component{

  constructor(props){
    super(props);
    // this.handleClick = this.handleClick.bind(this); // not needed unless troubleshooting
    this.state = {
      dialog : null,
      shop : []
    }
  }

  // handleClick (itemName, itemPrice, itemCat){ // not needed unless troubleshooting
  //   this.props.addCart(itemName, itemPrice, itemCat); // sends the info to the cart
  // }

  render(){
    // console.log("Shop props", this.props);
    return(
      <div className="shop-wrapper">
        <h1>Cole's Table Tennis</h1>
        <div className="shop-sidebar">
          <h2>Shop-sidebar</h2>
          {/*
            <Filter
            onFilterSelect={null} />
          */}
        </div>
        <div className="shop">
          <ItemList
            onClick={this.props.handleAddToCart}
            products={this.props.products}
          />
        </div>
      </div>
    );
  }
}


export default connect(null, { addCart })(Shop);
