import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getStatus, getUserProfile, savePhoto, saveProfile, setEditMode, updateStatus } from '../../redux/reducers/profileReducer';
import Profile from './Profile';
import Preloader from './../common/Preloader/Preloader';
import { compose } from 'redux';
import withAuthProfileRedirect from '../../hoc/withAuthProfileRedirect';
import { follow, unfollow } from '../../redux/reducers/usersReducer';

class ProfileContainer extends React.Component {

   initializeProfile(userId) {
      this.props.getUserProfile(userId);
      this.props.getStatus(userId);
   }

   componentDidMount() {
      this.initializeProfile(this.props.match.params.userId);
   }

   componentDidUpdate(prevProps) {
      if (prevProps.match.params.userId !== this.props.match.params.userId) {
         this.initializeProfile(this.props.match.params.userId);
      }
   }

   render() {
      if (!!this.props.profile && this.props.usersData.length > 0) return <Profile {...this.props} />;
      else return <Preloader style={{ height: '100%', width: '100%', backgroundColor: '#fff' }} />;
   }
}

const mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   followingInProgressIds: state.usersPage.followingInProgressIds,
   userId: state.auth.userId,
   usersData: state.usersPage.usersData,
   isAuth: state.auth.isAuth,
   editMode: state.profilePage.editMode,
   currentLocation: '/profile'
});

const actions = {
   updateStatus,
   follow,
   unfollow,
   savePhoto,
   getUserProfile,
   getStatus,
   saveProfile,
   setEditMode
};

export default compose(connect(mapStateToProps, actions), withRouter, withAuthProfileRedirect)(ProfileContainer);
