import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import MenuCoverPage from '../menu-cover-page/menu-cover-page.component';

import './header.styles.scss';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isScroll, setIsScroll] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return () => window.removeEventListener('scroll', handleScroll, true);
    });

    const handleScroll = () => {
        if (window.scrollY > 102) {
            setIsScroll(true);
        } else setIsScroll(false);
    };

    const handleToggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    };

    return (
        <header className={'app-header-container' + (isScroll ? ' scroll' : '')}>
            <div className='navbar-container'>
                <Link to='/' className='logo-container'>
                    <div className='visually-hidden'>logo</div>
                    <Logo className='app-logo' aria-hidden='true' />
                </Link>
                <button className={'manu-trigger' + (isOpenMenu ? ' active' : '')} onClick={handleToggleMenu}>
                    Menu
                </button>
                {/* {isOpenMenu ? <HeaderMenu isOpenMenu={isOpenMenu} toggleAction={handleToggle}></HeaderMenu> : null} */}
                <MenuCoverPage isOpenMenu={isOpenMenu} toggleMenu={handleToggleMenu}></MenuCoverPage>
            </div>
        </header>
    );
};

export default Header;
