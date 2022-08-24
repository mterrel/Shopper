import axios from "axios"
import { FETCH_PRODUCT_FAILED, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_SINGLE_PRODUCT_FAILED, FETCH_SINGLE_PRODUCT_REQUEST, FETCH_SINGLE_PRODUCT_SUCCESS } from "../ActionCreators/productActionCreators"


export const fetchProductsAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: FETCH_PRODUCT_REQUEST });
        const { data } = await axios.get("/api/products");

        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });

        localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILED, payload: error.response.data.message })
        // console.log("error",error.response.data)
    }
}
export const fetchSIngleProductAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FETCH_SINGLE_PRODUCT_REQUEST });

        const { data } = await axios.get(`/api/products/${id}`);
        // console.log("data",data)
        dispatch({ type: FETCH_SINGLE_PRODUCT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: FETCH_SINGLE_PRODUCT_FAILED, payload: error.response.data.message })
        // console.log("error",error.response.data)
    }
}