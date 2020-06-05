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

<button onClick={props.onPrev}>Prev</button>


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
  <button onClick={props.onNext}>Next</button>

</>

class DisplayComboItem extends Component {
  constructor(props) {
    super(props)
    this.state = {

      //might implement scroll to next/prev time
      onScroll: false,
      scrollIndex: 0,
      stack: [] 
    }

    //binding this,  explicitly setting this to variables helps define their scope(?)
    this.handleNext = this.handleNextClick.bind(this)
    this.handlePrev = this.handlePrevClick.bind(this)

    this.myArray = Object.values(merchandise).slice()
    this.stack = this.state.stack
    this.stack.push(this.myArray.pop())

  }

  componentDidMount() {
  
  }

  handleNextClick() {
  /*A Stack is LiF0 (Last-In First-Out): This means the last element added to the stack will be the first one to be popped 
  The next button will then:
  1. Pop from the stack
  2. Pop from the array
  3. Push returned array item to stack
  3. Push returned stack item to the array
  */
   const sPop = this.stack.pop()
   this.myArray.unshift(sPop)
   const aPop = this.myArray.pop()
   this.setState({
    stack: this.stack.push(aPop)

   })
   console.log(this.stack)
  }



  handlePrevClick() {
    /*A Stack is LiF0 (Last-In First-Out): This means the last element added to the stack will be the first one to be popped 
    The back button will then:
    1. Shift from the array
    2. Pop from the stack
    3. Push returned array item to stack
    3. Push returned stack item to the array
    */
    const aShift = this.myArray.shift()
    const sPop = this.stack.pop()
    this.setState({
      stack: this.stack.push(aShift)
     })
    this.myArray.push(sPop) 
  }



  
//The stack used to hold displayed components
  Display = (k, i) => {
    //copy array
    const a = k[i]
    return <ComboItem 
             {...a}
             onNext={this.handleNext}
             onPrev={this.handlePrev}
             />
  }



  

  render() {

    return this.Display(this.stack, 0)

  }
}





/*          Array of Object 
step through array with .map    */



export default DisplayComboItem


