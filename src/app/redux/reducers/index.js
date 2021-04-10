import {combineReducers} from 'redux'
import cardItems from './addToCartReducer'
const RootReducer = combineReducers ({
    cardItems:cardItems
})

export default RootReducer;