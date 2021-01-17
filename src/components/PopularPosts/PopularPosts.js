import './PopularPosts.scss';
function PopularPosts() {
    return (
        <div className="popular">
            <div className="container popular-container">
                <h1 className="popular-title">Most Popular Blog Posts</h1>
                <div className="popular-grid">
                    <div className="popular-grid-tile">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Post Title</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident consequatur aperiam quo et eveniet neque quasi veritatis iure eligendi!</p>
                                <div className="card-action">
                                    <a href="#" className="btn btn-sm btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular-grid-tile">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Post Title</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident consequatur aperiam quo et eveniet neque quasi veritatis iure eligendi!</p>
                                <div className="card-action">
                                    <a href="#" className="btn btn-sm btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="popular-grid-tile">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Post Title</h3>
                                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident consequatur aperiam quo et eveniet neque quasi veritatis iure eligendi!</p>
                                <div className="card-action">
                                    <a href="#" className="btn btn-sm btn-secondary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularPosts
