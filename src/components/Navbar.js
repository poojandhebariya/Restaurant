import React,{useRef} from 'react'
import Logo from "../assets/images/logo.png"
import {cart} from "../Data"


const Navbar = () => {
    const searchRef=useRef();
    const cartRef=useRef();
    const navRef=useRef();
    
    const searchHandler=()=>{
        searchRef.current.classList.toggle("active");
        navRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    };

    const cartHandler=()=>{
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navRef.current.classList.remove("active");
    };

    const navbarHandler=()=>{
        navRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    };

  return (
    <div>
      <header className='header'>
        <a href='#' className='logo'>
            <img src={Logo} alt='/'></img>
        </a>
        <nav className='navbar' ref={navRef}>
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#menu">menu</a>
          <a href="#products">products</a>
          <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a>
        </nav>
        <div className="icons">
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className='search-form 'ref={searchRef}>
            <input type='search' placeholder='search here........' id='search-box'/>
            <label htmlFor='search-box' className='fas fa-search'></label>
        </div>
        <div className='cart-items-container' ref={cartRef}>
        {
            cart.map((item,index)=>(
                <div className='cart-item' key={index}>
                    <span className='fas fa-times'></span>
                    <img src={item.img} alt=''/>
                    <div className='content'>
                        <h3>cart item 01</h3>
                        <div className='price'>$15/-</div>
                    </div>
                </div>
            )
            )
        }
        <a className='btn' href='#'>
            checkout now
        </a>
        </div>
      </header>
    </div>
  )
};

export default Navbar
