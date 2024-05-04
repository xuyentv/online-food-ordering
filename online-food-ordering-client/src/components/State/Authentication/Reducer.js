import {
    ADD_TO_FAVORITE_REQUEST, ADD_TO_FAVORITE_SUCCESS,
    GET_USER_REQUEST,
    LOGIN_REQUEST, LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from "./ActionType";
import {isPresentInFavorites} from "../../config/logic";


const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorites: [],
    success: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            break;
        case LOGIN_REQUEST:
            break;
        case GET_USER_REQUEST:
            break;
        case ADD_TO_FAVORITE_REQUEST:
            return {...state, isLoading: true, error: null, success: null}
            break;
        case LOGOUT:
            break;
        case REGISTER_SUCCESS:
            break;
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                jwt: action.payload,
                success: 'Register successfully'
            }
        case ADD_TO_FAVORITE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: null,
                favorites: isPresentInFavorites(state.favorites, action.payload
                ) ? state.favorites.filter((item) => item.id !== action.payload.id)
                    : [action.payload, ...state.favorites]
            }

        default:
            break;
    }

}