import './Navbar.css';
import { useState } from 'react';
function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="#"><span>LAGS</span> Blog Site</a> 
                    <a href="#" className="mobile-btn" onClick={() => setShow(!show)}>
                        <div className="line"></div>
                        <div className={show ? ' line opened': 'line'}></div>
                        <div className={show ? ' line opened': 'line'}></div>
                    </a>
                </div>
                <nav className={show ? 'navigation show' : 'navigation'}>
                    <ul className="list">
                        <li className="item"><a href="#" className="link active">Home</a></li>
                        <li className="item"><a href="#" className="link">Blog</a></li>
                        <li className="item see-code"><a href="#" className="btn btn-primary">See Code</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
