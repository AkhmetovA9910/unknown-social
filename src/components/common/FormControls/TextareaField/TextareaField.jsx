import React from 'react';
import styles from './TextareaField.module.css';

const TextareaField = ({ input, meta, showError, ...props }) => {
   let hasError = false;
   if (meta.touched && meta.error && showError) hasError = true;

   return (
      <div className={`${styles.textareaField} ${(hasError) ? styles.hasError : null}`} style={props.styles}>
         <textarea {...input} {...props} className={styles.textarea} />
         {(hasError) ?
            <div className={styles.error}>
               <div className={styles.errorText}>{meta.error}</div>
            </div>
            : null}
      </div>
   );
};

export default TextareaField;