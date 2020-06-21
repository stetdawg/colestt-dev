// react
import React from 'react';
import ReactDOM from 'react-dom';
import ItemDesc from './ItemDesc';

// css
import '../../scss/shop-item.scss';

// assets

// components

class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayImage : true,
      bothSelected : false
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
    if (this.state.displayImage == true){
      return(
          <img src={this.props.thumb} />
      );
      // this.setState({displayImage : false});
    } else {
      return(
          <div className="item-desc"><p>{this.props.desc}</p></div>
      );
      // this.setState({displayImage : true});
    }
  }

  handleSelectBoxChange (event) {
    if (event.target.value == "both"){
      console.log("it's both");
      this.setState({bothSelected : true});
    } else {
      console.log("it's red or black");
      this.setState({bothSelected : false});
    }
  }

  outputPrice () {
    //this.state.bothSelected == false ? console.log("BS is false") : console.log("BS is true");
    //return(this.state.itemPrice || this.props.price);

    if (this.state.bothSelected == false){
      return (this.props.price);
    } else {
      return (this.props.price * 2);
    }
  }

  toggleDescCounter(){

    if (this.state.displayImage == true){
      this.setState({displayImage : false});
    }else{
      this.setState({displayImage : true});
    }


    // link to colestt.com/shop/AirTiger <ItemDesc />
  }

  render(){
    return(
      <a className="shop-item">
        <div className="item-media" onClick={() => {this.toggleDescCounter()} /*this.props.onClick*/}>
          {this.toggleImgDesc()}
        </div>
        <span className="item-name">{this.props.name}</span>
        <div className="item-var">
          <span>Colors: </span>
          <select onChange={(e) => this.handleSelectBoxChange(e)}>
            <option value="red" selected>Red</option>
            <option value="black">Black</option>
            <option value="both">Both</option>
          </select>
          {/* you can add more <span> and <select tags as needed */}
        </div>
        <button className="item-btn"><span className="item-price">${this.outputPrice()}</span> | Add to Cart</button> {/*adds to the cart, without having to check big description */}
      </a>
    );
  }
}


export default ShopItem;
