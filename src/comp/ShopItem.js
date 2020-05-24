import React from 'react';
import ReactDOM from 'react-dom';


class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      modalToggle: true,
      randomValue: "hello"
    }
  }

  myAlert = (props) => {

    //while true
    while (this.modalToggle) {
      return (
        <h1>{props + " was clicked"}</h1>
      )
    }
  }

  render() {
    return(
      <div className="shop-item" onClick={this.myAlert(this.props.name)}>
        <p className="item-name">{this.props.name}</p>
        <p className="item-price">${this.props.price}</p>
        <p className="item-weight">{this.props.weight} kg</p>
      </div>
    );
  }
}


export default ShopItem;
