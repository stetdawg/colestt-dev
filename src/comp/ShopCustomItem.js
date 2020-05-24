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
      <h1>Item is: {this.props.name}</h1>
    );
  }
}


export default ShopCustomItem;
