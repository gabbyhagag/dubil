import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import './header.styles.scss';

function Header() {
    return (
        <header className='app-header app-header bg-dark fnt-white'>
          <div className="container d-flex justify-content-between">
            <Link to='/' className='logo-container'>
              <div className="visually-hidden">logo</div>
              <Logo className='app-logo' aria-hidden="true" />
            </Link>
            <div className='menu-container'>
              <Link className="btn-link fnt-white" to='/'>HOME</Link>
              <Link className="btn-link fnt-white" to='/blog'>BLOG</Link>
            </div>
          </div>
        </header>
    );
}

export default Header;
