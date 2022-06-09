import React from 'react'; 

import './Header.css';
import logo from '../logo.svg';
import { Outlet } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} className='logoHeader' />
            </div>
            <nav>
                <ul className='menuHeader'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/message">Message</Link></li>
                    <li><Link to="/produit">Produit</Link></li>
                    
                </ul>
            </nav>
            <Outlet /> {/* Pour que la page ne recharge pas */}
        </header>
    )
};