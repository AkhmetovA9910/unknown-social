import React from 'react';
import preloader from './../../../assets/images/preloader.gif';

const Preloader = (props) => {
   return (
      <div
         className={`${props.className}`}
         style={
            {
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               ...props.style
            }
         }
      ><img src={preloader} alt="" /></div>
   );
};

export default Preloader;