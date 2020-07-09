//react
import React,{Fragment, useState, useEffect} from 'react'
//import ReactDOM from 'react-dom'
//import Router from 'react-router'
import Filter from './Items/SearchFilter'
import inventory from '../json/merchandise.json' 

import { connect } from 'react-redux'
import { addCart } from '../actions/addAction'

// assets
// jsons
import Merch from '../json/merchandise.json';





//component to render a single item
const Item = (i, a, itemCategory) => <li>
{a["accessories"]}
</li>
//create a component to render item list
console.log(inventory)

const ItemList = ({ 
  data, 
  filter, 
  favourites, 
  addFavourite 
}) => { 
  const input = filter.toLowerCase()
  
  // Gather list of names
  const names = data
    // filtering out the names that...
    .filter((person, i) => {
      return (
        // ...are not matching the current search value
       !person.name.toLowerCase().indexOf(input)
      )
    })
    // ...output a <Name /> component for each name
    .map((person, i) => {
    // only display names that match current input string
      return (
        <Item 

        />
      )
    })
  
  /* ##### the component's output ##### */
  return ( 
    <ul> 
      {names}
    </ul>
  )
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
        <Item 
        a={inventory}
        />
        </div>
      </div>
    );
  }
}


export default connect(null, { addCart })(Shop);
