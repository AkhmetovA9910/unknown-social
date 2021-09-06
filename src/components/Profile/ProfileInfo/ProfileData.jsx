import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfoRow = ({ name, value, classStyleName }) => (
   <div className={`${styles.profileRow} ${(!!classStyleName) ? classStyleName : null}`}>
      <div className={styles.profileRow__name}>{`${name} :`}</div>
      <div className={styles.profileRow__value}>{value}</div>
   </div>
);

const ProfileData = ({ profile, status, updateStatus, setEditMode, isMyProfile }) => {

   let [isExtended, setIsExtended] = useState(false);

   const toggleIsExtended = () => { if (isExtended) setIsExtended(false); else setIsExtended(true); }

   return (
      <div className={`${styles.profile__data} ${(isExtended) ? styles.extended : null}`}>
         {(isMyProfile) ? <button className={styles.profile__editButton} onClick={setEditMode}><span className='icon-edit'></span></button> : null}
         <div className={styles.profile__name}>{profile.fullName}</div>
         <ProfileStatus status={status} updateStatus={updateStatus} styles={styles} />
         <div className={styles.profile__infoblock}>
            <ProfileInfoRow name='About me' value={profile.aboutMe} />
            <ProfileInfoRow
               name='Job'
               value={((profile.lookingForAJob) ? 'Looking for a job' : 'Doesn\'t work ')
                  + ((!profile.lookingForAJobDescription) ? '' : `(${profile.lookingForAJobDescription})`)}
            />

            <ProfileInfoRow classStyleName={styles.contacts} name='Contacts' value={
               Object.keys(profile.contacts).map(contact => (
                  <ProfileInfoRow key={contact} name={contact} value={(!profile.contacts[contact]) ? '-' : profile.contacts[contact]} />
               ))
            } />
         </div>
         <div onClick={toggleIsExtended} className={`${styles.profile__extendBlock}`}>
            <div className={styles.profile__extendArrow}></div>
            {(isExtended) ? 'Hide' : 'Show all'}
         </div>
      </div>
   );
};

export default ProfileData;