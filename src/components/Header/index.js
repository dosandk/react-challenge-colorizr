import React, { Component } from 'react';
import NavLink from '../NavLink'
import './index.scss';

export default function Header() {
    return (
        <header className="site-header">
            <div className="site-header__wrapper">
                <div className="site-header__entry">
                    <a href="/">
                        <img role="presentation" className="site-header__logo" src="images/logo-dark.svg" />
                    </a>
                    <div className="toggle-navbar">
                        <span className="toggle-navbar__icon toggle-navbar__icon--active">&nbsp;</span>
                    </div>
                </div>
                <div className="site-header__navbar">
                    <nav className="navbar">
                        <NavLink to='/create'>Create</NavLink>
                        <NavLink to='/explore'>Explore</NavLink>
                        <NavLink to='/presets'>Presets</NavLink>
                        <NavLink to='/export'>Export</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}

