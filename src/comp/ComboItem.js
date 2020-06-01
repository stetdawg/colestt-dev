import React,{Component} from 'react';
import merchandise from '../json/customitem.json';

 
const ComboItem = (props) =><>   
<img src={props.thumb} alt="." />
<div className="side-panel">
  <h1 className="item-name">Item: <b style={{textDecoration: "underline"}}>Custom</b> {props._name}</h1>
  <p className="item-desc">{props.desc}</p>
</div>
<p className="item-price">${props.price}</p>
<p className="item-weight">{props.weight} kg</p>



  <div id="selection-panel">
    <label for="blades">Blades:</label>
    <select className="item-blade" name="Blade" id="blades">
      <option value="" className="value">Air Koto</option>
      <option value="" className="value">Galaxy LQ-1</option>
      <option value="" className="value">Galaxy LQ-2</option>
    </select>
  </div>

  <div id="selection-panel">
    <label for="rubbers">Rubber:</label>
    <select className="item-rb" name="Rubber" id="rubbers">
      <option value="" className="value">Air TigerS</option>
      <option value="" className="value">Glove 888-1 w/ sponge</option>
      <option value="" className="value">Glove 889 w/ sponge</option>
    </select>
  </div>

  <button> </button>
</>

class DisplayComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onScroll: false,
      scrollIndex: 0,
      array: merchandise
    }
    this.stateArray = this.state.array
  }

  componentDidMount() {

  }

  onScroll() {
  }
  
//holy fuck i got it to work
  Display = (k, i) => {
    const obj = Object.values(k)
    //copy array
    const a = obj[i]
    //pop last item
    console.log(a)
    return <ComboItem 
             {...a}
             />
  }



  

  render() {

    return this.Display(this.stateArray, 1)

  }
}





/*          Array of Object 
step through array with .map    */



export default DisplayComboItem


