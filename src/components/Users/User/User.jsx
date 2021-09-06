import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {

   let buttonClass = `${s.user__followButton} ${(props.followed) ? s.unfollow : s.follow} ${(props.followingInProgressIds.some(id => id === props.id)) ? s.disabled : ''}`

   return (
      <div className={s.user}>
         <NavLink
            className={`${s.user__profilePicture} ${(props.isAuth) ? null : s.nonAuth}`}
            to={`/profile/${props.id}`}
         >
            <img src={props.pictureUrl} alt="" />
         </NavLink>
         {(props.isAuth)
            ? (props.myId !== props.id)
               ? <button
                  disabled={props.followingInProgressIds.some(id => id === props.id)}
                  className={buttonClass}
                  onClick={(props.followed) ? props.unfollow : props.follow}
               >{(props.followed) ? 'FOLLOWED' : ''}</button>
               : <div className={s.user__noFollowButton}>it's you</div>
            : null
         }
         <div className={s.user__name}>{props.name}</div>
         <div className={s.user__status}>{props.status}</div>
      </div>
   );
};

export default User;