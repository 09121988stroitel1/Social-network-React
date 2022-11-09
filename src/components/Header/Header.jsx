import React, { component } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'


const Header = (props) => {
    return ( <header className={s.header}>
    {/* <img src=''></img> */}
    {/* <div>   <h1>GGGg</h1></div> */}
    <div className={s.loginBlock}>

      {props. isAuth ? props.login
     : <NavLink to={'/login'}>Login</NavLink>
    }
      
    </div>
  </header>)
}

export default Header