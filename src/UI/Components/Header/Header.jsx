import React from 'react'
import { ShoppingCart, UserCheck } from 'react-feather';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, NavbarToggler, Collapse, Nav } from 'reactstrap';
import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div style={{
        display: 'block', padding: "30px 0"
      }}>
        <Navbar color="dark" dark expand="md">
          <Link className="navbar-brand logo" to="/" >Redux Example</Link>
          <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
          <Collapse isOpen={isOpen} navbar className='justify-content-end'>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/" className='nav-link'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/products" className='nav-link'>Products</Link>
              </NavItem>
              <NavItem>
                <Link to="/admin" className='nav-link'>Admin</Link>
              </NavItem>
              <NavItem>
                <Link to="/cart" className='nav-link' title="Cart"><ShoppingCart /></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    </div>
  )
}

export default Header