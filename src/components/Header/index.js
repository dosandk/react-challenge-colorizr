import React, { Component } from 'react';
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
                        <a className="navbar__link navbar__link--active" href="#/create">Create</a>
                        <a className="navbar__link" href="#/explore">Explore</a>
                        <a className="navbar__link" href="#/presets">Presets</a>
                        <a className="navbar__link" href="#/export">Export</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

