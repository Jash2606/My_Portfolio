import "./NavbarStyle.css";

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const[color,setcolor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100 ){
            setcolor(true);
        }else{
            setcolor(false);
        }
    }
    window.addEventListener('scroll',changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className="nav-menu">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/projects">Project</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar