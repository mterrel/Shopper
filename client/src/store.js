import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { CartReducer } from './Reducers/CartReducer';
import { fetchProductsReducer,fetchSingleProductReducer } from './Reducers/productReducer';

const reducer = combineReducers({
    fetchProducts: fetchProductsReducer,
    fetchSingleProduct: fetchSingleProductReducer,
    cart:CartReducer
});

const cartItemsFromStorage = localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]
const initialState = {
    cart:{cartItems:cartItemsFromStorage}
}
const middleware = [thunk]
const store = createStore(
     reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store