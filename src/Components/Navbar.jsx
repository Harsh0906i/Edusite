import './Nav.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import menu from '../assets/menu-icon.png'
import { useEffect, useState } from 'react'
export default function Navbar() {
    const [Mobile, setMobile] = useState(false);
    function toggle() {
        Mobile ? setMobile(false) : setMobile(true);
    }
    return (
        <div>
            <nav className={`nav-container`}>
                <img src={logo} className='logo' />
                <ul className={Mobile ?'' :'mobile-menu'}>
                    <Link className='li' to='/'>Home</Link>
                    <Link className='li' to='/about'>About Us</Link>
                    <Link to={'/campus'} className='li'>Campus</Link>
                    <Link to={'/contact'} className='li'><button className='btn'>Contact Us</button></Link>
                </ul>
                <img src={menu} alt="" className='menu' onClick={toggle} />
            </nav>
        </div>
    )
}
