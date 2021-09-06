import React, { useState } from 'react';
import Button from '../../common/Button/Button';
import styles from './ProfileInfo.module.css';

const ChangePhoto = (props) => {
   let [saveMode, setSaveMode] = useState(false);
   let [photoFile, setPhotoFile] = useState(null);

   const onInputFile = (e) => {
      if (e.target.files.length > 0) {
         setSaveMode(true);
         setPhotoFile(e.target.files[0]);
      }
      console.log(e.target.files)
   };

   return (
      <div className={`${styles.profile__changePhotoForm} `}>
         <div className={`${styles.profile__changePhotoButtons} ${(saveMode) ? styles.saveMode : null}`}>
            <label htmlFor='inputFile' className={styles.profile__changePhotoButton} >{(saveMode) ? 'Change' : 'Change photo'}</label>
            {(saveMode) ?
               <Button
                  text='Save'
                  styles={{
                     color: '#309453',
                     border: '2px solid #309453',
                     width: '100%'
                  }}
                  onHover={{
                     backgroundColor: '#78E19D'
                  }}
                  onClick={() => { props.savePhoto(photoFile); setSaveMode(false); }}
               />
               : null
            }
         </div>
         <div className={styles.profile__changePhotoInput}>
            <input type='file' id='inputFile' onChange={onInputFile} />
         </div>
      </div>
   );
};

export default ChangePhoto;