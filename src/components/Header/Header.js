import React, { useRef } from "react";
import { Link, useLocation } from 'react-router-dom';

import MediaSearch from "../MediaSearch/MediaSearch";

import './Header.scss';

const navLinks = [
    {
        title: 'Home',
        pathname: '/',
        iconclass: 'bx bx-home'
    },
    {
        title: 'Movies',
        pathname: '/movie',
        iconclass: 'bx bx-film'
    },
    { 
        title: 'Series',
        pathname: '/tv',
        iconclass: 'bx bx-tv'
    },
    { 
        title: 'Search',
        pathname: '/search',
        iconclass: 'bx bx-search'
    },
    { 
        title: 'About',
        pathname: '/about',
        iconclass: 'bx bx-info-circle'
    }
];

const Header = () => {
    const {pathname} = useLocation();
    const headerRef = useRef(null);
    const activeLink = navLinks.findIndex(link => link.pathname === pathname);

    return (
        <header className="header" ref={headerRef}>
            <nav className="nav container">
                <div className="nav-logo">
                    <i className='nav-logo__icon bx bx-camera-movie'></i>
                    <Link className="nav-logo__link" to="/">
                        Movie<span className="nav-logo__link nav-logo__link--primary">app</span>
                    </Link>
                </div>
                <div className="nav-search">
                    <MediaSearch />
                </div>
                <div className="nav__menu">
                    <ul className="nav__list">
                        {
                            navLinks.map((link, index) => (
                                <li className={`nav__list-item ${index === activeLink ? 'nav__list-item--active' : ''}`} key={index}>
                                    <Link className="nav__link" to={link.pathname}>
                                        <i className={`nav__link-icon ${link.iconclass}`}></i>
                                        <span className="nav__link-text">{link.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;