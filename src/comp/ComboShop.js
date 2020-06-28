import React,{Component} from 'react';


import Button from './Elements/Button'
import Select from './Elements/Select'
import Text from './Elements/Text'

// jsons
import Merch from '../json/merchandise.json';
/*
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
*/


class ShopCustom extends Component{
  constructor(props){
    super(props);
    this.state = {
      // didScroll: false, // in case we need this later
      bladePrice : null,
      redRubberPrice : null,
      blackRubberPrice : null,
      handlesPrice: null,
      casePrice: null,
      comboPrice: null
    }
  }

  checkWeight = (weight) => {
    if (weight < 1){
      // weight is greater than 0
      return(<span className="item-weight" style={{color: "#ABABAB"}}>{this.props.weight} kg</span>);
    } else if (weight >= 1 && weight < 2) {
      // weight is greater than 1
      return(<span className="item-weight" style={{color: "#777"}}>{this.props.weight} kg</span>);
    } else if (weight >= 2) {
      // weight is greater than 1
      return(<span className="item-weight" style={{color: "#090909"}}>{this.props.weight} kg</span>);
    }
  } // add this to the render when you wanna call upon the weight -> {this.checkWeight(this.props.weight)}

  //virtualization, render only what the user can see.
  componentDidMount() {
    //scroll listener?
    }
  componentWillUnmount() {
    //destroy scroll
  }


  // Handling the event changes, based on the options taken

  handleBladeChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({bladePrice : Merch.blades[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({bladePrice : null});
    }
  }


  handleRedRubberChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({redRubberPrice : Merch.rubbers[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({redRubberPrice : null});
    }
  }


  handleBlackRubberChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({blackRubberPrice : Merch.rubbers[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({blackRubberPrice : null});
    }
  }


  handleHandleChange(event){
    if (event.target.selectedIndex !== 0){
      this.setState({handlesPrice : Merch.handles[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({handlesPrice : null});
    }
  }


  handleCaseChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({casePrice : Merch.cases[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({casePrice : null});
    }
  }

  printTotal(){
    if (this.state.bladePrice !== null &&
        this.state.redRubberPrice !== null &&
        this.state.blackRubberPrice !== null &&
        this.state.handlesPrice !== null &&
        this.state.casePrice !== null)
      {
        const shipping = 2.99;
        const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlesPrice + this.state.casePrice + parseFloat(shipping);
        return "$" + total + " | Add to Cart";
      } else {
        return "Finish the Combo";
      }
  }

  getTotal(){
    const shipping = 2.99;
    const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlesPrice + this.state.casePrice;

    console.log("getTotal was called");
  }

  componentDidUpdate(){
    if (this.state.bladePrice !== null &&
        this.state.redRubberPrice !== null &&
        this.state.blackRubberPrice !== null &&
        this.state.handlesPrice !== null &&
        this.state.casePrice !== null)
    {
      console.log("The state is full. FINALLY CALLING getTotal()");
      // this.getTotal();
    } else {
      console.log("The state IS NOT full");
    }

  }

  render() {
    return(
      <div>
        <h1>Combos</h1>
        <p>Here's where you can customize your paddle to your liking. It comes sealed and assembled with edge tape and case of choice — ready to play.</p>
        <div className="combo-shop">
          <div className="combo-item-container">
            <label for="Blade">Blade: </label>
            <Select itemType="Blade" classN="blades" onChange={(e) => this.handleBladeChange(e)}>
              <option selected></option>
              {
                Merch.blades.map(item => <option>
                  {item._name + "   --   $" + item.price /* ($" + item.price + ")" */}
                </option>)
              }
              {
                // Merch.bladesComposite.map(item => <option>
                //   {item._name + "   --   $" + item.price}
                // </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Red Rubber">Red Rubbber: </label>
            <Select itemType="Red Rubber" classN="red-rubbers" onChange={(e) => this.handleRedRubberChange(e)}>
              <option selected></option>
              {
                Merch.rubbers.map(item => <option>
                  {item._name + "   --   $" + item.price}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Red Rubber Thickness">Red Rubber Thickness: </label>
            <Text itemType="Red Rubber Thickness" />
          </div>
          <div className="combo-item-container">
            <label for="Black Rubber">Black Rubbber: </label>
            <Select itemType="Black Rubber" classN="black-rubbers" onChange={(e) => this.handleBlackRubberChange(e)}>
              <option selected></option>
              {
                Merch.rubbers.map(item => <option>
                  {item._name + "   --   $" + item.price}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Black Rubber Thickness">Black Rubber Thickness: </label>
            <Text itemType="Black Rubber Thickness" />
          </div>
          <div className="combo-item-container">
            <label for="Handles">Handles: </label>
            <Select itemType="Handles" classN="handles" onChange={(e) => this.handleHandleChange(e)}>
              <option selected></option>
              {
                Merch.handles.map(item => <option>
                  {item._name /*  + "   --   $" + item.price */}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Case">Case: </label>
            <Select itemType="Case" classN="case" onChange={(e) => this.handleCaseChange(e)}>
              <option selected></option>
              {
                Merch.cases.map(item => <option>
                  {item._name + "   --   $" + item.price}
                </option>)
              }
            </Select>
          </div>
          <div className="paddle-info">
            <div className="info-container">
              <label for="weight">Weight:</label>
              <span name="weight">0.kg</span>
            </div>
            <div className="info-container">
              <label for="speed">Speed:</label>
              <span name="speed">Fast</span>
            </div>
            <div className="info-container">
              <label for="shipping">Shipping:</label>
              <span name="shipping">$2.99</span>
              <input id="shipping" name="shipping" value={2.99} type="hidden" />
            </div>
          </div>
          <Button classN="">
            {/*  this.getTotal() == null ? "Finish selecting your combo to generate your price" : "$" + this.getTotal() + " | Buy Now"  */}
            {
              this.printTotal()
            }
          </Button>
        </div>
      </div>
    )
  }
}


export default ShopCustom;
