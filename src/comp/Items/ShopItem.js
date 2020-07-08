// react
import React from 'react'
//import ReactDOM from 'react-dom'
//import ItemDesc from './ItemDesc'; // Keep this to link to the ItemDesc

// css
import '../../scss/shop-item.scss'

// assets
import Button from '../Elements/Button'
import Select from '../Elements/Select'

// components

class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayImage : true,
      bothSelected : false,
      selectedColor: "red"
    }
  }

  // checkWeight = (weight) => {
  //   if (weight < 1){
  //     // weight is greater than 0
  //     return(<span className="item-weight" style={{color: "#ABABAB"}}>{this.props.weight} kg</span>);
  //   } else if (weight >= 1 && weight < 2) {
  //     // weight is greater than 1
  //     return(<span className="item-weight" style={{color: "#777"}}>{this.props.weight} kg</span>);
  //   } else if (weight >= 2) {
  //     // weight is greater than 1
  //     return(<span className="item-weight" style={{color: "#090909"}}>{this.props.weight} kg</span>);
  //   }
  // } // {this.checkWeight(this.props.weight)}

  toggleImgDesc(){
    if (this.state.displayImage === true){
      return(
          <img src={this.props.thumb} alt={this.props._name}/>
      );
      // this.setState({displayImage : false});
    } else {
      return(
          <div className="item-desc"><p>{this.props.desc}</p></div>
      );
      // this.setState({displayImage : true});
    }
  }

  selectVars(){
    if (this.props.itemType === "rubbers"){
      return(
        <>
        <span>Colors: </span>
        <Select itemType="Color" onChange={(e) => this.handleSelectBoxChange(e)}>
          <option value="red">Red</option>
          <option value="black">Black</option>
          {/* <option value="both">Both</option> */}
        </Select>
        </>
      )
    }
  }

  handleSelectBoxChange (event) {
    if (event.target.value === "both"){
      this.setState({
        bothSelected : true,
        selectedColor: event.target.value
      });
    } else {
      this.setState({
        bothSelected : false,
        selectedColor: event.target.value
      });
    }
  }

  outputPrice () {
    //this.state.bothSelected === false ? console.log("BS is false") : console.log("BS is true");
    //return(this.state.itemPrice || this.props.price);

    if (this.state.bothSelected === false){
      return (this.props.price);
    } else {
      return (this.props.price * 2);
    }
  }

  toggleDescCounter(){

    if (this.state.displayImage === true){
      this.setState({displayImage : false});
    }else{
      this.setState({displayImage : true});
    }


    // link to colestt.com/shop/AirTiger <ItemDesc />
  }

  sendData(childName, childCat) {
    this.props.onClick(childName, childCat);
  }

  render(){
    // console.log(this.props)
    return(
      <div className="shop-item"> {/* used to be <a> tag, but got an error */}
        <div className="item-media" onClick={() => {this.toggleDescCounter()} /*this.props.onClick*/}>
          {this.toggleImgDesc()}
        </div>
        <span className="item-name">{this.props._name}</span>
        <div className="item-var">
          {this.selectVars()}
          {/* you can add more <span> and <select tags as needed */}
        </div>
        <Button
          onClick={() => this.sendData(this.props._name, this.state.selectedColor)}
          classN="item-btn"><span className="item-price"
          >
          ${this.outputPrice()}</span> | Add to Cart
        </Button>
      </div>
    );
  }
}


export default ShopItem;
