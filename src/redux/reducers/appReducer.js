import { getUserData } from "./authReducer";

const CONFIRM_APP_INITIALIZING = 'CONFIRM-APP-INITIALIZING';

let initialState = {
   isInitialized: false
};

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case CONFIRM_APP_INITIALIZING: return {
         ...state,
         isInitialized: true
      };

      default: return state;
   }
};

const confirmInitializing = () => ({ type: CONFIRM_APP_INITIALIZING });

export const initializeApp = () => {
   return (dispatch) => {
      Promise.all([
         dispatch(getUserData())
      ]).then(() => {
         dispatch(confirmInitializing());
      });
   };
};

export default appReducer;