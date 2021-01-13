import React from "react";
import {Link} from 'react-router-dom';
import './Header.css';


function Header() {
  return (
      <div>
        <header className="NavHeader">
          <nav>
            <ul>
              <li><Link className="header" to="/">Home</Link></li>
              <li><Link className="header" to="/restaurant">Restaurant</Link></li>
            </ul>
          </nav>
        </header>
      </div>
  );
}

export default Header;
