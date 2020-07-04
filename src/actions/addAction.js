import { ADD_PRODUCT_CART } from './types';

export const addCart = (productName, productCat) => {
  return(dispatch) => {
    console.log("Adding to cart");
    console.log("Product: ", productName);
    dispatch({
      type: ADD_PRODUCT_CART,
      payload: productName
    })
  }
}
