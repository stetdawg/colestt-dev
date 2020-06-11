// react
import React from 'react';
import ReactDOM from 'react-dom';
import DisplayComboItem from './ComboItem';
import ItemDesc from './ItemDesc';

// css
import '../scss/shop-basic-item.scss';

// assets

// components

class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayImage : true
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

  toggleDecCounter(){

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
        <div className="item-media" onClick={() => {this.toggleDecCounter()} /*this.props.onClick*/}>
          {this.toggleImgDesc()}
        </div>
        <span className="item-name">{this.props.name}</span>
        <span className="item-price">${this.props.price}</span>
        <button className="item-btn">Add to Cart</button> {/*adds to the cart, without having to check big description */}
      </a>
    );
  }
}


export default ShopItem;
