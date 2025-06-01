import React from 'react'
import menu from './assets/menu.svg';
import logo from './assets/logo.svg';
import bottom from './assets/bottom.svg';
import cart from './assets/cart.svg';
import user from './assets/user.svg';
import {  NavbarContainer } from './style/navbarstyle';

const Navbar = () => {
  return (
    <NavbarContainer className="nav-section">
      <div className="nav-container">
        <div className="logo-con">
          <img src={menu} alt="menu" className="menu-icon" />
          <img src={logo} alt="logo" />
        </div>
        <div className="menus-con">
          <div>Motor <img src={bottom} alt="bottom" /></div>
          <div>Caravan <img src={bottom} alt="bottom" /></div>
          <div>Tuning <img src={bottom} alt="bottom" /></div>
          <div>User Car <img src={bottom} alt="bottom" /></div>
          <div>Camping Place <img src={bottom} alt="bottom" /></div>
        </div>
        <div className="login-con">
          <img src={cart} alt="cart" className="shop-icon" />
          <img src={menu} alt="menu" className="option-icon" />
          <img src={user} alt="user" className="user-icon" />
          <div className="lang-icon">En <img src={bottom} alt="bottom" /></div>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
