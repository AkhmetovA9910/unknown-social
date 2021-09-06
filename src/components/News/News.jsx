import React from 'react';
import NoReleasedSection from '../NoReleasedSection/NoReleasedSection';
import styles from './News.module.css';

const News = () => {
   return (
      <div className={styles.news}>
         <NoReleasedSection />
      </div>
   );
};

export default News;