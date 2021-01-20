import { Link } from 'react-router-dom';
import'./Showcase.scss'

function Showcase() {
    return (
        <div className="showcase">
            <div className="container showcase-container">
                <div className="showcase-inner">
                    <h1 className="showcase-title">LAGS Blog Site</h1>
                    <p className="showcase-text">React Showcase</p>
                    <div className="showcase-actions">
                        <Link to="/blog" className="btn btn-primary">See Blog</Link>
                        <a href="https://github.com/rhen99/React-Showcase-Blog-" target="_blank" rel="noreferrer" className="btn btn-primary">See Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase
