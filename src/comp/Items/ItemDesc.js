import React,{Component} from 'react';

import Button from '../Elements/Button'
import Select from '../Elements/Select'




class ItemDesc extends Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: 'black',
      itemPrice : this.props.price
    };
  }

  handleChange(event) {

    // doubles the price if both colors are selected
    if(event.target.value === "both"){
      this.setState({value: event.target.value, itemPrice: this.props.price * 2});
    } else {
      this.setState({value: event.target.value, itemPrice: this.props.price});
    }
  }

  outputPrice = () => {
    return(this.state.itemPrice);
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
  // } // add this to the render when you wanna call upon the weight -> {this.checkWeight(this.props.weight)}

  //virtualization, render only what the user can see.
  componentDidMount() {
    //scroll listener?
    }
  componentWillUnmount() {
    //destroy scroll
  }
  /* TODO
    For the time being i removed the wrappers such as 'shop-custom',
    and 'form'. I need the contents to be direct children of the grid (contentPanel).
    This is necessary to position the selections in the grid directly.

    If you can map each item to have a form around it i can work with that



       {merchandise.map(item => (<>
                {this.displayCustomItem(item.name, item.desc, item.price, item.weight, item.thumb, item.blade, item.Rubber.Black)}
            </>
            ))}
    */
  render() {

    return(
      <article  className={this.props.version}>
        <div className="item-media">
          <img src={this.props.thumb} alt={this.props.name}/>
        </div>
        <span className="item-name"><b>Testing:</b> {this.props.name}</span>
        <div className="item-rubber item-var">
          <span>Colors: </span>
          <Select value={this.state.value} itemType="Color" onChange={this.handleChange}>
            <option value="red">Red</option>
            <option value="black">Black</option>
            <option value="both">Both</option>
          </Select>
          {/* you can add more <span> and <select tags as needed */}
        </div>
        <span className="item-description">{this.props.desc}<br/><br/><h1>The rest is just the description printed enough more times so that you can see the screen scroll.</h1><br/><br/>{this.props.desc}<br/><br/>{this.props.desc}<br/><br/>{this.props.desc}<br/><br/>{this.props.desc}<br/><br/>{this.props.desc}<br/><br/>{this.props.desc}</span>
        <span className="item-price">
          <Button classN="item-btn"><span>${this.outputPrice()} | </span>Add to Cart</Button>
        </span>
      </article>
    )
  }
}


export default ItemDesc;
