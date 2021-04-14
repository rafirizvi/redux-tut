import { ADD_TO_CART } from "../constants/addToCartConst";
import addToCartStateInit from "../reduxStates/addToCartState";

let updateCart = (state,action)=>{
    return {
        ...state,
        cartData:action.data
    }
}
let cardItems=(state=addToCartStateInit,action)=>{
    // console.log('red',action.data);
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cartData:action.data
            }
           
           // console.log('reducer',action);
         // return updateCart(state,action)
        default:
            return state;
    }

}
export default cardItems;