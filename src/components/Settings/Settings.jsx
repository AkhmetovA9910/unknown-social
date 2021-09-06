import React from 'react';
import NoReleasedSection from '../NoReleasedSection/NoReleasedSection';
import styles from './Settings.module.css';

const Settings = () => {
   return (
      <div className={styles.settings}>
         <NoReleasedSection />
      </div>
   );
};

export default Settings;