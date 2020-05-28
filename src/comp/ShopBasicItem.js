// react
import React from 'react';
import ReactDOM from 'react-dom';

// css
import '../css/shop-basic-item.css';

// assets

// components


class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {

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
  }

  render(){
    return(
      <a className="shop-item" onClick={this.props.onClick}>
        <div className="item-media">
          <img src={this.props.thumb} />
        </div>
        <span className="item-name">{this.props.name}</span>
        <span className="item-price">${this.props.price}</span>
        {this.checkWeight(this.props.weight)}
        <button className="item-btn">Add to Cart</button>
      </a>
    );
  }
}


export default ShopItem;
