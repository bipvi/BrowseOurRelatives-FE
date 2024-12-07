export const GET_FAVOURITE = 'GET_FAVOURITE'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY'
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE'
export const LOG_IN = 'LOG_IN'
export const GET_ME = 'GET_ME'
export const SIGN_UP = 'SIGN_UP'
export const baseUrl = 'http://localhost:3001'

//-------------------- USERS --------------------------
// ----------------- LOGIN ---------------------
export const logUser = (username, password) => {
    return async (dispatch) => {
        const url = baseUrl + '/auth/login'
        const payload = {
            username: username,
            password: password
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(payload),
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: LOG_IN,
                    payload: data
                })
            } else { alert('Errore nella fetch') }
        }
        catch (error) {
            console.log(error)
        }
    }
}


// ------------ SIGN IN ------------------------
export const signUp = (username, password) => {
    return async (dispatch) => {
        const url = baseUrl + '/auth/register'
        const body = { 'username': username, 'password': password }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body),
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: SIGN_UP,
                    payload: data
                })
            } else { alert('Errore nella fetch') }
        }
        catch (error) {
            console.log(error)
        }
    }
}

// ------------------ GET ME -----------------
export const getMe = (token) => {
    return async (dispatch) => {
        const url = baseUrl + '/user/me'
        try {
            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${token}` },
            })
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: GET_ME,
                    payload: data
                })
            } else { alert('Errore nella fetch') }
        }
        catch (er) { console.log(er) }
    }
}

// ------------------ ADD FAVOURITE -------------------------------
export const addFavourite = (id, token) => {
    return async (dispatch) => {
        const url = baseUrl + '/me/fav'
        try {
            const resp = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: URLSearchParams({ fav: id })
            })
            if (resp.ok) {
                const data = await resp.json()
                dispatch({
                    type: ADD_FAVOURITE,
                    payload: data
                })
            } else { alert('Errore nella fetch') }
        }
        catch (error) { console.log(error) }
    }
}


// ------------------ REMOVE FAVOURITE -------------------------------
export const removeFavourite = (id, token) => {
    return async (dispatch) => {
        const url = baseUrl + '/me/fav'
        try {
            const resp = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: URLSearchParams({ fav: id })
            })
            if (resp.ok) {
                const data = await resp.json()
                dispatch({
                    type: REMOVE_FAVOURITE,
                    payload: data
                })
            } else { alert('Errore nella fetch') }
        }
        catch (error) { console.log(error) }
    }
}


// ------------------ GET FAVOURITE -------------------------------
export const getFavourite = (token) => {
    return async (dispatch) => {
        const url = baseUrl + '/me/fav'
        try {
            const resp = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            })
            if (resp.ok) {
                const data = await resp.json()
                dispatch({
                    type: GET_FAVOURITE,
                    payload: data
                })
            } else { alert('Errore nella fetch') }
        }
        catch (error) { console.log(error) }
    }
}

// --------------------- LOCAL STORAGE KEY --------------------------
export const localStorageKey  = (token) => {
    return {
        type: LOCAL_STORAGE_KEY,
        payload: token,
    }
}