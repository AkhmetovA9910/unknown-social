import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css';

const Sidebar = (props) => {
   let navLinks = props.sidebarElements.map(
      navLink => (
         <div key={navLink.id} className={s.sidebar__item}>
            <NavLink to={(navLink.name === 'Profile') ? `${navLink.path}/${props.myId}` : navLink.path} activeClassName={s.active} ><span className={`icon-${navLink.name}`}></span>{navLink.name.toUpperCase()}</NavLink>
         </div>
      )
   );

   return (
      <nav className={s.sidebar}>
         <div className={s.sidebar__list}>
            {navLinks}
         </div>
      </nav>
   );
};

export default Sidebar;