import React,{Component} from 'react';
import merchandise from '../json/customitem.json';
import '../scss/special.scss'

const ComboItem = (props) =><>
<div className="combo-item-container">
<div className="thumbnail-container">
<img src={props.thumb} alt="." />
</div>
  
  <div className="info-panel">
    <h1 className="item-name">{props._name}</h1>
    <div className="item-desc">
      <p>{props.desc}</p>
    </div>
  </div>
  
  <div className="selection-panel">
    <div>
      <label for="blades">Blades:</label>
      <select className="item-blade" name="Blade" id="blades">
        <option value="" className="value">Air Koto</option>
        <option value="" className="value">Galaxy LQ-1</option>
        <option value="" className="value">Galaxy LQ-2</option>
      </select>
    </div>

    <div>    
      <label for="rubbers">Rubber:</label>
      <select className="item-rb" name="Rubber" id="rubbers">
        <option value="" className="value">Air TigerS</option>
        <option value="" className="value">Glove 888-1 w/ sponge</option>
        <option value="" className="value">Glove 889 w/ sponge</option>
      </select>
    </div>
  </div>

  <span>
  <p className="item-price">${props.price}</p>
  <p className="item-weight">{props.weight} kg</p>
  </span>
</div></>

class DisplaySpecials extends Component {
  constructor(props) {
    super(props)
    this.state = {

      //might implement scroll to next/prev time
      onScroll: false,
      scrollIndex: 0,
      stack: []
    }
    //binding this,  explicitly setting this to variables helps define their scope(?)
    this.myArray = merchandise.slice()
  }

  componentDidMount() {

  }

//The stack used to hold displayed components





  render() {

    return ( this.myArray.map(item =>
      <div className="panelChildren">
        <ComboItem {...item}/>
      </div>
    ))
  }
}





/*          Array of Object
step through array with .map    */



export default DisplaySpecials
