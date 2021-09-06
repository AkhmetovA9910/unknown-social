import React from 'react';
import s from './NoReleasedSection.module.css';

const NoReleasedSection = () => {
   return (
      <div className={s.section}>
         <div className={s.section__label}>
            This section will be added soon...
         </div>
      </div>
   );
};

export default NoReleasedSection;