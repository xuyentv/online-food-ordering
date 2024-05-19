import axios from "axios";
import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS, GET_USERS_ORDERS_FAILURE,
    GET_USERS_ORDERS_REQUEST,
    GET_USERS_ORDERS_SUCCESS
} from "./ActionType";
import {API_URL} from "../../config/api";

export const createOrder = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_ORDER_REQUEST})
        try {
            const {data} = await axios.post(`${API_URL}/api/order`, reqData.order,
                {headers: {Authorization: `Bearer ${reqData.jwt}`}});
            if(data?.payment_url){
                window.location.href = data.payment_url;
            }
            dispatch({type: CREATE_ORDER_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: CREATE_ORDER_FAILURE, payload: err});
        }
    }
}


export const getUsersOrders = (jwt) => {
    return async (dispatch) => {
        dispatch({type: GET_USERS_ORDERS_REQUEST})
        try {
            const {data} = await axios.get(`${API_URL}/api/order/user`,
                {headers: {Authorization: `Bearer ${jwt}`}});
            dispatch({type: GET_USERS_ORDERS_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: GET_USERS_ORDERS_FAILURE, payload: err});
        }
    }
}