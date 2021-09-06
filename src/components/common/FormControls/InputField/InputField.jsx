import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ input, meta, showError, ...props }) => {

   let className = null;
   switch (props.type) {
      case 'text': className = styles.inputText; break;
      case 'password': className = styles.inputPassword; break;
      case 'checkbox': className = styles.checkbox; break;
   }
   let hasError = false;
   if (meta.touched && meta.error && showError) hasError = true;

   return (
      <div className={`${styles.inputField} ${(hasError) ? styles.hasError : null}`} style={props.styles}>
         <input
            {...input}
            {...props}
            className={className}
         />
         {(hasError) ?
            <div className={styles.error}>
               <div className={styles.errorText}>{meta.error}</div>
            </div>
            : null}
      </div>
   );
};

export default InputField;