import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import './header.styles.scss';

function Header() {
    return (
        <header className='app-header'>
            <Link to='/' className='logo-container'>
                <Logo className='app-logo' />
            </Link>
            <div className='menu-container'>
                <Link to='/'>HOME</Link>
                <Link to='/blog'>BLOG</Link>
            </div>
        </header>
    );
}

export default Header;
