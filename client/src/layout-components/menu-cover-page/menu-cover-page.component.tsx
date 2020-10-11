import React from 'react';
import { Menu } from '../menu/menu.component';

import './menu-cover-page.styles.scss';

const MenuCoverPage = ({ isOpenMenu, toggleMenu }: IHeaderMenuProps) => {
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
                            toggleMenu();
                        }}
                    >
                        X
                    </button>
                </div>
                <div className='header-menu--content'>
                    <Menu toggleMenu={toggleMenu}></Menu>
                </div>
            </div>
        </div>
    );
};

export default MenuCoverPage;

interface IHeaderMenuProps {
    isOpenMenu: boolean;
    toggleMenu(): void;
}
