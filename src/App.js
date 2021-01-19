import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About'
import PopularPosts from './components/PopularPosts/PopularPosts';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import SinglePost from './components/SinglePost/SinglePost';

import PostsState from "./context/posts/PostsState";
function App() {
  return (
    <PostsState>
      <Router>
      <>
        <Navbar/>
          <Switch>
            <Route path="/" exact>
              <Showcase/>
              <About/>
              <PopularPosts/>
            </Route>
            <Route path="/blog/:id" exact>
              <SinglePost/>
            </Route>
            <Route path="/blog">
              <Blog/>
            </Route>
          </Switch>
        <Footer/>
      </>
    </Router>
    </PostsState>
  );
}

export default App;
