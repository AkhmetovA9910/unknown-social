import React from 'react';

const HeadLabel = (props) => {
   let styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '22px',
      color: (!props.color) ? '#000' : props.color,
      ...props.styles
   }

   return (
      <div style={styles} className={props.className}>{props.text}</div>
   );
};

export default HeadLabel;