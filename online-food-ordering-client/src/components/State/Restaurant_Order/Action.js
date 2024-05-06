import {CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../Order/ActionType";
import axios from "axios";
import {
    GET_RESTAURANTS_ORDER_FAILURE,
    GET_RESTAURANTS_ORDER_REQUEST, GET_RESTAURANTS_ORDER_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS
} from "./ActionType";

export const updateOrderStatus = ({orderId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_ORDER_STATUS_REQUEST})
        try {
            const {data} = await axios.put(`/api/admin/orders${orderId}/${orderStatus}`, {},
                {headers: {Authorization: `Bearer ${jwt}`}});
            dispatch({type: UPDATE_ORDER_STATUS_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: UPDATE_ORDER_STATUS_FAILURE, payload: err});
        }
    }
}


export const fetchRestaurantsOrder = ({restaurantId, orderStatus, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_ORDER_REQUEST})
        try {
            const {data} = await axios.get(`/api/admin/order/restaurant/${restaurantId}`, {
                    params: {order_status: orderStatus}
                },
                {headers: {Authorization: `Bearer ${jwt}`}});
            dispatch({type: GET_RESTAURANTS_ORDER_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: GET_RESTAURANTS_ORDER_FAILURE, payload: err});
        }
    }
}

