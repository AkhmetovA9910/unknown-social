import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../../api/api";

const SET_USER_DATA = 'SET-USER-DATA';
const SET_CAPTCHA_URL = 'SET-CAPTCHA-URL';

let initialState = {
   userId: null,
   login: null,
   email: null,
   isAuth: false,
   captchaUrl: null
};

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER_DATA: return {
         ...state,
         ...action.payload
      };
      case SET_CAPTCHA_URL: return {
         ...state,
         captchaUrl: action.captchaUrl
      };

      default: return state;
   }
};

const setUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, payload: { userId, login, email, isAuth } });
const setCaptchaUrl = (captchaUrl) => ({ type: SET_CAPTCHA_URL, captchaUrl });

export const getUserData = () => { // setUserDataThunkCreator
   return (dispatch) => {
      return authAPI.checkIsAuth().then(data => {
         if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(setUserData(id, login, email, true));
         }
      });
   };
};

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
   authAPI.login(email, password, rememberMe, captcha).then(data => {
      if (data.resultCode === 0) {
         dispatch(getUserData());
         dispatch(setCaptchaUrl(null))
      }
      else {
         if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
         }
         dispatch(stopSubmit('login', { _error: (data.messages.length > 0) ? data.messages[0] : 'Some error' }));
      }
   });
};

export const logout = () => (dispatch) => {
   authAPI.logout().then(data => {
      if (data.resultCode === 0) {
         dispatch(setUserData(null, null, null, false));
      }
   });
};

const getCaptchaUrl = () => (dispatch) => {
   securityAPI.getCaptchaUrl().then(data => { dispatch(setCaptchaUrl(data.url)); });
};

export default authReducer;