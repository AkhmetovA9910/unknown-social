import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.post}>
         <div className={s.post__userpicture}><img src="https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635" /></div>
         <div className={s.post__username}>Dmitro Jokic</div>
         <div className={s.post__userlogin}>@dmitrojoker</div>
         <div className={s.post__body}>
            <div className={s.post__text}>{props.message}</div>
            <div className={s.post__actions}>
               <div className={s.post__likescount}>{props.likesCount}</div>
               <button className={s.post__like}>Like</button>
            </div>
         </div>
      </div>
   );
};

export default Post;