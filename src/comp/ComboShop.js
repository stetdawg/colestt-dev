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
      didScroll: false,

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


  handleChange = (event) => {

    for (let i = 0; i < event.target.children("option").length; i++){
      //if option[i]
      console.log(event.target.children("option").value);
      //json[i].price
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
            <Select itemType="Blade" classN="blades" onChange={(e) => handleChange(e)}>
              {
                Blades.map(item => <option>
                  {item.name + " ($" + item.price + ")"}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Red Rubber">Red Rubbber: </label>
            <Select itemType="Red Rubber" classN="red-rubbers">
              {
                Rubbers.map(item => <option>
                  {item.name}
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
            <Select itemType="Black Rubber" classN="black-rubbers">
              {
                Rubbers.map(item => <option>
                  {item.name}
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
            <Select itemType="Handles" classN="handles">
              {
                Handles.map(item => <option>
                  {item.name}
                </option>)
              }
            </Select>
          </div>
          <div className="combo-item-container">
            <label for="Case">Case: </label>
            <Select itemType="Case" classN="case">
              {
                Cases.map(item => <option>
                  {item.name}
                </option>)
              }
            </Select>
          </div>
          <Button classN="">Buy Now</Button>
        </div>
      </div>
    )
  }
}


export default ShopCustom;
