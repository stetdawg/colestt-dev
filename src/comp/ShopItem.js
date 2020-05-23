import React from 'react';
import ReactDOM from 'react-dom';


class ShopItem extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="shop-item"> //onClick={() => alert(this.props.name + " was clicked")}
        <p className="item-name">{this.props.name}</p>
        <p className="item-price">{this.props.price}</p>
        <p className="item-weight">{this.props.weight}</p>
      </div>
    );
  }
}


export default ShopItem;
