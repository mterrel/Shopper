import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILED, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS } from "../ActionCreators/productActionCreators";


export const fetchProductsReducer = (state={products : []},{type,payload}) => {
    switch (type) {
        case FETCH_PRODUCT_REQUEST:
            return { loading: true, products: [] };
        case FETCH_PRODUCT_SUCCESS:
            return { loading: false, products: payload };
        case FETCH_PRODUCT_FAILED:
            return { loading: false, error: payload };
        default:
            return state;
    }
}

export const fetchSingleProductReducer = (state = {Product:{}}, { type, payload }) => {
    switch (type) {
        case FETCH_SINGLE_PRODUCT_REQUEST:
            return { loading: true, Product: {} };
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return { loading: false, Product: payload };
        case FETCH_SINGLE_PRODUCT_FAILED:
            return { loading: false, error: payload };
        default:
            return state
    }
}