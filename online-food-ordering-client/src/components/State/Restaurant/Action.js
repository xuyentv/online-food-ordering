import {
    CREATE_CATEGORY_FAILURE,
    CREATE_CATEGORY_REQUEST,
    CREATE_CATEGORY_SUCCESS,
    CREATE_EVENTS_FAILURE,
    CREATE_EVENTS_REQUEST,
    CREATE_EVENTS_SUCCESS,
    CREATE_RESTAURANT_FAILURE,
    CREATE_RESTAURANT_REQUEST,
    CREATE_RESTAURANT_SUCCESS,
    DELETE_EVENTS_FAILURE,
    DELETE_EVENTS_REQUEST,
    DELETE_EVENTS_SUCCESS,
    DELETE_RESTAURANT_FAILURE,
    DELETE_RESTAURANT_REQUEST,
    DELETE_RESTAURANT_SUCCESS,
    GET_ALL_EVENTS_FAILURE,
    GET_ALL_EVENTS_REQUEST,
    GET_ALL_EVENTS_SUCCESS,
    GET_ALL_RESTAURANTS_FAILURE,
    GET_ALL_RESTAURANTS_REQUEST,
    GET_ALL_RESTAURANTS_SUCCESS,
    GET_RESTAURANT_BY_ID_FAILURE,
    GET_RESTAURANT_BY_ID_REQUEST,
    GET_RESTAURANT_BY_ID_SUCCESS,
    GET_RESTAURANTS_CATEGORY_FAILURE,
    GET_RESTAURANTS_CATEGORY_REQUEST,
    GET_RESTAURANTS_CATEGORY_SUCCESS,
    GET_RESTAURANTS_EVENTS_REQUEST,
    UPDATE_RESTAURANT_STATUS_FAILURE,
    UPDATE_RESTAURANT_STATUS_REQUEST,
    UPDATE_RESTAURANT_STATUS_SUCCESS
} from "./ActionType";
import {api} from "../../config/api";

export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_RESTAURANTS_REQUEST})
        try {
            const {data} = await api.get('/api/restaurants', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({type: GET_ALL_RESTAURANTS_SUCCESS, payload: data});
            console.log('getAllRestaurants: ', data)
        } catch (err) {
            dispatch({type: GET_ALL_RESTAURANTS_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANT_BY_ID_REQUEST})
        try {
            const {data} = await api.get(`/api/restaurants/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`
                }
            })
            dispatch({type: GET_RESTAURANT_BY_ID_SUCCESS, payload: data});
            console.log('getRestaurantById: ', data)
        } catch (err) {
            dispatch({type: GET_RESTAURANT_BY_ID_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({type: CREATE_RESTAURANT_REQUEST})
        try {
            const {data} = await api.post(`/api/admin/restaurant`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`
                }
            })
            dispatch({type: CREATE_RESTAURANT_SUCCESS, payload: data});
            console.log('createRestaurant: ', data)
        } catch (err) {
            dispatch({type: CREATE_RESTAURANT_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const updateRestaurant = ({restaurantId, restaurantData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST})
        try {
            const {data} = await api.put(`/api/admin/restaurant/${restaurantId}`,
                restaurantData, {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: data});
            console.log('updateRestaurant: ', data)
        } catch (err) {
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const deleteRestaurant = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_RESTAURANT_REQUEST})
        try {
            const {data} = await api.delete(`/api/admin/restaurant/${restaurantId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: DELETE_RESTAURANT_SUCCESS, payload: data});
            console.log('deleteRestaurant: ', data)
        } catch (err) {
            dispatch({type: DELETE_RESTAURANT_FAILURE, payload: err});
            console.log(err)
        }
    }
}

export const updateRestaurantStatus = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: UPDATE_RESTAURANT_STATUS_REQUEST})
        try {
            const res = await api.put(`/api/admin/restaurant/${restaurantId}/status`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data});
            console.log('updateRestaurantStatus: ', res.data)
        } catch (err) {
            dispatch({type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const createEventAction = ({data, jwt, restaurantId}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_EVENTS_REQUEST})
        try {
            const res = await api.post(`/api/admin/restaurant/${restaurantId}`, data,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: CREATE_EVENTS_SUCCESS, payload: res.data});
            console.log('createEventAction: ', res.data)
        } catch (err) {
            dispatch({type: CREATE_EVENTS_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const getAllEvents = ({jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_ALL_EVENTS_REQUEST})
        try {
            const res = await api.get(`/api/events`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload: res.data});
            console.log('getAllEvents: ', res.data)
        } catch (err) {
            dispatch({type: GET_ALL_EVENTS_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const deleteEventAction = ({eventId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: DELETE_EVENTS_REQUEST})
        try {
            const res = await api.delete(`/api/admin/events/${eventId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: DELETE_EVENTS_SUCCESS, payload: eventId});
            console.log('deleteEventAction: ', res.data)
        } catch (err) {
            dispatch({type: DELETE_EVENTS_FAILURE, payload: err});
            console.log(err)
        }
    }
}


export const getRestaurantsEvents = ({restaurantId, jwt}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST})
        try {
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST, payload: res.data});
            console.log('getRestaurantsEvents: ', res.data)
        } catch (err) {
            dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST, payload: err});
            console.log(err)
        }
    }
}

export const createCategoryAction = ({reqData, jwt}) => {
    return async (dispatch) => {
        dispatch({type: CREATE_CATEGORY_REQUEST})
        try {
            const res = await api.post(`/api/admin/category`,
                reqData,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: CREATE_CATEGORY_SUCCESS, payload: res.data});
            console.log('createCategoryAction: ', res.data)
        } catch (err) {
            dispatch({type: CREATE_CATEGORY_FAILURE, payload: err});
            console.log(err)
        }
    }
}

export const getRestaurantsCategory = ({jwt, restaurantId}) => {
    return async (dispatch) => {
        dispatch({type: GET_RESTAURANTS_CATEGORY_REQUEST})
        try {
            const res = await api.get(`/api/category/restaurant/${restaurantId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`
                    }
                })
            dispatch({type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data});
            console.log('getRestaurantsCategory: ', res.data)
        } catch (err) {
            dispatch({type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: err});
            console.log(err)
        }
    }
}

//
// export const getRestaurantsEvents = ({jwt, restaurantId}) => {
//     return async (dispatch) => {
//         dispatch({type: GET_RESTAURANTS_EVENTS_REQUEST})
//         try {
//             const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`,
//                 {
//                     headers: {
//                         Authorization: `Bearer ${jwt}`
//                     }
//                 })
//             dispatch({type: GET_RESTAURANTS_EVENTS_SUCCESS, payload: res.data});
//             console.log('getRestaurantsEvents: ', res.data)
//         } catch (err) {
//             dispatch({type: GET_RESTAURANTS_EVENTS_FAILURE, payload: err});
//             console.log(err)
//         }
//     }
// }