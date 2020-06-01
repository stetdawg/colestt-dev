import React,{Component} from 'react';
import DisplayComboItem from './ComboItem';
import '../css/shop-custom.css'


 


class ShopCustom extends Component{
  constructor(props){
    super(props);
    this.state = {
      didScroll: false,

    }

  }
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
      <div  className="contentPanel">
      <h1 id="combo">Combos</h1>
      <DisplayComboItem />
        </div>
    )
  }
}


export default ShopCustom;
