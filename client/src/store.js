import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"
import { fetchProductsReducer,fetchSingleProductReducer } from './Reducers/productReducer';

const reducer = combineReducers({
    fetchProducts: fetchProductsReducer,
    fetchSingleProduct:fetchSingleProductReducer
});

const initialState = {}
const middleware = [thunk]
const store = createStore(
     reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store