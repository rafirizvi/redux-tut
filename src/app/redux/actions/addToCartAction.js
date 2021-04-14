import {ADD_TO_CART} from '../constants/addToCartConst'
export const addToCart = (data)=>{
     // console.log('action',data);
    return {
        type:ADD_TO_CART,
        data
    }
}