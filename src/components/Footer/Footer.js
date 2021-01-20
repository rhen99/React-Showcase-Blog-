import { Link } from "react-router-dom";

import './Footer.scss';
import twitter from '../../icons/twitter.svg';
import linkedin from '../../icons/linkedin.svg';
import github from '../../icons/github.svg';
function Footer() {
    return (
        <div className="footer">
            <div className="container footer-container">
                <nav className="footer-nav">
                    <ul className="footer-nav-list">
                        <li className="footer-nav-item">
                            <Link to="/" className="footer-nav-link">Home</Link>
                        </li>
                        <li className="footer-nav-item">
                            <Link to="/blog" className="footer-nav-link">Blog</Link>
                        </li>
                        <li className="footer-nav-item">
                            <a href="https://github.com/rhen99/React-Showcase-Blog-" className="footer-nav-link">See Code</a>
                        </li>
                    </ul>
                </nav>
                <nav className="footer-socials">
                    <ul className="footer-socials-list">
                        <li className="footer-socials-item">
                           <a href='https://twitter.com/LAGSWS' target="_blank" className="footer-socials-link"><img src={twitter} alt=""/></a>
                        </li>
                        <li className="footer-socials-item">
                           <a href="https://github.com/rhen99" target="_blank" className="footer-socials-link"><img src={github} alt=""/></a>
                        </li>
                        <li className="footer-socials-item">
                           <a href="https://www.linkedin.com/in/lincoldarhen/" target="_blank" className="footer-socials-link"><img src={linkedin} alt=""/></a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <p className="footer-copyright">&copy; {new Date().getFullYear()} All Rights Reserved | <a href="#">lincoldarhen.com</a></p>
            </div>
        </div>
    )
}

export default Footer
