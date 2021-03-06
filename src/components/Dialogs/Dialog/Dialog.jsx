import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
   let path = '/dialogs/' + props.id;

   return (
      <div className={s.dialog}>
         <NavLink to={path} className={s.dialog__name}>{props.name}</NavLink>
      </div>
   );
};

export default Dialog;