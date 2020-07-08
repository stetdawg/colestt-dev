import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from '../actions/types';
import Merch from '../json/merchandise.json';

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  products: {...Merch}
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_PRODUCT_CART:
      // let addQuantity = {...state.products[action.payloadName]}
      return{
        cartNumbers: state.cartNumbers + 1
      }
    case GET_NUMBERS_CART:
      return {
        ...state
      }
    default:
      return state;
  }
}
