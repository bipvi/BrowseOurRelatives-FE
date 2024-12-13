import { ADD_FAVOURITE, GET_FAVOURITE, GET_ME, LOCAL_STORAGE_KEY, LOG_IN, REMOVE_FAVOURITE, REMOVE_ME } from "../actions"

const initialState = {
    username: '',
    avatar: '',
    favourites: [],
    token: '',
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
                favourites: action.payload.favourites
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.favourite]
            }
        case GET_FAVOURITE:
            return {
                ...state,
                favourites: [action.favourite]
            }
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter(favourite => favourite !== action.favourite)
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