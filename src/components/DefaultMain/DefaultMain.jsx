import React from 'react';
import s from './DefaultMain.module.css';

const DefaultMain = () => {
   return (
      <div className={s.main}>
         <div className={s.main__label}>
            Welcome to <span>Unknown social</span>.com!
         </div>
      </div>
   );
};

export default DefaultMain;