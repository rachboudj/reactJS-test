import React from 'react'; 
import { Outlet, Link } from 'react-router-dom';

import './Header.css';
import logo from '../logo.svg';


export default function Header() {
    return (
    <div>
        <header className='header'>
            <div className='logo'>
                <img src={logo} className='logoHeader' />
            </div>
            <nav>
                <ul className='menuHeader'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/message">Message</Link></li>
                    <li><Link to="/produit">Produit</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    
                </ul>
            </nav>
        </header>
        <Outlet /> {/* Pour que la page ne recharge pas */}
        </div>
    )
};