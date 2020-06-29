import React,{Component} from 'react';


import Button from './Elements/Button'
import Select from './Elements/Select'
import Text from './Elements/Text'

// jsons
import Merch from '../json/merchandise.json';


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
      comboPrice: null,
      shippingCost: 7.00
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


  // Handling the event changes, based on the options taken

  handleBladeChange(event){
    if (event.target.selectedIndex !== 0){
      this.setState({bladePrice : Merch.blades[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({bladePrice : null});
    }
  }


  handleRedRubberChange(event){
    if (event.target.selectedIndex !== 0){
      this.setState({redRubberPrice : Merch.rubbers[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({redRubberPrice : null});
    }
  }


  handleBlackRubberChange(event){
    if (event.target.selectedIndex !== 0){
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
    if (event.target.selectedIndex !== 0){
      this.setState({casePrice : Merch.cases[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({casePrice : null});
    }
  }

  getTotal(){
    if (this.state.bladePrice !== null &&
        this.state.redRubberPrice !== null &&
        this.state.blackRubberPrice !== null &&
        this.state.handlesPrice !== null &&
        this.state.casePrice !== null)
      {
        const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlesPrice + this.state.casePrice + parseFloat(this.state.shippingCost);
        return "$" + total + " | Add to Cart";
      } else {
        return "Finish the Combo";
      }
  }

  componentDidUpdate(){

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
              <span name="shipping">${this.state.shippingCost}</span>
              <input id="shipping" name="shipping" value={7.00} type="hidden" />
            </div>
          </div>
          <Button classN="">
            {
              this.getTotal()
            }
          </Button>
        </div>
      </div>
    )
  }
}


export default ShopCustom;
