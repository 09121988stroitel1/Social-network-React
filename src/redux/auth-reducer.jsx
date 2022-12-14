import { authAPI } from "../api/Api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};  

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
              ...state,
              ...action.payload,
            //   isAuth: true,
            }
     
        default:
            return state

    }

}

export const setAuthUserData = (userId, email, login, isAuth) => ({ 
    type: SET_USER_DATA, 
    payload: {userId, email, login, isAuth} })

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {
     if(response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setAuthUserData(id, email, login, true))
     }
    })
}

export const login = (email, password, rememberMe) =>  (dispatch) => {
    debugger
    // alert(email, password, rememberMe)
    // alert(props.email);
    authAPI.login(email, password, rememberMe)
    .then(response => {
     if(response.data.resultCode === 0) {
      dispatch(getAuthUserData())
     }
    })
}

export const logout = () => (dispatch) => {
    
    authAPI.logout()
    .then(response => {
     if(response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
     }
    })
}

export const hello = (email) => {
    debugger
    alert(email)
}

export default authReducer