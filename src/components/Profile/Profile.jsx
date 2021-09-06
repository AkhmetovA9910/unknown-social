import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
   return (
      <div className={s.profile}>
         <ProfileInfo {...props} myId={props.userId} />
         <PostsContainer />
      </div>
   );
};

export default Profile;