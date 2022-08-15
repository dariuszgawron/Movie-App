import React from "react";
// import { Link } from "react-router-dom";
import themoviedbLogo from '../../images/themoviedb.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content footer__content--center container">
                <div className="footer__info">
                    &#169; Copyright by Dariusz Gawron
                </div>
                <div className="footer__info">
                    <img className="footer__info-icon" src={themoviedbLogo} alt="themoviedb logo" />
                    <span className="footer__info-text">This product uses the TMDB API but is not endorsed or certified by TMDB.</span>
                </div>
            </div>
        </footer>
    )
};

export default Footer;