import { ADD_FAVOURITE, GET_FAVOURITE, GET_ME, LOCAL_STORAGE_KEY, LOG_IN, REMOVE_FAVOURITE, REMOVE_ME } from "../actions"

const initialState = {
    username: '',
    avatar: '',
    favourites: [],
    token: '',
    ruolo: '',
    id:'',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                token: action.payload.accessToken,
            }
        case GET_ME:
            return {
                ...state,
                username: action.payload.username,
                avatar: action.payload.avatar,
                id: action.payload.id,
                ruolo:action.payload.ruolo,
                favourites: action.payload.favourites
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.payload]
            }
        case GET_FAVOURITE:
            return {
                ...state,
                favourites: action.payload
            }
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite.id !== action.payload)
            }
        case REMOVE_ME:
            return{
                ... initialState,
            }
        case LOCAL_STORAGE_KEY: 
            return{
                ...state,
                token: action.payload
            }
        default: { return state }
    }
}

export default userReducer;