import {CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS} from "../Order/ActionType";
import axios from "axios";
import {
    CREATE_INGREDIENT_CATEGORY_FAILURE,
    CREATE_INGREDIENT_CATEGORY_REQUEST,
    CREATE_INGREDIENT_CATEGORY_SUCCESS,
    CREATE_INGREDIENT_FAILURE,
    CREATE_INGREDIENT_REQUEST,
    CREATE_INGREDIENT_SUCCESS,
    GET_INGREDIENT_CATEGORY_FAILURE,
    GET_INGREDIENT_CATEGORY_REQUEST,
    GET_INGREDIENT_CATEGORY_SUCCESS,
    GET_INGREDIENTS, UPDATE_STOCK
} from "./ActionType";
import {API_URL} from "../../config/api";

export const getIngredientsOfRestaurant = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`${API_URL}/api/admin/ingredients/restaurants/${id}`,
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: GET_INGREDIENTS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: CREATE_ORDER_FAILURE, payload: err});
        }
    }
}


export const createIngredient = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_REQUEST});
        try {
            const {data} = await axios.post(`${API_URL}/api/admin/ingredients`, reqData,
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: CREATE_INGREDIENT_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: CREATE_INGREDIENT_FAILURE, payload: err});
        }
    }
}


export const createIngredientCategory = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_INGREDIENT_CATEGORY_REQUEST});
        try {
            console.log('create ingredient category, ', reqData)
            const {data} = await axios.post(`${API_URL}/api/admin/ingredients/category`, reqData,
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: err});
        }
    }
}


export const getIngredientCategory = ({id, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_INGREDIENT_CATEGORY_REQUEST});
        try {
            const {data} = await axios.get(`${API_URL}/api/admin/ingredients/restaurants/${id}/category`,
                {headers: {Authorization: `Bearer ${jwt}`}});

            dispatch({type: GET_INGREDIENT_CATEGORY_SUCCESS, payload: data});
        } catch (err) {
            console.log(err)
            dispatch({type: GET_INGREDIENT_CATEGORY_FAILURE, payload: err});
        }
    }
}


export const updateStockOfIngredient = ({id, jwt}) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.put(`${API_URL}/api/admin/ingredients/${id}/stoke`,{},
                {headers: {Authorization: `Bearer ${jwt}`}});
            dispatch({type: UPDATE_STOCK, payload: data});
        } catch (err) {
            console.log(err)
        }
    }
}

