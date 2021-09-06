import { usersAPI, followAPI } from "../../api/api";

const SET_USERS = 'SET-USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE-FOLLOWING-IN-PROGRESS';

let initialState = {
   usersData: [],
   currentPage: 1,
   totalUsersCount: 0,
   pageSize: 4,
   isFetching: true,
   followingInProgressIds: []
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS: return {
         ...state,
         usersData: [...action.users]
      };
      case FOLLOW: return {
         ...state,
         usersData: state.usersData.map(user => {
            if (user.id === action.userId) return {
               ...user,
               followed: true
            };
            else return user;
         })
      };
      case UNFOLLOW: return {
         ...state,
         usersData: state.usersData.map(user => {
            if (user.id === action.userId) return {
               ...user,
               followed: false
            };
            else return user;
         })
      };
      case SET_CURRENT_PAGE: return {
         ...state,
         currentPage: action.page
      };
      case SET_TOTAL_USERS_COUNT: return {
         ...state,
         totalUsersCount: action.totalUsersCount
      };
      case TOGGLE_IS_FETCHING: return {
         ...state,
         isFetching: action.isFetching
      };
      case TOGGLE_FOLLOWING_IN_PROGRESS: return {
         ...state,
         followingInProgressIds: action.isFolowing ? [...state.followingInProgressIds, action.userId] : state.followingInProgressIds.filter(id => id !== action.userId)
      };

      default: return state;
   }
};

//------------------------------------------------------------------------ actionCreators
export const setUsers = (users) => ({ type: SET_USERS, users });
const followAC = (userId) => ({ type: FOLLOW, userId });
const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (page) => ({ type: SET_CURRENT_PAGE, page });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const toggleFollowingInProgress = (isFolowing, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFolowing, userId });
//------------------------------------------------------------------------


export const requestUsers = (currentPage, pageSize) => (dispatch) => {
   dispatch(toggleIsFetching(true));
   return usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
   });
};

export const follow = (userId) => { // followThunkCreator
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userId));
      followAPI.follow(userId).then(data => {
         if (data.resultCode === 0) {
            dispatch(followAC(userId));
         }
         dispatch(toggleFollowingInProgress(false, userId));
      });
   };
};

export const unfollow = (userId) => { // unfollowThunkCreator
   return (dispatch) => {
      dispatch(toggleFollowingInProgress(true, userId));
      followAPI.unfollow(userId).then(data => {
         if (data.resultCode === 0) {
            dispatch(unfollowAC(userId));
         }
         dispatch(toggleFollowingInProgress(false, userId));
      });
   };
};

export default usersReducer;