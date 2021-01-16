import'./Showcase.scss'
function Showcase() {
    return (
        <div className="showcase">
            <div className="container showcase-container">
                <div className="showcase-inner">
                    <h1 className="showcase-title">LAGS Blog Site</h1>
                    <p className="showcase-text">React Showcase</p>
                    <div className="showcase-actions">
                        <a href="#" className="btn btn-primary">See Blog</a>
                        <a href="#" className="btn btn-primary">See Code</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase
