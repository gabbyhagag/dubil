import React from 'react';
import { Link } from 'react-router-dom';

export const MenuItem = ({ item, toggleMenu }: IMenuItemProps) => {
    return (
        <li>
            <Link
                to={`/${item.linkUrl}`}
                onClick={() => {
                    toggleMenu();
                }}
            >
                {item.displayName}
            </Link>
        </li>
    );
};

interface IMenuItemProps {
    item: {
        id: String;
        displayName: String;
        linkUrl: String;
        isHidden: boolean;
    };
    toggleMenu(): void;
}
