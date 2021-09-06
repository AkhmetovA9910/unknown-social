import React from 'react';
import User from './User/User';
import s from './Users.module.css';
import defaultProfilePicture from './../../assets/images/user.png';
import Preloader from '../common/Preloader/Preloader';
import HeadLabel from '../common/HeadLabel/HeadLabel';
import UsersPaginator from './UsersPaginator/UsersPaginator';
import { getPageButtons } from './UsersPaginator/paginatorFunctions';

const Users = (props) => {
   let users = props.users.map(user => (
      <User
         id={user.id}
         key={user.id}
         name={user.name}
         status={user.status}
         pictureUrl={(user.photos.small !== null) ? user.photos.small : defaultProfilePicture}
         followed={user.followed}
         follow={() => { props.follow(user.id); }}
         unfollow={() => { props.unfollow(user.id); }}
         followingInProgressIds={props.followingInProgressIds}
         myId={props.myId}
         isAuth={props.isAuth}
      />
   ));

   const pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize);
   const pageButtons = getPageButtons(props.currentPage, pagesNumber, 10);

   return (
      <div className={s.users}>
         <HeadLabel text='Users' className={s.users__label} />

         <UsersPaginator
            currentPage={props.currentPage}
            onPageChange={props.onPageChange}
            pagesNumber={pagesNumber}
            pagesPortionSize={10}
            pageButtons={pageButtons}
         />

         <div className={`${s.users__list} ${(users.length < props.pageSize) ? s.incomplete : ''}`}>
            {(props.isFetching) ? (<Preloader className={s.users__preloader} />) : null}
            {users}
         </div>
      </div>
   );
};

export default Users;