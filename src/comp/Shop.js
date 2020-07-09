//react
import React,{Fragment, useState, useEffect} from 'react'
//import ReactDOM from 'react-dom'
//import Router from 'react-router'
import Filter from './Items/SearchFilter'
import inventory from '../json/merchandise.json' 
import { connect } from 'react-redux'
import { addCart } from '../actions/addAction'





//component to render a single item
const Items = ({item}) => <li>
  {
    <div>
      <div className="thumb">
        <img src={item.thumb} alt="thumbnail"/></div>
      <p className="_name">{item._name}</p>
      <p className="price">{item.price}</p>
    </div>
  }
</li>


const ItemList = ({data}) => {
const g = Object.keys(data)
const h = g.map((x) =><>
<p> {x} </p>
{data[x].map(x => <Items item={x}/>)}
</>)
return h
}
//create a component to render item list

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
