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
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Project</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar