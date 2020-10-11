import React from 'react';
import { MenuItem } from '../menu-item/menu-item';

export const Menu = () => {
    const menu = {
        items: [
            {
                id: 'home',
                displayName: 'HOME',
                linkUrl: '',
                isHidden: false,
            },
            {
                id: 'blog',
                displayName: 'BLOG',
                linkUrl: 'blog',
                isHidden: false,
            },
            {
                id: 'hiedden',
                displayName: 'hiedden-test',
                linkUrl: 'hiedden',
                isHidden: true,
            },
        ],
    };
    return (
        <nav className='header-navbar'>
            <ul>{menu.items.map((item) => !item.isHidden && <MenuItem item={item} key={item.id}></MenuItem>)}</ul>
        </nav>
    );
};
