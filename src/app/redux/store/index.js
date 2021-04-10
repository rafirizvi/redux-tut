import {createStore} from 'redux'
import RootReducer from '../reducers/index'
const Store = createStore(RootReducer);
export default Store;