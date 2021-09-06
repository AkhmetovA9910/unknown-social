import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "../../api/api";
import { setTotalUsersCount, setUsers } from "./usersReducer";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SET_PROFILE_PHOTOS = 'SET-PROFILE-PHOTOS';
const SET_EDIT_MODE = 'SET-EDIT-MODE';

let initialState = {
   postsData: [],
   newPostText: '',
   profile: null,
   status: null,
   editMode: false
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: return {
         ...state,
         postsData: [
            ...state.postsData,
            {
               id: (state.postsData.length > 0) ? state.postsData[state.postsData.length - 1].id + 1 : 1,
               postText: action.postText,
               likesCount: 0
            }
         ]
      };

      case SET_USER_PROFILE: return {
         ...state, profile: action.profile
      };
      case SET_STATUS: return {
         ...state, status: action.status
      };
      case SET_PROFILE_PHOTOS: return {
         ...state, profile: { ...state.profile, photos: action.photos }
      };
      case SET_EDIT_MODE: return {
         ...state, editMode: action.editMode
      }

      default: return state;
   }
};

export const addPost = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
const setProfilePhotos = (photos) => ({ type: SET_PROFILE_PHOTOS, photos });
export const setEditMode = (editMode) => ({ type: SET_EDIT_MODE, editMode });

export const getUserProfile = (userId) => (dispatch) => {
   profileAPI.getUserProfile(userId).then(data => {
      dispatch(setUserProfile(data));
      return usersAPI.getUserByName(data.fullName).then(data => {
         dispatch(setUsers(data.items));
         dispatch(setTotalUsersCount(data.totalCount));
      });
   });
};

export const getStatus = (userId) => (dispatch) => {
   return profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response));
   });
};

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then(response => {
      if (response.resultCode === 0) {
         dispatch(setStatus(status));
      }
   });
};

export const savePhoto = (userPhoto) => (dispatch) => {
   profileAPI.savePhoto(userPhoto).then(response => {
      if (response.resultCode === 0) {
         dispatch(setProfilePhotos(response.data.photos));
      }
   });
};

export const saveProfile = (profile) => (dispatch) => {
   profileAPI.saveProfile(profile).then(data => {
      if (data.resultCode === 0) {
         dispatch(setUserProfile(profile));
         dispatch(setEditMode(false));
      }
      else {
         let errors = {};
         for (let i = 0; i < data.messages.length; i++) {
            const str = data.messages[i];
            let error = str.substring(str.indexOf('(') + 1, str.indexOf(')'));
            let errorFieldName = error;
            if (error.includes('Contacts')) errorFieldName = error.substring(error.indexOf('>') + 1, error.length);
            errorFieldName = errorFieldName[0].toLowerCase() + errorFieldName.substring(1, errorFieldName.length);
            let errorMessage = data.messages[i].substring(0, data.messages[i].indexOf('('));
            if (error.includes('Contacts')) errors.contacts = { ...errors.contacts, [errorFieldName]: errorMessage };
            else errors = { ...errors, [errorFieldName]: errorMessage };
         }
         dispatch(stopSubmit('profileDataForm', errors));
      }
   });
};

export default profileReducer;