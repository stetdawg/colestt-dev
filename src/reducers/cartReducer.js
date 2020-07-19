import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from '../actions/types';
import Merch from '../json/merchandise.json';

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  products: []
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT_CART:
      // let addQuantity = {...state.products[action.payloadName]};
      let newItem = {
        name: action.payloadName,
        price: action.payloadPrice,
        category: action.payloadCat,
        quantity: 1,
        inCart: true
      };

      let newProducts = state.products.concat(newItem); // concat
      console.log("newProducts: ", newProducts);
      return{
        cartNumbers: state.cartNumbers + 1,
        products: state.products.concat(newItem)// newProducts
      }
    case GET_NUMBERS_CART: // for the nav
      return {
        ...state
      }
    default:
      return state;
  }
}
