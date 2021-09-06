import React from 'react';
import NoReleasedSection from '../NoReleasedSection/NoReleasedSection';
import styles from './Music.module.css';

const Music = () => {
   return (
      <div className={styles.music}>
         <NoReleasedSection />
      </div>
   );
};

export default Music;