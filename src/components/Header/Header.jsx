import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
   return (
      <header className={s.header}>
         <NavLink to='/' className={s.header__logo}>
            UNKNOWN<span>social</span>
         </NavLink>

         <div className={s.header__loginBlock}>
            {(props.isAuth) ?
               <div className={s.header__logoutBlock}>
                  <div className={s.header__userLogin}>{props.login}</div>
                  <span></span>
                  <button className={s.header__logoutButton} onClick={props.logout}>
                     <span className='icon-logout'></span>
                  </button>
               </div>
               :
               <NavLink to='/login' className={s.header__loginButton}>Login</NavLink>
            }

         </div>
      </header>
   );
};

export default Header;