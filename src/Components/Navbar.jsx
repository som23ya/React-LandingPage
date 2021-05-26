import React, {useState } from 'react'
import logo from '../images/logo1.png';

function Navbar() {

    const [nav, setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <span className='left-nav'>
            <a href='#main' className='logo'>
                <img src={logo} alt=''/>
            </a>
            <h3 className='h3-nav'>VISTAR</h3>
            </span>
            <span className='right-nav'>
            <input type='checkbox' className='menu-btn' id='menu-btn'/>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            
            <ul className='menu'>
                <li><a href='#main'>Home</a></li>
                <li><a href='#features'>Features</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='https://vistar-jobs.netlify.app/'>Search/Post Job</a></li>
            </ul>
            </span>
        </nav>
    )
}

export default Navbar
