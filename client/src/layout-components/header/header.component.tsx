import React, { RefObject, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import MenuCoverPage from '../menu-cover-page/menu-cover-page.component';

import './header.styles.scss';

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isScroll, setIsScroll] = useState<boolean>(false);

    const myRef = React.createRef() as RefObject<HTMLElement>;
    const [elementSize, setElementSize] = useState<Object>(
      {
        width:  null,
        height: null,
      }
    );

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        
      console.log(myRef);
        

        // setElementSize({
        //   height: myRef.current?.clientHeight
        // })
        
      // console.log(elementSize);
      // setElementSize(elementSize.white = )

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
        <header 
          className={'app-header-container' + (isScroll ? ' scroll' : '')}
          ref={myRef}
          aria-label="header is close"
        >
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
