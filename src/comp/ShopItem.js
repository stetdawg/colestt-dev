import React from 'react';
import ReactDOM from 'react-dom';


class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      modalToggle: false
    }
  }

  myAlert = () => {
    
    //while true
    while (this.modalToggle ) {
      return (      
        <h1>{(this.props.name + " was clicked")}</h1>
      )
    }  
  }

  render() {
    return(
      <div className="shop-item" onClick={this.myAlert}>
        <div><p className="item-name">{this.props.name}</p></div>
        <div><p className="item-price">{this.props.price}</p></div>
        <div><p className="item-weight">{this.props.weight}</p></div>
      </div>
    );
  }
}


export default ShopItem;
