import React,{Component} from 'react';
import merchandise from '../json/customitem.json';
import HomeItems from './Items/HomeItems'

class DisplayHomeItems extends Component {
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
        <HomeItems {...item}/>
      </div>
    ))
  }
}





/*          Array of Object
step through array with .map    */



export default DisplayHomeItems
