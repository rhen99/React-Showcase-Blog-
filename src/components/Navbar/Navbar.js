import './Navbar.scss';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
function Navbar() {
    const [show, setShow] = useState(false);
    const [snap, setSnap] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(document.body.scrollTop > 55 || document.documentElement.scrollTop > 55){
                setSnap(true);
            }else{
                setSnap(false);
            }
        });
    }, []);
    return (
        <div className={snap ? 'navbar sticky': 'navbar'}>
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <Link to="/"><span>LAGS</span> Blog Site</Link> 
                    <a href="#!" className="navbar-toggle" onClick={(e) => {
                        e.preventDefault();
                        setShow(!show);
                    }}>
                        <div className="navbar-line"></div>
                        <div className={show ? 'navbar-line opened': 'navbar-line'}></div>
                        <div className={show ? ' navbar-line opened': 'navbar-line'}></div>
                    </a>
                </div>
                <nav className={show ? 'navbar-navigation show' : 'navbar-navigation'}>
                    <ul className="navbar-list">
                        <li className="navbar-item"><NavLink to="/" exact className="navbar-link" activeClassName="active">Home</NavLink></li>
                        <li className="navbar-item"><NavLink activeClassName="active" to="/blog" className="navbar-link" >Blog</NavLink></li>
                        <li className="navbar-item see-code"><a href="https://github.com/rhen99/React-Showcase-Blog-" rel="noreferrer" target="_blank" className="btn btn-primary">See Code</a></li>
                    </ul>
                </nav>
            </div>
            
        </div>
    )
}

export default Navbar
