import { ADD_PRODUCT_CART } from './types';

export const addCart = (productName, productCat) => {
  return(dispatch) => {
    console.log("Adding to cart");
    console.log("ProdName: ", productName);
    console.log("ProdCat: ", productCat);
    dispatch({
      type: ADD_PRODUCT_CART,
      payloadName: productName,
      payloadCat: productCat,
    })
  }
}
