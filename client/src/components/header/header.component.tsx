import React from 'react';
import { Link } from 'react-router-dom';

import { Accordion, Navbar, Nav, NavDropdown} from 'react-bootstrap'
// import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import './header.styles.scss';



function Header() {
  return (
      <header className='app-header app-header'>
        <div className="container d-flex justify-content-between">
          <Link to='/' className='logo-container'>
            <div className="visually-hidden">logo</div>
            <svg xmlns="http://www.w3.org/2000/svg" className='app-logo fnt-text' aria-hidden="true">
            <text x="0" y="15" className="fnt-semiBold" style={{ fill: 'currentColor'}}>DUB</text>
            <text x="32" y="15" className="fnt-light fnt-black" style={{ fill: 'currentColor', fontSize: '1.5em'}}>il</text>            
            </svg>
            {/* <Logo className='app-logo' aria-hidden="true" /> */}
          </Link>

          <div className='menu-container'>
            <Link className="btn-link fnt-current" to='/'>HOME</Link>
            <Link className="btn-link fnt-current" to='/blog'>BLOG</Link>
        </div>
        </div>



        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
      </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      </header>
  );
}

export default Header;
