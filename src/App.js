import logo from './logo.svg';
import './App.css';
import "./assets/css/style.css"
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Menu/>
      <Products/>
      <Review/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
