import React, { useRef } from "react";
import {Link,useLocation} from 'react-router-dom';

import './Header.css';

const navLinks = [
    {
        title: 'Home',
        pathname: '/'
    },
    {
        title: 'Movies',
        pathname: '/movies'
    },
    { 
        title: 'TV Shows',
        pathname: '/tv'
    }
];

const Header = () => {
    const {pathname} = useLocation();
    const headerRef = useRef(null);
    const activeLink = navLinks.findIndex(link => link.pathname === pathname);

    return (
        <div className="header" ref={headerRef}>
            <div className="header__container">
                {/* LOGO */}
                <ul className="header-nav">
                { 
                    navLinks.map((link,index) => (
                        <li 
                            key={index} 
                            className={`header-nav__item ${index === activeLink ? 'header-nav__item--active' : ''}`}>
                            <Link to={link.pathname}>
                                {link.title}
                            </Link>
                        </li>
                ))}
                </ul>
            </div>
        </div>
    )
};

export default Header;