import './About.scss';
function About() {
    return (
        <div className="about">
            <div className="container about-container">
                <h1 className="about-title">ReactJS Showcase (Blog Site)</h1>
                <article className="about-text">
                    <p>This is a mock blog website that's part my React Showcase projects, and part of my <a href="#">lincoldarhen.com</a>. This is solely made to show my React.js skills.</p>
                </article>
                <form action="#">
                    <div className="form-inline">
                        <div className="form-group">
                            <input type="text" placeholder="Enter your email here..." className="form-control"/>
                            <span className="form-text">We will not share your email.</span>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-sm btn-secondary" value="Notify Me"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default About
