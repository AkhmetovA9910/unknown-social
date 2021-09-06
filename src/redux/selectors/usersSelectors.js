import { createSelector } from "reselect";

export const getUsers = (state) => {
   return state.usersPage.usersData;
};
export const getCurrentPage = (state) => {
   return state.usersPage.currentPage;
};
export const getTotalUsersCount = (state) => {
   return state.usersPage.totalUsersCount;
};
export const getPageSize = (state) => {
   return state.usersPage.pageSize;
};
export const getIsFetching = (state) => {
   return state.usersPage.isFetching;
};
export const getFollowingInProgressIds = (state) => {
   return state.usersPage.followingInProgressIds;
};
// export const getPageButtonsArray = createSelector(getPagesNumber, getCurrentPage,
//    (pagesNumber, currentPage) => {
//       let pageButtons = [1];
//       let startPoint = 0;

//       if (currentPage - 1 <= 7) {
//          startPoint = 2;
//       } else if (pagesNumber - currentPage <= 8) {
//          startPoint = pagesNumber - 8;
//       } else startPoint = currentPage;
//       if (pagesNumber > 10 && (currentPage - 1 > 7)) pageButtons.push(0);
//       for (let i = 1; i <= 8; i++) {
//          pageButtons.push(startPoint);
//          startPoint++;
//       }
//       if (pagesNumber > 10 && (pagesNumber - currentPage > 8)) pageButtons.push(0);
//       pageButtons.push(pagesNumber);
//       return pageButtons;
//    }
// );