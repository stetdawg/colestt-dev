import { ADD_PRODUCT_CART } from './types';

export const addCart = (productName, productPrice = null, productCat = null) => {
  return(dispatch) => {
    console.log("Adding to cart");
    console.log("ProdName: ", productName);
    console.log("ProdPrice: ", productPrice);
    console.log("ProdCat: ", productCat);
    dispatch({
      type: ADD_PRODUCT_CART,
      payloadName: productName,
      payloadPrice: productPrice,
      payloadCat: productCat,
    })
  }
}
