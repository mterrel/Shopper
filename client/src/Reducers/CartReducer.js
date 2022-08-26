import { CART_ADD_ITEM } from "../ActionCreators/CartActionCreator";


export const CartReducer = (state = {cartItems:[]}, { type, payload }) => {
    switch (type) {
        case CART_ADD_ITEM:
            const item = payload;
            const itemExist = state.cartItems.find(x => x.product === item.product);
            if (itemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === itemExist.product? item : x)
                }
             } else {
                return {
                    ...state,
                    cartItems:[...state.cartItems,item]
                    
                }
            }
        default:
            return state;
    }
}