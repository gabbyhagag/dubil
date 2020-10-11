import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import MenuCoverPage from '../menu-cover-page/menu-cover-page.component';

import './header.styles.scss';

class Header extends React.Component {
    state = {
        isOpenMenu: false,
    };

    handleToggleMenu = () => {
        this.setState({ isOpenMenu: !this.state.isOpenMenu });
    };

    render() {
        const { isOpenMenu } = this.state;
        const { handleToggleMenu } = this;
        return (
            <header className='app-header app-header'>
                <div className='container d-flex justify-content-between'>
                    <Link to='/' className='logo-container'>
                        <div className='visually-hidden'>logo</div>
                        <Logo className='app-logo' aria-hidden='true' />
                    </Link>
                    <button className='manu__trigger' onClick={handleToggleMenu}>
                        = Menu
                    </button>
                </div>
                {/* {isOpenMenu ? <HeaderMenu isOpenMenu={isOpenMenu} toggleAction={handleToggle}></HeaderMenu> : null} */}
                <MenuCoverPage isOpenMenu={isOpenMenu} toggleMenu={handleToggleMenu}></MenuCoverPage>
            </header>
        );
    }
}

export default Header;
