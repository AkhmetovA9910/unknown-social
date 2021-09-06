import React from 'react';
import { style } from 'glamor';

const Button = ({ styles, onHover, text, ...props }) => {

   let buttonStyles = {
      height: '30px',
      width: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      borderRadius: '4px',
      border: '2px solid #000',
      color: '#000',
      fontSize: '16px',
      transition: 'background-color 0.4s ease 0s',
      ...styles,
      ':hover': {
         backgroundColor: '#DADADA',
         ...onHover
      }
   };

   if (props.disable) {
      buttonStyles = {
         ...buttonStyles,
         border: '2px solid #929496',
         color: '#929496',
         ':hover': {}
      };
   }

   const stylesCss = {
      button: style(buttonStyles)
   };
   return (
      <button {...stylesCss.button} {...props} disabled={props.disable}>{text}</button>
   );
};

export default Button;