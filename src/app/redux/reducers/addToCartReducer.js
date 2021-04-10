import { ADD_TO_CART } from "../constants/addToCartConst";
import addToCartStateInit from "../reduxStates/addToCartState";

let updateCart = (state,action)=>{
    return {
        ...state,
        ...action.data
    }
}
let cardItems=(state=addToCartStateInit,action)=>{
    switch(action.type){
        case ADD_TO_CART:
           // console.log('reducer',action);
            return updateCart(state,action)
        default:
            return state;
    }

}
export default cardItems;