import {
    ADD_ITEM_TO_CART_FAILURE,
    ADD_ITEM_TO_CART_REQUEST,
    ADD_ITEM_TO_CART_SUCCESS, CLEARE_CART_FAILURE, CLEARE_CART_REQUEST, CLEARE_CART_SUCCESS,
    FIND_CART_FAILURE,
    FIND_CART_REQUEST,
    FIND_CART_SUCCESS,
    GET_ALL_CART_ITEMS_FAILURE,
    GET_ALL_CART_ITEMS_REQUEST,
    GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE,
    REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS,
    UPDATE_CART_ITEM_FAILURE,
    UPDATE_CART_ITEM_REQUEST,
    UPDATE_CART_ITEM_SUCCESS
} from "./ActionType";
import axios from "axios";


export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({type: FIND_CART_REQUEST})
        try {
            const {data} = await axios.get(`/api/cart/`,
                {headers: {Authorization: `Bearer ${token}`}});
            dispatch({type: FIND_CART_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: FIND_CART_FAILURE, payload: err});
        }
    }
}


export const getAllCartItems = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_CART_ITEMS_REQUEST})
        try {
            const {data} = await axios.get(`/api/carts/${reqData.cartId}/items`,
                {headers: {Authorization: `Bearer ${reqData.token}`}});
            dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload: err});
        }
    }
}


export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({type: ADD_ITEM_TO_CART_REQUEST})
        try {
            const {data} = await axios.put(`/api/carts/add`, reqData.cartItem,
                {headers: {Authorization: `Bearer ${reqData.token}`}});
            dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: err});
        }
    }
}


export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_CART_ITEM_REQUEST})
        try {
            const {data} = await axios.put(`/api/cart-item/update`, reqData.data,
                {headers: {Authorization: `Bearer ${reqData.jwt}`}});
            dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: err});
        }
    }
}

export const removeCartItem = ({cartItemId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: REMOVE_CART_ITEM_REQUEST})
        try {
            const {data} = await axios.delete(`/api/cart-item/${cartItemId}/remove`,
                {headers: {Authorization: `Bearer ${jwt}`}});
            console.log('remove cart item : ', data)
            dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId});
        } catch (err) {
            console.log(err)
            dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: err});
        }
    }
}

export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({type: CLEARE_CART_REQUEST})
        try {
            const {data} = await axios.put(`/api/cart/clear`, {},
                {headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}});
            dispatch({type: CLEARE_CART_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: CLEARE_CART_FAILURE, payload: err});
        }
    }
}