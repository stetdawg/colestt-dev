import React,{Component} from 'react';


import Button from './Elements/Button'
import Select from './Elements/Select'
import Text from './Elements/Text'

// jsons
import Blades from '../json/blades.json'
import Rubbers from '../json/rubbers.json'
import Handles from '../json/handles.json'
import Cases from '../json/cases.json'

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
  /* TODO
    For the time being i removed the wrappers such as 'shop-custom',
    and 'form'. I need the contents to be direct children of the grid (contentPanel).
    This is necessary to position the selections in the grid directly.

    If you can map each item to have a form around it i can work with that



       {merchandise.map(item => (<>
                {this.displayCustomItem(item.name, item.desc, item.price, item.weight, item.thumb, item.blade, item.Rubber.Black)}
            </>
            ))}
    */


  handleBladeChange(event){

    // console.log("The selected child is: " + event.target.selectedIndex);         // find the index of the selected child

    // console.log("The price is: $" + Blades[event.target.selectedIndex].price);   // finds the price of the selected child
    if (event.target.selectedIndex != 0){
      this.setState({bladePrice : Blades[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({bladePrice : null});
    }
    // this.getTotal();
  }


  handleRedRubberChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({redRubberPrice : Rubbers[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({redRubberPrice : null});
    }
    // this.getTotal();
  }


  handleBlackRubberChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({blackRubberPrice : Rubbers[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({blackRubberPrice : null});
    }
    // this.getTotal();
  }


  handleHandleChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({handlesPrice : Handles[event.target.selectedIndex - 1].price}); // updates the state with that new value
    } else {
      this.setState({handlesPrice : null});
    }
    // this.getTotal();
  }


  handleCaseChange(event){
    if (event.target.selectedIndex != 0){
      this.setState({casePrice : Cases[event.target.selectedIndex].price}); // updates the state with that new value
    } else {
      this.setState({casePrice : null});
    }
    // this.getTotal();
  }


  getTotal(){
    const shipping = 2.99;
    const total = this.state.bladePrice + this.state.redRubberPrice + this.state.blackRubberPrice + this.state.handlesPrice + this.state.casePrice;
    // console.log("shipping: " + shipping);
    console.log("The total is: " + total);
    return total;
  }

  printTotal(){
    return;
  }

  componentDidUpdate(){
    if (this.state.bladePrice != null &&
        this.state.redRubberPrice != null &&
        this.state.blackRubberPrice != null &&
        this.state.handlesPrice != null &&
        this.state.casePrice != null)
    {
      console.log("The state is full");
      this.getTotal();
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
                Blades.map(item => <option>
                  {item.name + " ($" + item.price + ")"}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Red Rubber">Red Rubbber: </label>
            <Select itemType="Red Rubber" classN="red-rubbers" onChange={(e) => this.handleRedRubberChange(e)}>
              <option selected></option>
              {
                Rubbers.map(item => <option>
                  {item.name + " ($" + item.price + ")"}
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
                Rubbers.map(item => <option>
                  {item.name + " ($" + item.price + ")"}
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
                Handles.map(item => <option>
                  {item.name + " ($" + item.price + ")"}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Case">Case: </label>
            <Select itemType="Case" classN="case" onChange={(e) => this.handleCaseChange(e)}>
              <option selected></option>
              {
                Cases.map(item => <option>
                  {item.name + " ($" + item.price + ")"}
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
            { this.getTotal() == null ? "Finish selecting your combo to generate your price" : "$" + this.getTotal() + " | Buy Now" }
          </Button>
        </div>
      </div>
    )
  }
}


export default ShopCustom;
