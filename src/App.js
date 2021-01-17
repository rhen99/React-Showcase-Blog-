import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Showcase from './components/Showcase/Showcase';
import About from './components/About/About'
import PopularPosts from './components/PopularPosts/PopularPosts';
function App() {
  return (
    <>
    <Navbar/>
    <Showcase/>
    <About/>
    <PopularPosts/>
    </>
  );
}

export default App;
