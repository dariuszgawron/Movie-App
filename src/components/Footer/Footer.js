import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <Link to="/">

                </Link>
                <div className="footer__links">
                    <Link to="/">
                        Home
                    </Link>
                    <Link to="/">
                        About us 
                    </Link>
                </div>
            </div>
            Footer
        </footer>
    )
};

export default Footer;