import React from 'react';
import { Link } from 'react-router-dom';

import './header-menu.styles.scss';

type IHeaderMenuProps = {
    isOpenMenu: boolean;
    toggleAction(): void;
};

const HeaderMenu = ({ isOpenMenu, toggleAction }: IHeaderMenuProps) => {
    return (
        <div
            className={'header-menu--container ' + (isOpenMenu && 'is-open')}
            style={isOpenMenu ? { visibility: 'visible' } : { visibility: 'hidden' }}
        >
            <div className='container'>
                <div className='header-menu--header'>
                    <button
                        type='button'
                        onClick={() => {
                            toggleAction();
                        }}
                    >
                        X
                    </button>
                </div>
                <div className='header-menu--content'>
                    <nav className='header-navbar'>
                        <ul>
                            <li>
                                <Link className='btn-link fnt-current' to='/'>
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link className='btn-link fnt-current' to='/blog'>
                                    BLOG
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
