import React from 'react';
import ReactDOM from 'react-dom';



class ShopCustomItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <h1>Item: {this.props.name}</h1>
        <p className="item-price">${this.props.price}</p>
        <p className="item-weight">{this.props.weight} kg</p>
      </div>
    );
  }
}


export default ShopCustomItem;
