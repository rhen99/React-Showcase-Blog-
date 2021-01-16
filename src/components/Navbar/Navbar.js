import './Navbar.scss';
import { useState } from 'react';
function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <div className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <a href="#"><span>LAGS</span> Blog Site</a> 
                    <a href="#" className="navbar-toggle" onClick={() => setShow(!show)}>
                        <div className="navbar-line"></div>
                        <div className={show ? 'navbar-line opened': 'navbar-line'}></div>
                        <div className={show ? ' navbar-line opened': 'navbar-line'}></div>
                    </a>
                </div>
                <nav className={show ? 'navbar-navigation show' : 'navbar-navigation'}>
                    <ul className="navbar-list">
                        <li className="navbar-item"><a href="#" className="navbar-link active">Home</a></li>
                        <li className="navbar-item"><a href="#" className="navbar-link">Blog</a></li>
                        <li className="navbar-item see-code"><a href="#" className="btn btn-primary">See Code</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
