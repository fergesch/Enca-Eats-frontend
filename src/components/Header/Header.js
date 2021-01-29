import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';


export default function Header() {
    return (
        <div>
            <header className="NavHeader">
                <nav>
                    <ul>
                        <li><Link className="header" to="/">Home</Link></li>
                        <li><Link className="header" to="/account">Account</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}