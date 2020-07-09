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
const Items = ({item}) => <>
  
    <div className="shop-item">
      <div className="item-media">
        <img src={item.thumb} alt="thumbnail"/></div>
      <p className="item-name">{item._name}</p>
      <div className="item-var">

      <Select itemType="Color" onChange={null}>
            <option value="red" selected>Red</option>
            <option value="black">Black</option>
            <option value="both">Both</option>
          </Select>

          </div>
        <Button classN="item-btn"><span className="item-price">${item.price}</span> | Add to Cart</Button>
    </div>
</>

//create a component to render item list

const ItemList = ({data}) => {
const g = Object.keys(data)
const h = g.map((x) =>
  <>
    <h3> {x} </h3>
      {data[x]
        .map(x => <Items item={x}/>)}
        </>)
return h
}

class Shop extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      dialog : null,
      shop : []
    }
  }

  componentDidMount(){
  }

  handleClick (itemName, itemCat){
    this.props.addCart(itemName, itemCat); // sends the info to the cart
  }

  render(){
    return(
      <div className="shop-wrapper">
        <h1>Cole's Table Tennis</h1>
        <div className="shop-sidebar">
          <h2>Shop-sidebar</h2>
          <Filter
          onFilterSelect={null} />
        </div>
        <div className="shop">
        <ItemList
        data={inventory}
        />
        </div>
      </div>
    );
  }
}


export default connect(null, { addCart })(Shop);
