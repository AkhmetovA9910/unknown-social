import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import defaultProfilePicture from './../../../assets/images/user.png';
import FollowToggleButton from './FollowToggleButton';
import ProfileData from './ProfileData';
import ChangePhoto from './ChangePhotoButton';
import ProfileDataForm from './ProfileDataForm';
import Button from './../../common/Button/Button';

const ProfileInfo = (props) => {

   const isMyProfile = (props.isAuth) ? (props.profile.userId === props.myId) ? true : false : false;

   const onSaveData = (profile) => {
      props.saveProfile(profile);
   };

   const getPicture = () => {
      if (!props.profile.photos.large) {
         if (!props.profile.photos.small) return defaultProfilePicture; else return props.profile.photos.small;
      } else return props.profile.photos.large;
   };

   return (
      <div className={`${styles.profile__info} ${(props.isAuth) ? styles.authorized : null}`}>
         <div className={styles.profile__wallpaper}><img src="https://images.hdqwalls.com/wallpapers/bthumb/basketball-court-4k-p9.jpg" /></div>
         <div className={styles.profile__picture}>
            <img src={getPicture()} />
            {(props.isAuth) ?
               (isMyProfile) ?
                  <ChangePhoto savePhoto={props.savePhoto} />
                  :
                  <FollowToggleButton
                     userId={props.profile.userId}
                     follow={props.follow}
                     unfollow={props.unfollow}
                     followed={props.usersData[0].followed}
                     followingInProgressIds={props.followingInProgressIds}
                  />
               : null
            }
         </div>
         {(!props.editMode)
            ? <ProfileData isMyProfile={isMyProfile} profile={props.profile} status={props.status} updateStatus={props.updateStatus} setEditMode={() => { props.setEditMode(true); }} />
            : (isMyProfile) ?
               <div className={styles.profile__formContainer}>
                  <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSaveData} />
                  <Button
                     text='Cancel'
                     styles={{
                        color: '#ea6716',
                        border: '2px solid #ea6716',
                        width: '40%',
                        margin: '10px 0 0 0',
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px'
                     }}
                     onHover={{
                        backgroundColor: '#ffdeca'
                     }}
                     onClick={() => { props.setEditMode(false); }}
                  />
               </div> : null
         }
      </div>
   );
};

export default ProfileInfo;