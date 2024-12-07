import { GET_ME, LOG_IN } from "../actions"

const initialState = {
    username: '',
    avatar: '',
    favourites: [],
    token: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                token: action.token
            }
        case GET_ME:
            return {
                ...state,
                username: action.username,
                avatar: action.avatar,
                favourites: action.favourites
            }
        default: { return state }
    }
}