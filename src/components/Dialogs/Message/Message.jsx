import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
   let mine = (props.mine) ? s.mine : "";

   return (
      <div className={s.message + " " + mine}>
         <div className={s.message__text}>{props.text}</div>
      </div>
   );
};
export default Message;