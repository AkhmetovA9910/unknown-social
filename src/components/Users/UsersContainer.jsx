import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { follow, requestUsers, setCurrentPage, unfollow } from '../../redux/reducers/usersReducer';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getPagesNumber, getPageButtonsArray, getFollowingInProgressIds } from '../../redux/selectors/usersSelectors';
import Preloader from '../common/Preloader/Preloader';
import Users from './Users';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChange = (currentPage) => {
      this.props.setCurrentPage(currentPage);
      this.props.requestUsers(currentPage, this.props.pageSize);
   }

   render() {
      if (this.props.totalUsersCount === 0) return <Preloader />;
      return (
         <Users
            {...this.props}
            onPageChange={this.onPageChange}
         />
      );
   }
}
const mapStateToProps = (state) => ({
   users: getUsers(state),
   currentPage: getCurrentPage(state),
   totalUsersCount: getTotalUsersCount(state),
   pageSize: getPageSize(state),
   isFetching: getIsFetching(state),
   followingInProgressIds: getFollowingInProgressIds(state),
   myId: state.auth.userId,
   isAuth: state.auth.isAuth,
   currentLocation: '/users'
});

const actions = {
   follow,
   unfollow,
   setCurrentPage,
   requestUsers
};

export default compose(connect(mapStateToProps, actions))(UsersContainer);