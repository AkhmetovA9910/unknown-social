import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ProfileStatus = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status]);

   const activateEditMode = () => {
      setEditMode(true);
   }
   const diactivateEditMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }
   const onStatusChange = (event) => {
      setStatus(event.target.value);
   }

   return (
      <div className={`${props.styles.profile__status} ${(!props.status) ? props.styles.default : null}`}>
         {(!editMode) ? (!props.status) ? <span>________</span> : <span onDoubleClick={activateEditMode} >{props.status}</span>
            : <input
               autoFocus={true}
               onBlur={diactivateEditMode}
               className={props.styles.profile__statusInput}
               value={(!status) ? '' : status}
               onChange={onStatusChange}
               placeholder={'Add your first status'}
            />}
      </div>
   );
}


export default ProfileStatus;