import {
    CREATE_MENU_ITEM_FAILURE,
    CREATE_MENU_ITEM_REQUEST,
    CREATE_MENU_ITEM_SUCCESS,
    DELETE_MENU_ITEM_FAILURE,
    DELETE_MENU_ITEM_REQUEST,
    DELETE_MENU_ITEM_SUCCESS,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST,
    GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS,
    SEARCH_MENU_ITEM_FAILURE,
    SEARCH_MENU_ITEM_REQUEST,
    SEARCH_MENU_ITEM_SUCCESS,
    UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE,
    UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST,
    UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS
} from "./ActionType";
import axios from "axios";

export const createMenuItem = ({menu, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_MENU_ITEM_REQUEST})
        try {
            const {data} = await axios.post(`api/admin/food`, menu,
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: CREATE_MENU_ITEM_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: CREATE_MENU_ITEM_FAILURE, payload: err});
        }
    }
}


export const getMenuItemsByRestaurantId = ({reqData}) => {
    return async (dispatch) => {
        dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST})
        try {
            const {data} = await axios.get(`/api/food/restaurant/${reqData.restaurantId}
            &vegetarian=${reqData.vegetarian}&nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}
            &food_category=${reqData.foodCategory}`,
                {headers: {Authorization: `Bearer ${reqData.jwt}`}});

            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, payload: err});
        }
    }
}

export const searchMenuItem = ({keyword, jwt}) => {
    return async (dispatch) => {
        dispatch({type: SEARCH_MENU_ITEM_REQUEST})
        try {
            const {data} = await axios.get(`api/food/search?name=${keyword}`,
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: SEARCH_MENU_ITEM_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: SEARCH_MENU_ITEM_FAILURE, payload: err});
        }
    }
}


export const updateMenuItemsAvailability = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_REQUEST})
        try {
            const {data} = await axios.put(`/api/admin/food/${foodId}`,
                {},
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: UPDATE_MENU_ITEMS_AVAILABILITY_FAILURE, payload: err});
        }
    }
}


export const deleteFoodAction = ({foodId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_MENU_ITEM_REQUEST})
        try {
            const {data} = await axios.delete(`/api/admin/food/${foodId}`,
                {headers: {Authorization: `Bearer ${jwt}`}});
            console.log('data delete food: ', data)
            dispatch({type: DELETE_MENU_ITEM_SUCCESS, payload: foodId});
        } catch (err) {
            console.log(err)
            dispatch({type: DELETE_MENU_ITEM_FAILURE, payload: err});
        }
    }
}
