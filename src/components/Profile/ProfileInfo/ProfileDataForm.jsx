import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './ProfileInfo.module.css';
import InputField from './../../common/FormControls/InputField/InputField';
import { required } from './../../../utils/validators';
import Button from '../../common/Button/Button';

const ProfileInfoRow = ({ name, value, inputName, ...props }) => (
   <div className={styles.profileRow}>
      <div className={styles.profileRow__name}>{`${name} :`}</div>
      <Field
         component={InputField}
         name={inputName}
         {...props}
         autoComplete='off'
         showError={true}
      />
   </div>
);

const ProfileDataForm = ({ profile, onSaveData, ...props }) => {

   return (
      <form className={`${styles.profile__formdata}`} onSubmit={props.handleSubmit}>
         <ProfileInfoRow name='Full name' inputName='fullName' type='text' />
         <ProfileInfoRow name='About me' inputName='aboutMe' type='text' />
         <ProfileInfoRow name='Looking for a job' inputName='lookingForAJob' type='checkbox' />
         <ProfileInfoRow name='Job description' inputName='lookingForAJobDescription' type='text' />
         {Object.keys(profile.contacts).map(contact => (
            <ProfileInfoRow key={contact} name={contact} inputName={`contacts.${contact}`} type='text' />
         ))}
         <Button
            text='Save'
            styles={{
               color: '#309453',
               border: '2px solid #309453',
               width: '40%',
               margin: '10px 0 0 0'
            }}
            onHover={{
               backgroundColor: '#78E19D'
            }}
         />
      </form>
   );
};

export default reduxForm({ form: 'profileDataForm' })(ProfileDataForm);