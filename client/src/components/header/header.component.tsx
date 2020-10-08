import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import HeaderMenu from '../header-menu/header-menu.component';

import './header.styles.scss';

class Header extends React.Component {
    state = {
        isOpenMenu: false,
    };

    handleToggle = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    };

    render() {
        const { isOpenMenu } = this.state;
        const { handleToggle } = this;
        return (
            <header className='app-header app-header'>
                <div className='container d-flex justify-content-between'>
                    <Link to='/' className='logo-container'>
                        <div className='visually-hidden'>logo</div>
                        <Logo className='app-logo' aria-hidden='true' />
                    </Link>
                    <button className='manu__trigger' onClick={handleToggle}>
                        = Menu
                    </button>
                </div>
                {/* {isOpenMenu ? <HeaderMenu isOpenMenu={isOpenMenu} toggleAction={handleToggle}></HeaderMenu> : null} */}
                <HeaderMenu isOpenMenu={isOpenMenu} toggleAction={handleToggle}></HeaderMenu>
            </header>
        );
    }
}

export default Header;
