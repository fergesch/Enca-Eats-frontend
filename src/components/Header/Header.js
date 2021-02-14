import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';

import SignInSignOutButton from "../SignInOutButton/SignInSignOutButton";

export default function Header() {
    return (
        <div>
            <header className="NavHeader">
                <nav>
                    <ul>
                        <li><Link className="header" to="/">Home</Link></li>
                        <li><Link className="header" to="/account">Account</Link></li>
                        <li><SignInSignOutButton /></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}