export const TAKE_MY_FAVOURITES = 'TAKE_MY_FAVOURITES'
export const LOG_IN = 'LOG_IN'
export const GET_ME = 'GET_ME'
export const SIGN_UP = 'SIGN_UP'

//-------------------- USERS --------------------------
const baseUrl = 'http://localhost:3001'
// ----------------- LOGIN ---------------------
export const logUser = (username, password) => {
    return async (dispatch) => {
        const url = baseUrl + '/auth/login'
        const body = {
            username: username,
            password: password
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(body),
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
        const url = baseUrl + '/auth/me'
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