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
      handlePrice: null,
      casePrice: null,
      comboPrice: null,
      shippingCost: 7.00
    }
  }

  // Handling the event changes, based on the options taken

  handleBladeChange(event){
    const eventValue = event.target.value;
    let targetSring = eventValue.split("$");

    // console.log("eventValue: ",eventValue); // returns the exact value selector
    // console.log("targetSring: ",targetSring);
    // console.log("targetSring[targetSring.length]: ",targetSring[targetSring.length-1]); // returns the item price

    if (eventValue !== null){
      this.setState({
        bladeName: targetSring[0].replace(" -- ", ""),
        bladePrice: parseFloat(targetSring[targetSring.length-1])
      })
    } else {
      this.setState({bladePrice: null});
    }
  }
  handleRedRubberChange(event){
    const eventValue = event.target.value;
    let targetSring = eventValue.split("$");
    if (eventValue !== null){
      this.setState({
        redRubberName: targetSring[0].replace(" -- ", ""),
        redRubberPrice: parseFloat(targetSring[targetSring.length-1])
      })
    } else {
      this.setState({redRubberPrice: null});
    }
  }
  handleBlackRubberChange(event){
    const eventValue = event.target.value;
    let targetSring = eventValue.split("$");
    if (eventValue !== null){
      this.setState({
        blackRubberName: targetSring[0].replace(" -- ", ""),
        blackRubberPrice: parseFloat(targetSring[targetSring.length-1])
      })
    } else {
      this.setState({blackRubberPrice: null});
    }
  }
  handleHandleChange(event){
    const eventValue = event.target.value;
    let targetSring = eventValue.split("$");
    if (eventValue !== null){
      this.setState({
        handleName: targetSring[0].replace(" -- ", ""),
        handlePrice: parseFloat(targetSring[targetSring.length-1])
      })
    } else {
      this.setState({handlePrice: null});
    }
  }
  handleCaseChange(event){
    const eventValue = event.target.value;
    let targetSring = eventValue.split("$");
    if (eventValue !== null){
      this.setState({
        caseName: targetSring[0].replace(" -- ", ""),
        casePrice: parseFloat(targetSring[targetSring.length-1])
      })
    } else {
      this.setState({casePrice: null});
    }
  }
  setTotal(){
    if (this.state.bladePrice !== null &&
      this.state.redRubberPrice !== null &&
      this.state.blackRubberPrice !== null &&
      this.state.handlePrice !== null &&
      this.state.casePrice !== null)
    {
      const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlePrice + this.state.casePrice + parseFloat(this.state.shippingCost);
      const itemID = this.state.bladeName + this.state.redRubberName + this.state.blackRubberName + this.state.handleName + this.state.caseName;
      this.setState({comboPrice: total, comboID: itemID});
    }
  }
  getTotal(){
    if (this.state.bladePrice !== null &&
        this.state.redRubberPrice !== null &&
        this.state.blackRubberPrice !== null &&
        this.state.handlePrice !== null &&
        this.state.casePrice !== null)
      {
        const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlePrice + this.state.casePrice + parseFloat(this.state.shippingCost);
        return "$" + total + " | Add to Cart";
        this.setTotal();
      } else {
        return "Finish the Combo";
      }
  }
  handleSubmit(e){
    const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlePrice + this.state.casePrice + parseFloat(this.state.shippingCost);
    const comboID = "B-" + this.state.bladeName + "R-" + this.state.redRubberName + "B-" + this.state.blackRubberName;
    const combo = {
      name: "Combo (" + this.state.bladeName + ", Red " + this.state.redRubberName + ", Black " + this.state.blackRubberName + ")",
      id: comboID,
      price: total
    };
    if (this.state.bladePrice !== null &&
      this.state.redRubberPrice !== null &&
      this.state.blackRubberPrice !== null &&
      this.state.handlePrice !== null &&
      this.state.casePrice !== null)
    {
      console.log("combo being sent: ", combo);
      this.props.handleAddToCart(e, combo);
      // this.state.comboPrice !== null ? this.props.handleAddToCart(e, {name: "combo", id: "combo", price: this.getTotal()}) : null
    } else {
      console.log("comboPrice is null");
    }
  }

  componentDidUpdate(){
    this.getTotal();
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
              { // Blades
                Merch.map(item => item.type === "Blades" ? <option>{item.name + "   --   $" + item.price}</option> : null)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Red Rubber">Red Rubbber: </label>
            <Select itemType="Red Rubber" classN="red-rubbers" onChange={(e) => this.handleRedRubberChange(e)}>
              <option selected></option>
                { // Rubbers
                  Merch.map(item => item.type === "Rubbers" ? <option>{item.name + "   --   $" + item.price}</option> : null)
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
                { // Rubbers
                  Merch.map(item => item.type === "Rubbers" ? <option>{item.name + "   --   $" + item.price}</option> : null)
                }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Black Rubber Thickness">Black Rubber Thickness: </label>
            <Text itemType="Black Rubber Thickness" />
          </div>
          <div className="combo-item-container">
            <label for="Handles">Handle: </label>
            <Select itemType="Handles" classN="handles" onChange={(e) => this.handleHandleChange(e)}>
              <option selected></option>
                { // Handles
                  Merch.map(item => item.type === "Handles" ? <option>{item.name + "   --   $" + item.price}</option> : null)
                }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Case">Case: </label>
            <Select itemType="Case" classN="case" onChange={(e) => this.handleCaseChange(e)}>
              <option selected></option>
                { // Cases
                  Merch.map(item => item.type === "Cases" ? <option>{item.name + "   --   $" + item.price}</option> : null)
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
          <Button onClick={(e) => this.handleSubmit(e)} classN="">
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
