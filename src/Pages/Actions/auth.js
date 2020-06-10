import * as actionTypes from "./actionTypes"
import axios from 'axios'

export const authStart = () => {
    return {
        // use this action to set a loading state
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000);
    }
}

// holding the async code doing the auth
// using email and password

export const auth = (email, password, isSignUp) => {
    // auth user
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };

        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA3AMWMqs8xAse1HaIJbGZAxkhbZbOaWVg"

        if (!isSignUp) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3AMWMqs8xAse1HaIJbGZAxkhbZbOaWVg"
        }

        axios.post(url, authData).then(response => {
            console.log(response)
            dispatch(authSuccess(response.data.idToken, response.data.localId))
            dispatch(checkAuthTimeout(response.data.expiresIn))
        }).catch(err => {
            console.log(err)
            // we can map these error codes to your own error message
            dispatch(authFail(err.response.data.error))
        })
    }
}